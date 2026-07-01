import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user

  if (!user || !['Administrador', 'Ejecutivo'].includes(user.perfil)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const clientes = await prisma.cliente.findMany({ orderBy: { id: 'desc' } })
  const arriendos = await prisma.arriendo.findMany({
    orderBy: { id: 'desc' },
    include: { vehiculo: true },
  })

  return clientes.map((cliente) => {
    const arriendosCliente = arriendos.filter((arriendo) => arriendo.rutCliente === cliente.rut)
    const vigentes = arriendosCliente.filter((arriendo) => !arriendo.fechaHoraRecepcion).length
    const historicos = arriendosCliente.filter((arriendo) => !!arriendo.fechaHoraRecepcion).length
    const ultimo = arriendosCliente[0]

    return {
      id: cliente.id,
      rut: cliente.rut,
      nombre: cliente.nombre,
      telefono: cliente.telefono,
      email: cliente.email,
      direccion: cliente.direccion,
      arriendosVigentes: vigentes,
      arriendosHistoricos: historicos,
      ultimoVehiculo: ultimo ? `${ultimo.vehiculo.marca} ${ultimo.vehiculo.modelo}` : 'Sin arriendos',
    }
  })
})
