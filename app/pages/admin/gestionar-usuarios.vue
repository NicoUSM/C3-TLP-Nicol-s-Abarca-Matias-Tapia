<script setup lang="ts">
definePageMeta({
    middleware: ['admin'],
})

type UserRow = {
    id: number
    email: string
    nombre: string
    perfil: string
    perfilId: number
}

type PerfilRow = {
    id: number
    nombre: string
}

const { data: usuarios, refresh: refreshUsuarios } = await useFetch<UserRow[]>('/api/admin/users', { default: () => [] })
const { data: perfiles } = await useFetch<PerfilRow[]>('/api/admin/profiles', { default: () => [] })
const { user: currentUser } = useUserSession()

const search = ref('')
const editingId = ref<number | null>(null)
const isEditModalOpen = ref(false)
const createForm = reactive({
    email: '',
    nombre: '',
    password: '',
    perfilId: '',
})
const editForm = reactive({
    email: '',
    nombre: '',
    password: '',
    perfilId: '',
})
const feedback = ref('')
const errorMessage = ref('')
const isSaving = ref(false)
const createPasswordHint = 'El usuario podrá cambiarla después.'
const editPasswordHint = 'Deja este campo vacío para conservar la contraseña actual.'

// Nombre: filteredUsuarios
// Input: ninguno directo (usa search.value y usuarios.value)
// Descripcion: filtra el listado de usuarios por email, nombre o perfil segun el texto buscado.
// Output: arreglo de usuarios filtrados para mostrar en la tabla.
const filteredUsuarios = computed(() => {
    const term = search.value.trim().toLowerCase()

    if (!term) {
        return usuarios.value ?? []
    }

    return (usuarios.value ?? []).filter((user) => {
        return [user.email, user.nombre, user.perfil].some((value) => value.toLowerCase().includes(term))
    })
})

// Nombre: resetCreateForm
// Input: ninguno
// Descripcion: limpia el formulario de creacion de usuarios.
// Output: no retorna valor; restablece los campos del formulario de crear.
const resetCreateForm = () => {
    createForm.email = ''
    createForm.nombre = ''
    createForm.password = ''
    createForm.perfilId = ''
}

// Nombre: closeEditModal
// Input: ninguno
// Descripcion: cierra el modal de edicion y limpia su formulario.
// Output: no retorna valor; restablece estado de edicion actual.
const closeEditModal = () => {
    isEditModalOpen.value = false
    editingId.value = null
    editForm.email = ''
    editForm.nombre = ''
    editForm.password = ''
    editForm.perfilId = ''
}

// Nombre: startEdit
// Input: user (UserRow)
// Descripcion: carga los datos del usuario seleccionado para editar su informacion.
// Output: no retorna valor; actualiza el formulario y limpia mensajes.
const startEdit = (user: UserRow) => {
    editingId.value = user.id
    editForm.email = user.email
    editForm.nombre = user.nombre
    editForm.password = ''
    editForm.perfilId = String(user.perfilId)
    isEditModalOpen.value = true
    feedback.value = ''
    errorMessage.value = ''
}

// Nombre: createUser
// Input: ninguno directo (usa createForm)
// Descripcion: valida y crea un nuevo usuario desde el formulario principal.
// Output: no retorna valor; muestra feedback/error, refresca lista y limpia formulario.
const createUser = async () => {
    feedback.value = ''
    errorMessage.value = ''
    isSaving.value = true

    try {
        const payload: Record<string, string | number> = {
            email: createForm.email,
            nombre: createForm.nombre,
            perfilId: Number(createForm.perfilId),
        }

        if (!createForm.password) {
            throw new Error('La contraseña es obligatoria para crear usuarios.')
        }

        payload.password = createForm.password

        await $fetch('/api/admin/users', {
            method: 'POST',
            body: payload,
        })
        feedback.value = 'Usuario creado correctamente.'

        await refreshUsuarios()
        resetCreateForm()
    } catch (error: any) {
        errorMessage.value = error?.data?.statusMessage ?? error?.message ?? 'No se pudo guardar el usuario.'
    } finally {
        isSaving.value = false
    }
}

// Nombre: updateUser
// Input: ninguno directo (usa editForm y editingId)
// Descripcion: actualiza los datos del usuario seleccionado en el modal de edicion.
// Output: no retorna valor; muestra feedback/error, refresca lista y cierra modal.
const updateUser = async () => {
    feedback.value = ''
    errorMessage.value = ''
    isSaving.value = true

    try {
        if (!editingId.value) {
            throw new Error('No hay usuario seleccionado para editar.')
        }

        const payload: Record<string, string | number> = {
            email: editForm.email,
            nombre: editForm.nombre,
            perfilId: Number(editForm.perfilId),
        }

        if (editForm.password) {
            payload.password = editForm.password
        }

        await $fetch(`/api/admin/users/${editingId.value}`, {
            method: 'PUT',
            body: payload,
        })

        feedback.value = 'Usuario actualizado correctamente.'
        await refreshUsuarios()
        closeEditModal()
    } catch (error: any) {
        errorMessage.value = error?.data?.statusMessage ?? error?.message ?? 'No se pudo actualizar el usuario.'
    } finally {
        isSaving.value = false
    }
}

// Nombre: removeUser
// Input: userId (number)
// Descripcion: elimina un usuario por su ID y actualiza el listado en pantalla.
// Output: no retorna valor; actualiza mensajes segun el resultado.
const removeUser = async (userId: number) => {
    feedback.value = ''
    errorMessage.value = ''

    try {
        await $fetch(`/api/admin/users/${userId}`, { method: 'DELETE' })
        feedback.value = 'Usuario eliminado correctamente.'
        await refreshUsuarios()
    } catch (error: any) {
        errorMessage.value = error?.data?.statusMessage ?? 'No se pudo eliminar el usuario.'
    }
}
</script>

