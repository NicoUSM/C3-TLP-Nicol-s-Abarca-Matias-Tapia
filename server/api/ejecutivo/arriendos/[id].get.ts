import { prisma } from '../../../utils/prisma'

type SessionUser = {
  perfil: string
}

// Nombre: getTotal
// Input: fechaInicio (Date), fechaTermino (Date), valorDiario (number)
// Descripcion: calcula el valor total del arriendo segun rango de fechas y valor diario.
// Output: monto total del arriendo.
const getTotal = (fechaInicio: Date, fechaTermino: Date, valorDiario: number) => {
  const dayMs = 1000 * 60 * 60 * 24
  const diff = Math.max(1, Math.ceil((fechaTermino.getTime() - fechaInicio.getTime()) / dayMs) + 1)
  return diff * valorDiario
}

// Nombre: getArriendoDetalle
// Input: event (H3Event)
// Descripcion: valida la sesion, busca un arriendo por ID y arma su detalle completo.
// Output: objeto con datos del arriendo, vehiculo, usuario, fechas, fotos, estado y total.
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

  const arriendo = await prisma.arriendo.findUnique({
    where: { id: arriendoId },
    include: { vehiculo: true, usuario: true },
  })

  if (!arriendo) {
    throw createError({ statusCode: 404, statusMessage: 'Arriendo no encontrado.' })
  }

  return {
    id: arriendo.id,
    cliente: arriendo.nombreCliente,
    rut: arriendo.rutCliente,
    vehiculo: `${arriendo.vehiculo.marca} ${arriendo.vehiculo.modelo}`,
    patente: arriendo.vehiculo.patente,
    fechaInicio: arriendo.fechaInicio.toISOString().slice(0, 10),
    fechaFinEstimada: arriendo.fechaTermino.toISOString().slice(0, 10),
    valorDiario: arriendo.vehiculo.valorDiario,
    fotoEntrega: arriendo.fotoEntrega,
    fotoRecepcion: arriendo.fotoRecepcion,
    fechaHoraEntrega: arriendo.fechaHoraEntrega ? arriendo.fechaHoraEntrega.toISOString() : null,
    fechaHoraRecepcion: arriendo.fechaHoraRecepcion ? arriendo.fechaHoraRecepcion.toISOString() : null,
    estado: arriendo.fechaHoraRecepcion ? 'Finalizado' : 'Vigente',
    usuario: arriendo.usuario.nombre,
    total: getTotal(arriendo.fechaInicio, arriendo.fechaTermino, arriendo.vehiculo.valorDiario),
    vehiculoId: arriendo.vehiculoId,
  }
})
