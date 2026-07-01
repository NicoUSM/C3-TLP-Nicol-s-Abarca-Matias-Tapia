import { prisma } from '../../../utils/prisma'

type SessionUser = {
  perfil: string
}

// Nombre: deleteVehiculo
// Input: event (H3Event)
// Descripcion: valida la sesion de administrador, revisa arriendos asociados y elimina un vehiculo por ID.
// Output: objeto con ok true cuando el vehiculo se elimina correctamente.
export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user as SessionUser | undefined

  if (!user || user.perfil !== 'Administrador') {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const id = Number(getRouterParam(event, 'id'))

  if (Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID inválido.' })
  }

  const arriendos = await prisma.arriendo.count({ where: { vehiculoId: id } })

  if (arriendos > 0) {
    throw createError({ statusCode: 400, statusMessage: 'No puedes borrar un vehículo con arriendos asociados.' })
  }

  await prisma.vehiculo.delete({ where: { id } })
  return { ok: true }
})
