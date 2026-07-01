import bcrypt from 'bcryptjs'
import { prisma } from '../../../utils/prisma'
import { isValidEmail } from '../../../utils/validators'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user

  if (!user || user.perfil !== 'Administrador') {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const userId = Number(getRouterParam(event, 'id'))
  const body = await readBody<{ email?: string; nombre?: string; password?: string; perfilId?: number }>(event)

  if (Number.isNaN(userId)) {
    throw createError({ statusCode: 400, statusMessage: 'ID inválido.' })
  }

  if (!body?.email || !body.nombre || !body.perfilId) {
    throw createError({ statusCode: 400, statusMessage: 'Completa todos los campos obligatorios.' })
  }

  if (!isValidEmail(body.email)) {
    throw createError({ statusCode: 400, statusMessage: 'El correo no es válido.' })
  }

  const currentUser = await prisma.usuario.findUnique({ where: { id: userId } })

  if (!currentUser) {
    throw createError({ statusCode: 404, statusMessage: 'Usuario no encontrado.' })
  }

  const duplicate = await prisma.usuario.findFirst({
    where: {
      identificador: body.email,
      NOT: { id: userId },
    },
  })

  if (duplicate) {
    throw createError({ statusCode: 409, statusMessage: 'Ya existe otro usuario con ese correo.' })
  }

  const data: { identificador: string; nombre: string; perfilId: number; password?: string } = {
    identificador: body.email,
    nombre: body.nombre,
    perfilId: body.perfilId,
  }

  if (body.password) {
    data.password = await bcrypt.hash(body.password, 10)
  }

  const usuario = await prisma.usuario.update({
    where: { id: userId },
    data,
    include: { perfil: true },
  })

  return {
    id: usuario.id,
    email: usuario.identificador,
    nombre: usuario.nombre,
    perfil: usuario.perfil.nombre,
    perfilId: usuario.perfilId,
  }
})
