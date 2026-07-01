<script setup lang="ts">

definePageMeta({
    middleware: ['admin'],
})

type TipoRow = {
    id: number
    nombre: string
    descripcion: string | null
}

const { data: tipos, refresh: refreshTipos } = await useFetch<TipoRow[]>('/api/admin/tipos', { default: () => [] })

const createNombre = ref('')
const createDescripcion = ref('')
const editNombre = ref('')
const editDescripcion = ref('')
const editingId = ref<number | null>(null)
const isEditModalOpen = ref(false)
const search = ref('')
const feedback = ref('')
const errorMessage = ref('')
const isSaving = ref(false)

// Nombre: filteredTipos
// Input: (usa search.value y tipos.value)
// Descripcion: filtra la lista de tipos segun el texto de busqueda ingresado por el usuario.
// Output: arreglo de tipos filtrados que coincide con el termino de busqueda.
const filteredTipos = computed(() => {
    const term = search.value.trim().toLowerCase()
    if (!term) {
        return tipos.value ?? []
    }

    return (tipos.value ?? []).filter((tipo) => {
        return [tipo.nombre, tipo.descripcion ?? ''].some((value) => value.toLowerCase().includes(term))
    })
})

// Nombre: resetCreateForm
// Input: ninguno
// Descripcion: reinicia el formulario de creacion.
// Output: no retorna valor; limpia el nombre para crear.
const resetCreateForm = () => {
    createNombre.value = ''
    createDescripcion.value = ''
}

// Nombre: closeEditModal
// Input: ninguno
// Descripcion: cierra el modal de edicion y limpia su estado.
// Output: no retorna valor; limpia editingId y el nombre en edicion.
const closeEditModal = () => {
    isEditModalOpen.value = false
    editingId.value = null
    editNombre.value = ''
    editDescripcion.value = ''
}

// Nombre: startEdit
// Input: tipo (TipoRow)
// Descripcion: carga los datos del tipo seleccionado en el formulario para editarlo.
// Output: no retorna valor; actualiza el estado local del formulario.
const startEdit = (tipo: TipoRow) => {
    editingId.value = tipo.id
    editNombre.value = tipo.nombre
    editDescripcion.value = tipo.descripcion ?? ''
    isEditModalOpen.value = true
    feedback.value = ''
    errorMessage.value = ''
}

// Nombre: createTipo
// Input: ninguno directo (usa createNombre.value)
// Descripcion: valida y crea un nuevo tipo de vehiculo.
// Output: no retorna valor; actualiza mensajes, refresca la lista y limpia el formulario.
const createTipo = async () => {
    feedback.value = ''
    errorMessage.value = ''
    isSaving.value = true

    try {
        if (!createNombre.value.trim()) {
            throw new Error('El nombre es obligatorio.')
        }

        await $fetch('/api/admin/tipos', {
            method: 'POST',
            body: {
                nombre: createNombre.value.trim(),
                descripcion: createDescripcion.value.trim(),
            },
        })
        feedback.value = 'Tipo creado correctamente.'

        await refreshTipos()
        resetCreateForm()
    } catch (error: any) {
        errorMessage.value = error?.data?.statusMessage ?? error?.message ?? 'No se pudo guardar el tipo.'
    } finally {
        isSaving.value = false
    }
}

// Nombre: updateTipo
// Input: ninguno directo (usa editingId.value y editNombre.value)
// Descripcion: valida y actualiza el tipo seleccionado desde el modal.
// Output: no retorna valor; actualiza mensajes, refresca la lista y cierra el modal.
const updateTipo = async () => {
    feedback.value = ''
    errorMessage.value = ''
    isSaving.value = true

    try {
        if (!editingId.value) {
            throw new Error('No hay un tipo seleccionado para editar.')
        }

        if (!editNombre.value.trim()) {
            throw new Error('El nombre es obligatorio.')
        }

        await $fetch(`/api/admin/tipos/${editingId.value}`, {
            method: 'PUT',
            body: {
                nombre: editNombre.value.trim(),
                descripcion: editDescripcion.value.trim(),
            },
        })

        feedback.value = 'Tipo actualizado correctamente.'
        await refreshTipos()
        closeEditModal()
    } catch (error: any) {
        errorMessage.value = error?.data?.statusMessage ?? error?.message ?? 'No se pudo guardar el tipo.'
    } finally {
        isSaving.value = false
    }
}

// Nombre: removeTipo
// Input: tipoId (number)
// Descripcion: elimina un tipo por su ID y refresca la lista en pantalla.
// Output: no retorna valor; actualiza feedback/error segun resultado.
const removeTipo = async (tipoId: number) => {
    feedback.value = ''
    errorMessage.value = ''

    try {
        await $fetch(`/api/admin/tipos/${tipoId}`, { method: 'DELETE' })
        feedback.value = 'Tipo eliminado correctamente.'
        await refreshTipos()
    } catch (error: any) {
        errorMessage.value = error?.data?.statusMessage ?? 'No se pudo eliminar el tipo.'
    }
}
</script>

