import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user

  if (!user || user.perfil !== 'Administrador') {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const body = await readBody<{ nombre?: string; descripcion?: string }>(event)

  if (!body?.nombre?.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'El nombre es obligatorio.' })
  }

  const duplicate = await prisma.tipo.findFirst({ where: { nombre: body.nombre.trim() } })

  if (duplicate) {
    throw createError({ statusCode: 409, statusMessage: 'Ya existe un tipo con ese nombre.' })
  }

  return prisma.tipo.create({
    data: {
      nombre: body.nombre.trim(),
      descripcion: body.descripcion?.trim() || null,
    },
  })
})