<template>
    <div class="space-y-6">
        <!-- TITULO -->
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-4">
            <div>
                <h1 class="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <span>Gestión de Usuarios</span>
                    <span class="title-emoji">👥</span>
                </h1>
                <p class="text-sm text-gray-500">Administra los accesos y perfiles del sistema.</p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-fit">
                <h2 class="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Crear Nuevo Usuario</h2>
                <form class="space-y-4" @submit.prevent="createUser">

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico (Único)</label>
                        <input v-model="createForm.email" type="email" placeholder="usuario@autorent.cl"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                        <input v-model="createForm.nombre" type="text" placeholder="Ej: Juan Pérez"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Contraseña Inicial</label>
                        <input v-model="createForm.password" type="password" placeholder="••••••••"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                        <p class="text-xs text-gray-400 mt-1">{{ createPasswordHint }}</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Perfil de Acceso</label>
                        <select v-model="createForm.perfilId"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none bg-white"
                            required>
                            <option value="" disabled>Seleccione un perfil...</option>
                            <option v-for="perfil in perfiles" :key="perfil.id" :value="String(perfil.id)">{{
                                perfil.nombre }}</option>
                        </select>
                    </div>

                    <button type="submit" :disabled="isSaving"
                        class="w-full bg-orange-600 hover:bg-orange-700 text-white py-2.5 rounded-lg text-sm font-semibold transition mt-2 shadow-sm">
                        {{ isSaving ? 'Guardando...' : 'Registrar Cuenta' }}
                    </button>
                    <p v-if="feedback" class="text-sm text-green-700">{{ feedback }}</p>
                    <p v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</p>
                </form>
            </div>

            <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div class="p-4 bg-gray-50 border-b flex justify-between items-center">
                    <h2 class="font-semibold text-gray-700">Usuarios Activos</h2>
                    <input v-model="search" type="text" placeholder="Buscar por email..."
                        class="border border-gray-300 rounded-lg p-1.5 text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm text-gray-600">
                        <thead class="bg-white text-xs uppercase text-gray-500 font-bold border-b">
                            <tr>
                                <th class="p-4">Usuario</th>
                                <th class="p-4">Perfil</th>
                                <th class="p-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">

                            <tr v-for="user in filteredUsuarios" :key="user.id"
                                class="hover:bg-gray-50 transition-colors">
                                <td class="p-4">
                                    <p class="font-semibold text-gray-900">{{ user.nombre }}</p>
                                    <p class="text-xs text-gray-500">{{ user.email }}</p>
                                </td>
                                <td class="p-4">
                                    <span class="px-2.5 py-1 rounded-full text-xs font-semibold"
                                        :class="user.perfil === 'Administrador' ? 'bg-purple-100 text-purple-700' : 'bg-amber-100 text-amber-700'">
                                        {{ user.perfil }}
                                    </span>
                                </td>
                                <td class="p-4 flex justify-center items-center gap-3 h-full pt-6">
                                    <button type="button" @click="startEdit(user)"
                                        class="text-orange-600 hover:text-orange-800 hover:underline text-xs font-semibold">Editar</button>

                                    <button v-if="currentUser && user.id !== currentUser.id" type="button"
                                        @click="removeUser(user.id)"
                                        class="text-red-600 hover:text-red-800 hover:underline text-xs font-semibold">
                                        Borrar
                                    </button>

                                    <span v-else class="text-xs text-gray-400 italic"
                                        title="No puedes borrar tu propia cuenta">
                                        Tú
                                    </span>

                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>

        <div v-if="isEditModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4"
            @click.self="closeEditModal">
            <div class="w-full max-w-lg bg-white rounded-2xl border border-gray-200 shadow-2xl p-6">
                <div class="flex items-center justify-between mb-4 border-b pb-3">
                    <h2 class="text-lg font-semibold text-gray-800">Editar Usuario</h2>
                    <button type="button" class="text-gray-500 hover:text-gray-700 text-sm font-semibold"
                        @click="closeEditModal">
                        Cerrar
                    </button>
                </div>

                <form class="space-y-4" @submit.prevent="updateUser">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico (Único)</label>
                        <input v-model="editForm.email" type="email" placeholder="usuario@autorent.cl"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                        <input v-model="editForm.nombre" type="text" placeholder="Ej: Juan Pérez"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Nueva Contraseña (Opcional)</label>
                        <input v-model="editForm.password" type="password" placeholder="••••••••"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
                        <p class="text-xs text-gray-400 mt-1">{{ editPasswordHint }}</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Perfil de Acceso</label>
                        <select v-model="editForm.perfilId"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none bg-white"
                            required>
                            <option value="" disabled>Seleccione un perfil...</option>
                            <option v-for="perfil in perfiles" :key="perfil.id" :value="String(perfil.id)">{{
                                perfil.nombre }}</option>
                        </select>
                    </div>

                    <div class="flex items-center justify-end gap-2 pt-2">
                        <button type="button"
                            class="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold"
                            @click="closeEditModal">
                            Cancelar
                        </button>
                        <button type="submit" :disabled="isSaving"
                            class="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold">
                            {{ isSaving ? 'Guardando...' : 'Guardar Cambios' }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title-emoji {
    display: inline-flex;
    width: 1.25rem;
    justify-content: center;
    filter: grayscale(1) sepia(1) saturate(1200%) hue-rotate(-8deg) brightness(0.68);
}
</style>
