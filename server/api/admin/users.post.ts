import bcrypt from 'bcryptjs'
import { prisma } from '../../utils/prisma'
import { isValidEmail } from '../../utils/validators'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user

  if (!user || user.perfil !== 'Administrador') {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const body = await readBody<{ email?: string; nombre?: string; password?: string; perfilId?: number }>(event)

  if (!body?.email || !body.nombre || !body.password || !body.perfilId) {
    throw createError({ statusCode: 400, statusMessage: 'Completa todos los campos.' })
  }

  if (!isValidEmail(body.email)) {
    throw createError({ statusCode: 400, statusMessage: 'El correo no es válido.' })
  }

  const perfil = await prisma.perfil.findUnique({ where: { id: body.perfilId } })

  if (!perfil) {
    throw createError({ statusCode: 400, statusMessage: 'El perfil seleccionado no existe.' })
  }

  const duplicate = await prisma.usuario.findUnique({ where: { identificador: body.email } })

  if (duplicate) {
    throw createError({ statusCode: 409, statusMessage: 'Ya existe un usuario con ese correo.' })
  }

  const passwordHash = await bcrypt.hash(body.password, 10)

  const usuario = await prisma.usuario.create({
    data: {
      identificador: body.email,
      nombre: body.nombre,
      password: passwordHash,
      perfilId: body.perfilId,
    },
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
