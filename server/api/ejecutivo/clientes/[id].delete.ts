import { prisma } from '../../../utils/prisma'

type SessionUser = {
  perfil: string
}

// Nombre: deleteCliente
// Input: event (H3Event)
// Descripcion: valida la sesion, busca el cliente por ID y lo elimina si no tiene arriendos asociados.
// Output: objeto con ok true cuando el cliente se elimina correctamente.
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

  const cliente = await prisma.cliente.findUnique({ where: { id: clienteId } })

  if (!cliente) {
    throw createError({ statusCode: 404, statusMessage: 'Cliente no encontrado.' })
  }

  const arriendos = await prisma.arriendo.count({ where: { rutCliente: cliente.rut } })

  if (arriendos > 0) {
    throw createError({ statusCode: 400, statusMessage: 'No puedes borrar un cliente con arriendos asociados.' })
  }

  await prisma.cliente.delete({ where: { id: clienteId } })
  return { ok: true }
})
