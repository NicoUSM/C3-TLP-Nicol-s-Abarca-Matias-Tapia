import { prisma } from '../../utils/prisma'
import { isValidRut } from '../../utils/validators'

const datePattern = /^\d{4}-\d{2}-\d{2}$/

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user

  if (!user || !['Administrador', 'Ejecutivo'].includes(user.perfil)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const body = await readBody<{ rutCliente?: string; nombreCliente?: string; fechaInicio?: string; fechaTermino?: string; vehiculoId?: number }>(event)

  if (!body?.rutCliente || !body.nombreCliente || !body.fechaInicio || !body.fechaTermino || !body.vehiculoId) {
    throw createError({ statusCode: 400, statusMessage: 'Completa todos los campos.' })
  }

  if (!datePattern.test(body.fechaInicio) || !datePattern.test(body.fechaTermino)) {
    throw createError({ statusCode: 400, statusMessage: 'El formato de fecha debe ser YYYY-MM-DD.' })
  }

  if (!isValidRut(body.rutCliente)) {
    throw createError({ statusCode: 400, statusMessage: 'El RUT del cliente no es válido.' })
  }

  const fechaInicio = new Date(`${body.fechaInicio}T00:00:00.000Z`)
  const fechaTermino = new Date(`${body.fechaTermino}T00:00:00.000Z`)

  if (Number.isNaN(fechaInicio.getTime()) || Number.isNaN(fechaTermino.getTime()) || fechaTermino < fechaInicio) {
    throw createError({ statusCode: 400, statusMessage: 'Las fechas no son válidas.' })
  }

  const vehiculo = await prisma.vehiculo.findUnique({ where: { id: body.vehiculoId } })

  if (!vehiculo) {
    throw createError({ statusCode: 404, statusMessage: 'Vehículo no encontrado.' })
  }

  if (vehiculo.estado !== 'Disponible') {
    throw createError({ statusCode: 400, statusMessage: 'Solo se pueden arrendar vehículos disponibles.' })
  }

  const vehiculoConArriendoVigente = await prisma.arriendo.findFirst({
    where: { vehiculoId: vehiculo.id, fechaHoraRecepcion: null },
    select: { id: true },
  })

  if (vehiculoConArriendoVigente) {
    throw createError({ statusCode: 400, statusMessage: 'Este vehículo ya tiene un arriendo vigente.' })
  }

  const arriendo = await prisma.arriendo.create({
    data: {
      rutCliente: body.rutCliente,
      nombreCliente: body.nombreCliente,
      fechaInicio,
      fechaTermino,
      usuarioId: user.id,
      vehiculoId: vehiculo.id,
    },
    include: { vehiculo: true, usuario: true },
  })

  await prisma.vehiculo.update({ where: { id: vehiculo.id }, data: { estado: 'Arrendado' } })

  const dayMs = 1000 * 60 * 60 * 24
  const dias = Math.max(1, Math.ceil((arriendo.fechaTermino.getTime() - arriendo.fechaInicio.getTime()) / dayMs) + 1)

  return {
    id: arriendo.id,
    cliente: arriendo.nombreCliente,
    rut: arriendo.rutCliente,
    vehiculo: `${arriendo.vehiculo.marca} ${arriendo.vehiculo.modelo}`,
    patente: arriendo.vehiculo.patente,
    fechaInicio: arriendo.fechaInicio.toISOString().slice(0, 10),
    fechaFin: arriendo.fechaTermino.toISOString().slice(0, 10),
    valorDiario: arriendo.vehiculo.valorDiario,
    total: dias * arriendo.vehiculo.valorDiario,
    estado: 'Vigente',
    vehiculoId: arriendo.vehiculoId,
  }
})
