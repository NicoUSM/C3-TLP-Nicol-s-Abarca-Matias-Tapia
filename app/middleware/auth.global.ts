export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession()
  const rutasPublicas = ['/login']

  if (!loggedIn.value && !rutasPublicas.includes(to.path)) {
    return navigateTo('/login')
  }
})

//El middleware se encarga de verificar si el usuario está autenticado.
// Si no lo está y la ruta a la que intenta acceder no es pública, 
// se redirige al usuario a la página de inicio de sesión.