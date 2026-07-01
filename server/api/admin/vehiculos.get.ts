import { prisma } from '../../utils/prisma'

type SessionUser = {
  perfil: string
}

// Nombre: getVehiculos
// Input: event (H3Event)
// Descripcion: valida la sesion de administrador y obtiene el listado completo de vehiculos.
// Output: arreglo de vehiculos con datos principales y nombre del tipo.
export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  const user = session.user as SessionUser | undefined

  if (!user || user.perfil !== 'Administrador') {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado.' })
  }

  const vehiculos = await prisma.vehiculo.findMany({
    orderBy: { id: 'desc' },
    include: { tipo: true },
  })

  return vehiculos.map((vehiculo) => ({
    id: vehiculo.id,
    patente: vehiculo.patente,
    marca: vehiculo.marca,
    modelo: vehiculo.modelo,
    tipoId: vehiculo.tipoId,
    tipo: vehiculo.tipo.nombre,
    valorDiario: vehiculo.valorDiario,
    estado: vehiculo.estado,
    fotografia: vehiculo.fotografia,
  }))
})
