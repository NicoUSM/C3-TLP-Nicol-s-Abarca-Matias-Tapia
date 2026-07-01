import { prisma } from '../../../utils/prisma'

type SessionUser = {
  perfil: string
}

// Nombre: allowedStates
// Input: ninguno
// Descripcion: define los estados permitidos para actualizar un vehiculo.
// Output: arreglo constante de estados validos.
const allowedStates = ['Disponible', 'Arrendado', 'En mantenimiento', 'De baja'] as const

// Nombre: updateVehiculoEstado
// Input: event (H3Event)
// Descripcion: valida la sesion, revisa el estado solicitado y actualiza el estado del vehiculo por ID.
// Output: objeto con los datos actualizados del vehiculo y su tipo.
export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user as SessionUser | undefined

  if (!user || !['Administrador', 'Ejecutivo'].includes(user.perfil)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const vehiculoId = Number(getRouterParam(event, 'id'))
  const body = await readBody<{ estado?: string }>(event)

  if (Number.isNaN(vehiculoId)) {
    throw createError({ statusCode: 400, statusMessage: 'ID inválido.' })
  }

  if (!body?.estado || !allowedStates.includes(body.estado as typeof allowedStates[number])) {
    throw createError({ statusCode: 400, statusMessage: 'Estado inválido.' })
  }

  const arriendoVigente = await prisma.arriendo.findFirst({
    where: {
      vehiculoId,
      fechaHoraRecepcion: null,
    },
  })

  if (arriendoVigente && body.estado === 'Disponible') {
    throw createError({ statusCode: 400, statusMessage: 'No puedes marcar disponible un vehículo con arriendo vigente.' })
  }

  const vehiculo = await prisma.vehiculo.update({
    where: { id: vehiculoId },
    data: { estado: body.estado },
    include: { tipo: true },
  })

  return {
    id: vehiculo.id,
    patente: vehiculo.patente,
    marca: vehiculo.marca,
    modelo: vehiculo.modelo,
    valorDiario: vehiculo.valorDiario,
    estado: vehiculo.estado,
    fotografia: vehiculo.fotografia,
    tipo: vehiculo.tipo.nombre,
  }
})
