const ADMIN_ROLE = 'Administrador'
const EXEC_ROLE = 'Ejecutivo'

export const isProtectedApiPath = (path: string) => {
  return path.startsWith('/api/admin') || path.startsWith('/api/ejecutivo')
}

export const canAccessAppPath = (path: string, perfil: string) => {
  if (path.startsWith('/admin')) {
    return perfil === ADMIN_ROLE
  }

  if (path.startsWith('/ejecutivo')) {
    return perfil === ADMIN_ROLE || perfil === EXEC_ROLE
  }

  return true
}

export const canAccessApiPath = (path: string, perfil: string) => {
  if (path.startsWith('/api/admin')) {
    return perfil === ADMIN_ROLE
  }

  if (path.startsWith('/api/ejecutivo')) {
    return perfil === ADMIN_ROLE || perfil === EXEC_ROLE
  }

  return true
}