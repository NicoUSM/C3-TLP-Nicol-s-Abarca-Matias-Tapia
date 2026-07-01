import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user

  if (!user || !['Administrador', 'Ejecutivo'].includes(user.perfil)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const vehiculos = await prisma.vehiculo.findMany({
    orderBy: { id: 'desc' },
    include: { tipo: true },
  })

  return vehiculos.map((vehiculo) => ({
    id: vehiculo.id,
    patente: vehiculo.patente,
    marca: vehiculo.marca,
    modelo: vehiculo.modelo,
    valorDiario: vehiculo.valorDiario,
    estado: vehiculo.estado,
    fotografia: vehiculo.fotografia,
    tipo: vehiculo.tipo.nombre,
  }))
})
