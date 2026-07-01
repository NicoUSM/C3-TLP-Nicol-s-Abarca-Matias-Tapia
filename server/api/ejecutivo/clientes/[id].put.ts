import { prisma } from '../../../utils/prisma'
import { isValidRut, isValidEmail } from '../../../utils/validators'

type SessionUser = {
  perfil: string
}

// Nombre: updateCliente
// Input: event (H3Event)
// Descripcion: valida la sesion, revisa los datos recibidos y actualiza un cliente por ID.
// Output: cliente actualizado con sus datos guardados en la base de datos.
export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user as SessionUser | undefined

  if (!user || !['Administrador', 'Ejecutivo'].includes(user.perfil)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const clienteId = Number(getRouterParam(event, 'id'))

  if (Number.isNaN(clienteId)) {
    throw createError({ statusCode: 400, statusMessage: 'ID inválido.' })
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

  const duplicate = await prisma.cliente.findFirst({
    where: {
      rut: body.rut,
      NOT: { id: clienteId },
    },
  })

  if (duplicate) {
    throw createError({ statusCode: 409, statusMessage: 'Ya existe otro cliente con ese RUT.' })
  }

  return prisma.cliente.update({
    where: { id: clienteId },
    data: {
      rut: body.rut,
      nombre: body.nombre,
      telefono: body.telefono,
      email: body.email,
      direccion: body.direccion,
    },
  })
})
