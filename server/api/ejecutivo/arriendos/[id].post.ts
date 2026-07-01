import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { randomUUID } from 'node:crypto'
import { prisma } from '../../../utils/prisma'

type SessionUser = {
  perfil: string
}

const uploadDir = join(process.cwd(), 'public', 'uploads', 'arriendos')
const datePattern = /^\d{4}-\d{2}-\d{2}$/
const timePattern = /^([01]\d|2[0-3]):[0-5]\d$/

// Nombre: registrarMovimientoArriendo
// Input: event (H3Event)
// Descripcion: valida la sesion, procesa formulario multipart y registra entrega o recepcion del arriendo.
// Output: objeto con ok true e ID del arriendo actualizado.
export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user as SessionUser | undefined

  if (!user || !['Administrador', 'Ejecutivo'].includes(user.perfil)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const arriendoId = Number(getRouterParam(event, 'id'))

  if (Number.isNaN(arriendoId)) {
    throw createError({ statusCode: 400, statusMessage: 'ID inválido.' })
  }

  const parts = await readMultipartFormData(event)
  const fields = new Map<string, string>()
  let filePath: string | null = null

  for (const part of parts ?? []) {
    if (part.filename) {
      await mkdir(uploadDir, { recursive: true })
      const extension = part.filename.includes('.') ? part.filename.split('.').pop() : 'jpg'
      const fileName = `${randomUUID()}.${extension ?? 'jpg'}`
      await writeFile(join(uploadDir, fileName), part.data)
      filePath = `/uploads/arriendos/${fileName}`
    } else if (part.name) {
      fields.set(part.name, part.data.toString())
    }
  }

  const tipoRegistro = fields.get('tipoRegistro')
  const fecha = fields.get('fecha')
  const hora = fields.get('hora')

  if (!tipoRegistro || !fecha || !hora || !filePath) {
    throw createError({ statusCode: 400, statusMessage: 'Completa fecha, hora y fotografía.' })
  }

  if (!['entrega', 'recepcion'].includes(tipoRegistro)) {
    throw createError({ statusCode: 400, statusMessage: 'Tipo de registro inválido.' })
  }

  if (!datePattern.test(fecha) || !timePattern.test(hora)) {
    throw createError({ statusCode: 400, statusMessage: 'Fecha u hora con formato inválido.' })
  }

  const arriendo = await prisma.arriendo.findUnique({
    where: { id: arriendoId },
    include: { vehiculo: true },
  })

  if (!arriendo) {
    throw createError({ statusCode: 404, statusMessage: 'Arriendo no encontrado.' })
  }

  const timestamp = new Date(`${fecha}T${hora}:00.000Z`)

  if (Number.isNaN(timestamp.getTime())) {
    throw createError({ statusCode: 400, statusMessage: 'Fecha u hora inválida.' })
  }

  if (tipoRegistro === 'entrega') {
    const contractStart = new Date(arriendo.fechaInicio)
    const contractEnd = new Date(arriendo.fechaTermino)
    contractEnd.setUTCHours(23, 59, 59, 999)

    if (timestamp < contractStart || timestamp > contractEnd) {
      throw createError({ statusCode: 400, statusMessage: 'La entrega debe estar dentro del período del contrato.' })
    }

    const updated = await prisma.arriendo.update({
      where: { id: arriendoId },
      data: { fechaHoraEntrega: timestamp, fotoEntrega: filePath },
    })

    await prisma.vehiculo.update({ where: { id: arriendo.vehiculoId }, data: { estado: 'Arrendado' } })
    return { ok: true, id: updated.id }
  }

  if (!arriendo.fechaHoraEntrega) {
    throw createError({ statusCode: 400, statusMessage: 'Primero registra la entrega del vehículo.' })
  }

  if (timestamp < arriendo.fechaHoraEntrega) {
    throw createError({ statusCode: 400, statusMessage: 'La recepción no puede ser anterior a la entrega.' })
  }

  const updated = await prisma.arriendo.update({
    where: { id: arriendoId },
    data: { fechaHoraRecepcion: timestamp, fotoRecepcion: filePath },
  })

  await prisma.vehiculo.update({ where: { id: arriendo.vehiculoId }, data: { estado: 'Disponible' } })
  return { ok: true, id: updated.id }
})
