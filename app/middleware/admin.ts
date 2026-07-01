export default defineNuxtRouteMiddleware(() => {
  const { user } = useUserSession()

  if (user.value?.perfil !== 'Administrador') {
    throw createError({
      statusCode: 403,
      message: 'Acceso denegado',
    })
  }
})

//El middleware se encarga de verificar si el usuario tiene el perfil de "Administrador".
// Si no lo tiene, se lanza un error con un código de estado 403 y un mensaje de "Acceso denegado".