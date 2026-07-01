type SessionUser = {
  perfil: string
}

// Nombre: roleGuard
// Input: event (H3Event)
// Descripcion: valida la sesion y controla acceso a rutas API de administrador y ejecutivo.
// Output: no retorna valor si el acceso es valido; lanza error 403 si no esta autorizado.
export default defineEventHandler(async (event) => {
  const path = event.path ?? ''

  if (!path.startsWith('/api/admin') && !path.startsWith('/api/ejecutivo')) {
    return
  }

  const session = await getUserSession(event)
  const user = session.user as SessionUser | undefined

  if (!user) {
    throw createError({ statusCode: 403, message: 'No autorizado' })
  }

  if (path.startsWith('/api/admin') && user.perfil !== 'Administrador') {
    throw createError({ statusCode: 403, message: 'Acceso denegado' })
  }

  if (path.startsWith('/api/ejecutivo') && !['Administrador', 'Ejecutivo'].includes(user.perfil)) {
    throw createError({ statusCode: 403, message: 'Acceso denegado' })
  }
})
