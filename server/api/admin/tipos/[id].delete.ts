import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user

  if (!user || user.perfil !== 'Administrador') {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const tipoId = Number(getRouterParam(event, 'id'))

  if (Number.isNaN(tipoId)) {
    throw createError({ statusCode: 400, statusMessage: 'ID inválido.' })
  }

  const relatedVehicles = await prisma.vehiculo.count({ where: { tipoId } })

  if (relatedVehicles > 0) {
    throw createError({ statusCode: 400, statusMessage: 'No puedes borrar un tipo que tiene vehículos asociados.' })
  }

  await prisma.tipo.delete({ where: { id: tipoId } })
  return { ok: true }
})
