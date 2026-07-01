import { prisma } from '../../utils/prisma'
import { isValidRut, isValidEmail } from '../../utils/validators'

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user

  if (!user || !['Administrador', 'Ejecutivo'].includes(user.perfil)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const body = await readBody<{ rut?: string; nombre?: string; telefono?: string; email?: string; direccion?: string }>(event)

  if (!body?.rut || !body.nombre || !body.telefono || !body.email || !body.direccion) {
    throw createError({ statusCode: 400, statusMessage: 'Completa todos los campos.' })
  }

  if (!isValidRut(body.rut)) {
    throw createError({ statusCode: 400, statusMessage: 'El RUT no es válido.' })
  }

  if (!isValidEmail(body.email)) {
    throw createError({ statusCode: 400, statusMessage: 'El correo no es válido.' })
  }

  const duplicate = await prisma.cliente.findUnique({ where: { rut: body.rut } })

  if (duplicate) {
    throw createError({ statusCode: 409, statusMessage: 'Ya existe un cliente con ese RUT.' })
  }

  return prisma.cliente.create({
    data: {
      rut: body.rut,
      nombre: body.nombre,
      telefono: body.telefono,
      email: body.email,
      direccion: body.direccion,
    },
  })
})
