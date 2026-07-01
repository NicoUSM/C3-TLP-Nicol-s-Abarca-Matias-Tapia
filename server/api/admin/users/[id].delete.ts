import { prisma } from '../../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user

  if (!user || user.perfil !== 'Administrador') {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const userId = Number(getRouterParam(event, 'id'))

  if (Number.isNaN(userId)) {
    throw createError({ statusCode: 400, statusMessage: 'ID inválido.' })
  }

  if (user.id === userId) {
    throw createError({ statusCode: 400, statusMessage: 'No puedes borrar tu propia cuenta.' })
  }

  await prisma.usuario.delete({ where: { id: userId } })
  return { ok: true }
})