<template>
    <div class="space-y-6">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-4">
            <!-- TITULO -->
            <div>
                <h1 class="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <span>Tipos de Vehículo</span>
                    <span class="title-emoji">🏷️</span>
                </h1>
                <p class="text-sm text-gray-500">Administra las categorías de la flota (Sedán, SUV, etc.).</p>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-fit">
                <h2 class="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Crear Nuevo Tipo</h2>

                <form class="space-y-4" @submit.prevent="createTipo">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Nombre de la Categoría</label>
                        <input v-model="createNombre" type="text" placeholder="Ej: Convertible"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Descripción Breve</label>
                        <textarea v-model="createDescripcion" rows="3"
                            placeholder="Características generales de este tipo de vehículo..."
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none resize-none"></textarea>
                    </div>

                    <button type="submit" :disabled="isSaving"
                        class="w-full bg-orange-600 hover:bg-orange-700 text-white py-2.5 rounded-lg text-sm font-semibold transition mt-2 shadow-sm">
                        {{ isSaving ? 'Guardando...' : 'Guardar Categoría' }}
                    </button>
                    <p v-if="feedback" class="text-sm text-green-700">{{ feedback }}</p>
                    <p v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</p>
                </form>
            </div>

            <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div class="p-4 bg-gray-50 border-b flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                        <h2 class="font-semibold text-gray-700">Categorías Registradas</h2>
                        <p class="text-xs text-gray-500">{{ filteredTipos.length }} categoría{{ filteredTipos.length ===
                            1 ? '' : 's' }} encontrada{{ filteredTipos.length === 1 ? '' : 's' }}</p>
                    </div>
                    <input v-model="search" type="text" placeholder="Buscar categoría..."
                        class="w-full sm:w-64 border border-gray-300 rounded-lg p-1.5 text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
                </div>

                <div class="max-h-136 space-y-3 overflow-y-auto p-4 pr-3 lg:max-h-[calc(100vh-18rem)]">
                    <article v-for="tipo in filteredTipos" :key="tipo.id"
                        class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-orange-200 hover:shadow-md">
                        <div class="space-y-4">
                            <div class="flex items-start gap-4 min-w-0">
                                <div
                                    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-sm font-bold text-orange-700">
                                    {{ tipo.nombre.slice(0, 2).toUpperCase() }}
                                </div>

                                <div class="min-w-0 flex-1 space-y-2">
                                    <div
                                        class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                        <h3 class="font-semibold text-gray-900">{{ tipo.nombre }}</h3>
                                        <span
                                            class="w-fit rounded-full bg-slate-100 px-2.5 py-1 text-xs font-mono font-semibold text-slate-500">
                                            #{{ tipo.id }}
                                        </span>
                                    </div>

                                    <p class="text-sm leading-5 text-gray-500 wrap-anywhere">
                                        {{ tipo.descripcion || 'Sin descripción' }}
                                    </p>
                                </div>
                            </div>

                            <div class="flex justify-end border-t border-gray-100 pt-3">
                                <div class="flex flex-wrap items-center justify-end gap-2">
                                    <button type="button" @click="startEdit(tipo)"
                                        class="rounded-lg border border-orange-200 px-3 py-1.5 text-xs font-semibold text-orange-700 transition hover:bg-orange-50">
                                        Editar
                                    </button>
                                    <button type="button" @click="removeTipo(tipo.id)"
                                        class="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-50">
                                        Borrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    <div v-if="filteredTipos.length === 0"
                        class="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-sm text-gray-500">
                        No hay categorías que coincidan con la búsqueda.
                    </div>
                </div>
            </div>

        </div>

        <div v-if="isEditModalOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/45 p-4"
            @click.self="closeEditModal">
            <div class="w-full max-w-lg bg-white rounded-2xl border border-gray-200 shadow-2xl p-6">
                <div class="flex items-center justify-between mb-4 border-b pb-3">
                    <h2 class="text-lg font-semibold text-gray-800">Editar Tipo de Vehículo</h2>
                    <button type="button" class="text-gray-500 hover:text-gray-700 text-sm font-semibold"
                        @click="closeEditModal">
                        Cerrar
                    </button>
                </div>

                <form class="space-y-4" @submit.prevent="updateTipo">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Nombre de la Categoría</label>
                        <input v-model="editNombre" type="text" placeholder="Ej: Convertible"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Descripción Breve</label>
                        <textarea v-model="editDescripcion" rows="3"
                            placeholder="Características generales de este tipo de vehículo..."
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none resize-none"></textarea>
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
