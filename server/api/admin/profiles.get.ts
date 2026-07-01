import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user

  if (!user || user.perfil !== 'Administrador') {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  return prisma.perfil.findMany({ orderBy: { id: 'asc' } })
})
