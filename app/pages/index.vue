<script setup lang="ts">
const { user } = useUserSession()

if (user.value?.perfil === 'Administrador') {
    await navigateTo('/admin/gestionar-usuarios', { replace: true })
} else if (user.value?.perfil === 'Ejecutivo') {
    await navigateTo('/ejecutivo/arriendos', { replace: true })
} else {
    await navigateTo('/login', { replace: true })
}
</script>

<template>
    <div></div>
</template>
