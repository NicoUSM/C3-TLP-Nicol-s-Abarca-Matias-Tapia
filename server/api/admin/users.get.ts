import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user

  if (!user || user.perfil !== 'Administrador') {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const usuarios = await prisma.usuario.findMany({
    orderBy: { id: 'desc' },
    include: { perfil: true },
  })

  return usuarios.map((usuario) => ({
    id: usuario.id,
    email: usuario.identificador,
    nombre: usuario.nombre,
    perfil: usuario.perfil.nombre,
    perfilId: usuario.perfilId,
  }))
})
