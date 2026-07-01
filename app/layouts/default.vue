<script setup lang="ts">
const { user, clear: clearSession } = useUserSession()

const isAdmin = computed(() => user.value?.perfil === 'Administrador')

const homeRoute = computed(() => {
    if (user.value?.perfil === 'Administrador') {
        return '/admin/gestionar-usuarios'
    }

    if (user.value?.perfil === 'Ejecutivo') {
        return '/ejecutivo/arriendos'
    }

    return '/usuario/cambiar-contrasena'
})

const logoLoadError = ref(false)

const handleLogout = async () => {
    await $fetch('/api/auth/logout', { method: 'POST' })
    await clearSession()
    await navigateTo('/login')
}
</script>

<template>
    <div
        class="relative min-h-screen bg-linear-to-br from-orange-50 via-amber-50 to-orange-100 p-4 md:p-6 overflow-hidden">
        <div class="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
            <img src="/uploads/SansaTorMotors.png" alt="" aria-hidden="true"
                class="w-304 max-w-[92vw] object-contain opacity-12 blur-[5px] select-none" />
        </div>

        <header
            class="z-20 sticky top-4 rounded-2xl border border-white/60 bg-white/70 px-5 py-4 shadow-[0_12px_40px_-18px_rgba(14,116,144,0.55)] backdrop-blur-md flex justify-between items-center">
            <div class="text-xl font-bold flex items-center gap-2 text-slate-800">
                <img v-if="!logoLoadError" src="/uploads/SansaTorMotors.png" alt="SansaTorMotors"
                    class="h-10 w-auto object-contain" @error="logoLoadError = true" />
                <span v-else>SansaTorMotors</span>
            </div>

            <div class="flex gap-4 items-center">
                <span class="text-sm bg-orange-100 text-orange-800 px-3 py-1 rounded-full border border-orange-200">
                    {{ user ? `${user.nombre} (${user.perfil})` : 'Cargando sesión...' }}
                </span>

                <button
                    class="bg-red-800 hover:bg-red-900 text-white transition-colors px-4 py-2 rounded-lg text-sm font-semibold shadow-sm"
                    @click="handleLogout">
                    Cerrar Sesión
                </button>
            </div>
        </header>

        <div class="relative z-10 flex flex-1 gap-4 md:gap-6 mt-6 md:mt-8">
            <aside
                class="w-64 rounded-2xl border border-white/70 bg-white/75 backdrop-blur-md shadow-[0_16px_40px_-20px_rgba(15,23,42,0.45)] flex flex-col justify-between">
                <div class="p-4 flex flex-col gap-1">
                    <NuxtLink :to="homeRoute"
                        class="p-2 hover:bg-orange-100/80 hover:text-orange-800 rounded-lg font-medium transition-colors text-slate-700 flex items-center gap-2">
                        <span class="sidebar-emoji">🏠</span>
                        <span>Inicio</span>
                    </NuxtLink>

                    <template v-if="isAdmin">
                        <NuxtLink to="/admin/gestionar-usuarios"
                            class="p-2 hover:bg-slate-100 rounded-lg text-slate-700 transition-colors flex items-center gap-2">
                            <span class="sidebar-emoji">👥</span>
                            <span>Usuarios</span>
                        </NuxtLink>

                        <NuxtLink to="/admin/gestionar-tipos-vehiculo"
                            class="p-2 hover:bg-slate-100 rounded-lg text-slate-700 transition-colors flex items-center gap-2">
                            <span class="sidebar-emoji">🏷️</span>
                            <span>Tipos de Vehículo</span>
                        </NuxtLink>

                        <NuxtLink to="/admin/gestionar-vehiculos"
                            class="p-2 hover:bg-slate-100 rounded-lg text-slate-700 transition-colors flex items-center gap-2">
                            <span class="sidebar-emoji">🚙</span>
                            <span>Vehículos</span>
                        </NuxtLink>
                    </template>

                    <NuxtLink to="/ejecutivo/gestionar-clientes"
                        class="p-2 hover:bg-slate-100 rounded-lg text-slate-700 transition-colors flex items-center gap-2">
                        <span class="sidebar-emoji">🤝</span>
                        <span>Clientes</span>
                    </NuxtLink>

                    <NuxtLink to="/ejecutivo/arriendos"
                        class="p-2 hover:bg-slate-100 rounded-lg text-slate-700 transition-colors flex items-center gap-2">
                        <span class="sidebar-emoji">📋</span>
                        <span>Arriendos</span>
                    </NuxtLink>

                    <NuxtLink to="/ejecutivo/gestionar-vehiculos"
                        class="p-2 hover:bg-slate-100 rounded-lg text-slate-700 transition-colors flex items-center gap-2">
                        <span class="sidebar-emoji">🚘</span>
                        <span>Estados Vehículos</span>
                    </NuxtLink>
                </div>

                <div class="p-4 border-t border-slate-200/70">
                    <NuxtLink to="/usuario/cambiar-contrasena"
                        class="p-2 hover:bg-slate-100 rounded-lg text-slate-700 transition-colors flex items-center gap-2">
                        <span class="sidebar-emoji">🔑</span>
                        <span>Cambiar Contraseña</span>
                    </NuxtLink>
                </div>
            </aside>

            <main
                class="flex-1 rounded-2xl border border-white/60 bg-white/55 backdrop-blur-sm p-6 md:p-8 overflow-y-auto shadow-[0_18px_45px_-30px_rgba(15,23,42,0.5)]">
                <slot />
            </main>
        </div>
    </div>
</template>

<style scoped>
.sidebar-emoji {
    display: inline-flex;
    width: 1.15rem;
    justify-content: center;
    filter: grayscale(1) sepia(1) saturate(1200%) hue-rotate(-8deg) brightness(0.68);
}
</style>
