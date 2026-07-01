import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { randomUUID } from 'node:crypto'
import { prisma } from '../../../utils/prisma'
import { isValidPatente, normalizePatente } from '../../../utils/validators'

type SessionUser = {
  perfil: string
}

const uploadDir = join(process.cwd(), 'public', 'uploads', 'vehiculos')

// Nombre: formatPatente
// Input: patente (string)
// Descripcion: normaliza una patente y la formatea como AB-CD-12.
// Output: patente formateada para guardar o comparar.
const formatPatente = (patente: string) => {
  const clean = normalizePatente(patente)
  return `${clean.slice(0, 2)}-${clean.slice(2, 4)}-${clean.slice(4, 6)}`
}

// Nombre: updateVehiculo
// Input: event (H3Event)
// Descripcion: valida la sesion, procesa formulario multipart y actualiza los datos de un vehiculo por ID.
// Output: objeto con los datos actualizados del vehiculo y su tipo.
export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user as SessionUser | undefined

  if (!user || user.perfil !== 'Administrador') {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const vehiculoId = Number(getRouterParam(event, 'id'))

  if (Number.isNaN(vehiculoId)) {
    throw createError({ statusCode: 400, statusMessage: 'ID inválido.' })
  }

  const parts = await readMultipartFormData(event)
  const fields = new Map<string, string>()
  let fotografiaPath: string | null = null

  for (const part of parts ?? []) {
    if (part.filename) {
      await mkdir(uploadDir, { recursive: true })
      const extension = part.filename.includes('.') ? part.filename.split('.').pop() : 'jpg'
      const fileName = `${randomUUID()}.${extension ?? 'jpg'}`
      await writeFile(join(uploadDir, fileName), part.data)
      fotografiaPath = `/uploads/vehiculos/${fileName}`
    } else if (part.name) {
      fields.set(part.name, part.data.toString())
    }
  }

  const patente = fields.get('patente')
  const marca = fields.get('marca')
  const modelo = fields.get('modelo')
  const tipoId = Number(fields.get('tipoId'))
  const valorDiario = Number(fields.get('valorDiario'))

  if (!patente || !marca || !modelo || !tipoId || !valorDiario) {
    throw createError({ statusCode: 400, statusMessage: 'Completa todos los campos obligatorios.' })
  }

  if (!isValidPatente(patente)) {
    throw createError({ statusCode: 400, statusMessage: 'La patente debe tener formato AB-CD-12.' })
  }

  const current = await prisma.vehiculo.findUnique({ where: { id: vehiculoId } })

  if (!current) {
    throw createError({ statusCode: 404, statusMessage: 'Vehículo no encontrado.' })
  }

  const normalizedPatente = formatPatente(patente)
  const duplicate = await prisma.vehiculo.findFirst({
    where: {
      patente: normalizedPatente,
      NOT: { id: vehiculoId },
    },
  })

  if (duplicate) {
    throw createError({ statusCode: 409, statusMessage: 'Ya existe un vehículo con esa patente.' })
  }

  const tipo = await prisma.tipo.findUnique({ where: { id: tipoId } })

  if (!tipo) {
    throw createError({ statusCode: 400, statusMessage: 'El tipo seleccionado no existe.' })
  }

  const vehiculo = await prisma.vehiculo.update({
    where: { id: vehiculoId },
    data: {
      patente: normalizedPatente,
      marca,
      modelo,
      valorDiario,
      tipoId,
      fotografia: fotografiaPath ?? current.fotografia,
    },
    include: { tipo: true },
  })

  return {
    id: vehiculo.id,
    patente: vehiculo.patente,
    marca: vehiculo.marca,
    modelo: vehiculo.modelo,
    tipoId: vehiculo.tipoId,
    tipo: vehiculo.tipo.nombre,
    valorDiario: vehiculo.valorDiario,
    estado: vehiculo.estado,
    fotografia: vehiculo.fotografia,
  }
})
