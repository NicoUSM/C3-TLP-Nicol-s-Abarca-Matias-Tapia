import bcrypt from 'bcryptjs'
import { prisma } from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const { identificador, password } = await readBody<{ identificador?: string; password?: string }>(event)

  if (!identificador || !password) {
    throw createError({ statusCode: 401, message: 'Credenciales no son válidas' })
  }

  const usuario = await prisma.usuario.findUnique({
    where: { identificador },
    include: { perfil: true },
  })

  if (!usuario) {
    throw createError({ statusCode: 401, message: 'Credenciales no son válidas' })
  }

  const passwordValido = await bcrypt.compare(password, usuario.password)

  if (!passwordValido) {
    throw createError({ statusCode: 401, message: 'Credenciales no son válidas' })
  }

  await setUserSession(event, {
    user: {
      id: usuario.id,
      identificador: usuario.identificador,
      nombre: usuario.nombre,
      perfil: usuario.perfil.nombre,
    },
  })

  return { ok: true }
})
