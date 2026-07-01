import bcrypt from 'bcryptjs'
import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user

  if (!user) {
    throw createError({ statusCode: 401, statusMessage: 'No autenticado.' })
  }

  const body = await readBody<{ currentPassword?: string; newPassword?: string }>(event)

  if (!body?.currentPassword || !body.newPassword) {
    throw createError({ statusCode: 400, statusMessage: 'Completa ambas contraseñas.' })
  }

  const usuario = await prisma.usuario.findUnique({ where: { id: user.id } })

  if (!usuario) {
    throw createError({ statusCode: 404, statusMessage: 'Usuario no encontrado.' })
  }

  const passwordOk = await bcrypt.compare(body.currentPassword, usuario.password)

  if (!passwordOk) {
    throw createError({ statusCode: 401, statusMessage: 'La contraseña actual no coincide.' })
  }

  await prisma.usuario.update({
    where: { id: user.id },
    data: { password: await bcrypt.hash(body.newPassword, 10) },
  })

  return { ok: true }
})
