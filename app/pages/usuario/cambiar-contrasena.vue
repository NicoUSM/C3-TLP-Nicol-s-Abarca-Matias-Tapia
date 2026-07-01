<script setup lang="ts">
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
const feedback = ref('')
const errorMessage = ref('')
const isSaving = ref(false)

// Nombre: submitChange
// Input: ninguno directo (usa currentPassword, newPassword y confirmPassword)
// Descripcion: valida y solicita el cambio de contraseña del usuario autenticado.
// Output: no retorna valor; actualiza mensajes y limpia formulario si el cambio es exitoso.
const submitChange = async () => {
        feedback.value = ''
        errorMessage.value = ''

        if (newPassword.value !== confirmPassword.value) {
                errorMessage.value = 'La nueva contraseña y su confirmación no coinciden.'
                return
        }

        isSaving.value = true

        try {
                await $fetch('/api/auth/password', {
                        method: 'POST',
                        body: {
                                currentPassword: currentPassword.value,
                                newPassword: newPassword.value,
                        },
                })

                feedback.value = 'Contraseña actualizada correctamente.'
                currentPassword.value = ''
                newPassword.value = ''
                confirmPassword.value = ''
        } catch (error: any) {
                errorMessage.value = error?.data?.statusMessage ?? 'No se pudo cambiar la contraseña.'
        } finally {
                isSaving.value = false
        }
}
</script>

<template>
        <div class="max-w-2xl space-y-6">
                <div class="border-b pb-4">
                        <h1 class="text-3xl font-bold text-gray-900">Cambiar Contraseña</h1>
                        <p class="text-sm text-gray-500">Actualiza tu clave de acceso sin salir del sistema.</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                        <form class="space-y-4" @submit.prevent="submitChange">
                                <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Contraseña
                                                Actual</label>
                                        <input v-model="currentPassword" type="password" required
                                                class="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
                                </div>
                                <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Nueva
                                                Contraseña</label>
                                        <input v-model="newPassword" type="password" required
                                                class="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
                                </div>
                                <div>
                                        <label class="block text-sm font-medium text-gray-700 mb-1">Confirmar Nueva
                                                Contraseña</label>
                                        <input v-model="confirmPassword" type="password" required
                                                class="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
                                </div>
                                <p v-if="feedback" class="text-sm text-green-700">{{ feedback }}</p>
                                <p v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</p>
                                <button type="submit" :disabled="isSaving"
                                        class="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg text-sm font-bold shadow-md transition-colors">
                                        {{ isSaving ? 'Guardando...' : 'Actualizar contraseña' }}
                                </button>
                        </form>
                </div>
        </div>
</template>
