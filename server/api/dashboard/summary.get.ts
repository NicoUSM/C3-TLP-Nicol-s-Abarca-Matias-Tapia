import { prisma } from '../../utils/prisma'

type SessionUser = {
  perfil: string
}

// Nombre: summaryDashboard
// Input: event (H3Event)
// Descripcion: valida la sesion y obtiene los totales principales para el dashboard.
// Output: objeto con conteos de clientes, arriendos, vehiculos y porcentaje de disponibilidad.
export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user as SessionUser | undefined

  if (!user || !['Administrador', 'Ejecutivo'].includes(user.perfil)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const [clientes, vehiculos, arriendosVigentes, arriendosFinalizados] = await Promise.all([
    prisma.cliente.count(),
    prisma.vehiculo.findMany({
      select: { estado: true },
    }),
    prisma.arriendo.count({
      where: { fechaHoraRecepcion: null },
    }),
    prisma.arriendo.count({
      where: { NOT: { fechaHoraRecepcion: null } },
    }),
  ])

  const totalVehiculos = vehiculos.length
  const vehiculosDisponibles = vehiculos.filter((v) => v.estado === 'Disponible').length
  const vehiculosArrendados = vehiculos.filter((v) => v.estado === 'Arrendado').length
  const vehiculosMantenimiento = vehiculos.filter((v) => v.estado === 'En mantenimiento').length
  const vehiculosBaja = vehiculos.filter((v) => v.estado === 'De baja').length

  return {
    clientes,
    arriendosVigentes,
    arriendosFinalizados,
    totalVehiculos,
    vehiculosDisponibles,
    vehiculosArrendados,
    vehiculosMantenimiento,
    vehiculosBaja,
    disponibilidad: totalVehiculos > 0
      ? Math.round((vehiculosDisponibles / totalVehiculos) * 100)
      : 0,
  }
})