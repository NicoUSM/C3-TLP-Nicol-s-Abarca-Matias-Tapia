<script setup lang="ts">
definePageMeta({
    layout: 'blank',
})

const identificador = ref('')
const password = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

const { fetch: fetchSession, user } = useUserSession()

// Nombre: submitLogin
// Input: ninguno directo (usa identificador.value y password.value)
// Descripcion: envia las credenciales al backend, actualiza la sesion y redirige segun el perfil.
// Output: no retorna valor; muestra error si falla el inicio de sesion.
const submitLogin = async () => {
    errorMessage.value = ''
    isLoading.value = true

    try {
        await $fetch('/api/auth/login', {
            method: 'POST',
            body: {
                identificador: identificador.value,
                password: password.value,
            },
        })

        await fetchSession()

        if (user.value?.perfil === 'Administrador') {
            await navigateTo('/admin/gestionar-usuarios')
        } else if (user.value?.perfil === 'Ejecutivo') {
            await navigateTo('/ejecutivo/arriendos')
        } else {
            await navigateTo('/')
        }
    } catch (error: any) {
        errorMessage.value =
            error?.data?.message ||
            error?.data?.statusMessage ||
            'No se pudo iniciar sesión. Revisa tu usuario y contraseña.'
    } finally {
        isLoading.value = false
    }
}
</script>

<template>
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-200">
        <div class="text-center mb-8">
            <img src="/uploads/AutoRent.jpeg" alt="AutoRent" class="h-28 md:h-32 w-auto mx-auto mb-3 object-contain" />
            <p class="text-gray-500">Ingresa tus credenciales para continuar</p>
        </div>

        <form class="space-y-6" @submit.prevent="submitLogin">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
                <input v-model="identificador" type="text" placeholder="ejemplo@correo.cl"
                    class="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition"
                    required />
            </div>

            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <input v-model="password" type="password" placeholder="••••••••"
                    class="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition"
                    required />
            </div>

            <p v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</p>

            <button type="submit" :disabled="isLoading"
                class="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-3 rounded-lg text-sm font-bold shadow-md transition-colors">
                {{ isLoading ? 'Ingresando...' : 'Iniciar Sesión' }}
            </button>
        </form>
    </div>
</template>
