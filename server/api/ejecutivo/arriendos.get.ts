import { prisma } from '../../utils/prisma'

const getTotal = (fechaInicio: Date, fechaTermino: Date, valorDiario: number) => {
  const dayMs = 1000 * 60 * 60 * 24
  const diff = Math.max(1, Math.ceil((fechaTermino.getTime() - fechaInicio.getTime()) / dayMs) + 1)
  return diff * valorDiario
}

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user

  if (!user || !['Administrador', 'Ejecutivo'].includes(user.perfil)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const arriendos = await prisma.arriendo.findMany({
    orderBy: { id: 'desc' },
    include: { vehiculo: true, usuario: true },
  })

  return arriendos.map((arriendo) => ({
    id: arriendo.id,
    cliente: arriendo.nombreCliente,
    rut: arriendo.rutCliente,
    vehiculo: `${arriendo.vehiculo.marca} ${arriendo.vehiculo.modelo}`,
    patente: arriendo.vehiculo.patente,
    fechaInicio: arriendo.fechaInicio.toISOString().slice(0, 10),
    fechaFin: arriendo.fechaTermino.toISOString().slice(0, 10),
    estado: arriendo.fechaHoraRecepcion ? 'Finalizado' : 'Vigente',
    total: getTotal(arriendo.fechaInicio, arriendo.fechaTermino, arriendo.vehiculo.valorDiario),
    vehiculoId: arriendo.vehiculoId,
  }))
})
