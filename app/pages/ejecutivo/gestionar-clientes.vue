<script setup lang="ts">
type ClienteRow = {
    id: number
    rut: string
    nombre: string
    telefono: string | null
    email: string | null
    direccion: string | null
    arriendosVigentes: number
    arriendosHistoricos: number
    ultimoVehiculo: string
}

const { data: clientes, refresh: refreshClientes } = await useFetch<ClienteRow[]>('/api/ejecutivo/clientes', { default: () => [] })
const search = ref('')
const editingId = ref<number | null>(null)
const form = reactive({
    rut: '',
    nombre: '',
    telefono: '',
    email: '',
    direccion: '',
})
const feedback = ref('')
const errorMessage = ref('')
const isSaving = ref(false)

// Nombre: filteredClientes
// Input: ninguno directo (usa search.value y clientes.value)
// Descripcion: filtra clientes por datos de contacto, rut, nombre o ultimo vehiculo.
// Output: arreglo de clientes filtrados para mostrar en la tabla.
const filteredClientes = computed(() => {
    const term = search.value.trim().toLowerCase()

    if (!term) {
        return clientes.value ?? []
    }

    return (clientes.value ?? []).filter((cliente) => {
        return [cliente.rut, cliente.nombre, cliente.telefono ?? '', cliente.email ?? '', cliente.direccion ?? '', cliente.ultimoVehiculo].some((value) => value.toLowerCase().includes(term))
    })
})

// Nombre: resetForm
// Input: ninguno
// Descripcion: limpia el formulario de cliente y desactiva el modo edicion.
// Output: no retorna valor; restablece editingId y campos del formulario.
const resetForm = () => {
    editingId.value = null
    form.rut = ''
    form.nombre = ''
    form.telefono = ''
    form.email = ''
    form.direccion = ''
}

// Nombre: startEdit
// Input: cliente (ClienteRow)
// Descripcion: carga los datos del cliente seleccionado en el formulario para editar.
// Output: no retorna valor; actualiza formulario y limpia mensajes previos.
const startEdit = (cliente: ClienteRow) => {
    editingId.value = cliente.id
    form.rut = cliente.rut
    form.nombre = cliente.nombre
    form.telefono = cliente.telefono ?? ''
    form.email = cliente.email ?? ''
    form.direccion = cliente.direccion ?? ''
    feedback.value = ''
    errorMessage.value = ''
}

// Nombre: saveCliente
// Input: ninguno directo (usa form y editingId)
// Descripcion: guarda un cliente; crea uno nuevo o actualiza uno existente.
// Output: no retorna valor; muestra mensajes, refresca listado y resetea formulario.
const saveCliente = async () => {
    feedback.value = ''
    errorMessage.value = ''
    isSaving.value = true

    try {
        if (!form.rut || !form.nombre || !form.telefono || !form.email || !form.direccion) {
            throw new Error('Completa todos los campos.')
        }

        const payload = {
            rut: form.rut,
            nombre: form.nombre,
            telefono: form.telefono,
            email: form.email,
            direccion: form.direccion,
        }

        if (editingId.value) {
            await $fetch(`/api/ejecutivo/clientes/${editingId.value}`, {
                method: 'PUT',
                body: payload,
            })
            feedback.value = 'Cliente actualizado correctamente.'
        } else {
            await $fetch('/api/ejecutivo/clientes', {
                method: 'POST',
                body: payload,
            })
            feedback.value = 'Cliente creado correctamente.'
        }

        await refreshClientes()
        resetForm()
    } catch (error: any) {
        errorMessage.value = error?.data?.statusMessage ?? error?.message ?? 'No se pudo guardar el cliente.'
    } finally {
        isSaving.value = false
    }
}

// Nombre: removeCliente
// Input: clienteId (number)
// Descripcion: elimina un cliente por ID y actualiza la vista de clientes.
// Output: no retorna valor; actualiza feedback/error y limpia formulario si aplica.
const removeCliente = async (clienteId: number) => {
    feedback.value = ''
    errorMessage.value = ''

    try {
        await $fetch(`/api/ejecutivo/clientes/${clienteId}`, { method: 'DELETE' })
        feedback.value = 'Cliente eliminado correctamente.'
        await refreshClientes()
        if (editingId.value === clienteId) {
            resetForm()
        }
    } catch (error: any) {
        errorMessage.value = error?.data?.statusMessage ?? 'No se pudo eliminar el cliente.'
    }
}
</script>

<template>
    <div class="space-y-6">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-4">
            <div>
                <h1 class="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <span>Gestión de Clientes</span>
                    <span class="title-emoji">🤝</span>
                </h1>
                <p class="text-sm text-gray-500">Administra clientes y revisa su historial de arriendos.</p>
            </div>
            <input v-model="search" type="text" placeholder="Buscar por RUT, nombre o contacto..."
                class="border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none w-full sm:w-80" />
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-fit">
                <h2 class="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">{{ editingId ? 'Editar Cliente' :
                    'Crear Nuevo Cliente' }}</h2>
                <form class="space-y-4" @submit.prevent="saveCliente">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">RUT</label>
                        <input v-model="form.rut" type="text" placeholder="12.345.678-9"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
                        <input v-model="form.nombre" type="text" placeholder="Ej: Camila Rojas"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                        <input v-model="form.telefono" type="text" placeholder="+56 9 1234 5678"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Correo</label>
                        <input v-model="form.email" type="email" placeholder="cliente@mail.com"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Dirección</label>
                        <textarea v-model="form.direccion" rows="3" placeholder="Dirección de contacto"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required></textarea>
                    </div>
                    <button type="submit" :disabled="isSaving"
                        class="w-full bg-orange-600 hover:bg-orange-700 text-white py-2.5 rounded-lg text-sm font-semibold transition mt-2 shadow-sm">
                        {{ isSaving ? 'Guardando...' : (editingId ? 'Actualizar Cliente' : 'Registrar Cliente') }}
                    </button>
                    <button v-if="editingId" type="button"
                        class="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-lg text-sm font-semibold transition"
                        @click="resetForm">
                        Cancelar edición
                    </button>
                    <p v-if="feedback" class="text-sm text-green-700">{{ feedback }}</p>
                    <p v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</p>
                </form>
            </div>

            <div class="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div class="p-4 bg-gray-50 border-b flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                        <h2 class="font-semibold text-gray-700">Clientes Registrados</h2>
                        <p class="text-xs text-gray-500">{{ filteredClientes.length }} cliente{{ filteredClientes.length
                            === 1 ? '' : 's' }} encontrado{{ filteredClientes.length === 1 ? '' : 's' }}</p>
                    </div>
                    <span class="text-xs text-gray-500">Historial de arriendos incluido</span>
                </div>

                <div class="max-h-136 space-y-3 overflow-y-auto p-4 pr-3 lg:max-h-[calc(100vh-18rem)]">
                    <article v-for="cliente in filteredClientes" :key="cliente.id"
                        class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-orange-200 hover:shadow-md">
                        <div class="space-y-4">
                            <div class="flex items-start gap-4 min-w-0">
                                <div
                                    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-sm font-bold text-orange-700">
                                    {{ cliente.nombre.slice(0, 2).toUpperCase() }}
                                </div>

                                <div class="min-w-0 flex-1 space-y-3">
                                    <div
                                        class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                        <h3 class="font-semibold text-gray-900">{{ cliente.nombre }}</h3>
                                        <p class="font-mono text-sm text-gray-500">{{ cliente.rut }}</p>
                                    </div>

                                    <div class="grid gap-3 text-sm text-gray-600 md:grid-cols-2">
                                        <div class="space-y-1 min-w-0">
                                            <p class="wrap-anywhere">{{ cliente.telefono || 'Sin teléfono' }}</p>
                                            <p class="wrap-anywhere">{{ cliente.email || 'Sin correo' }}</p>
                                            <p class="text-xs leading-5 text-gray-400 wrap-anywhere">{{
                                                cliente.direccion || 'Sin dirección' }}</p>
                                        </div>

                                        <div class="space-y-2 min-w-0 md:text-right">
                                            <p class="text-xs font-semibold uppercase text-gray-400">Último vehículo</p>
                                            <p class="text-sm text-gray-700 wrap-anywhere">{{ cliente.ultimoVehiculo }}
                                            </p>
                                        </div>
                                    </div>

                                    <div class="flex flex-wrap items-center gap-2">
                                        <span class="px-2.5 py-1 rounded-full text-xs font-semibold"
                                            :class="cliente.arriendosVigentes > 0 ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'">
                                            {{ cliente.arriendosVigentes }} vigente{{ cliente.arriendosVigentes === 1 ?
                                            '' : 's' }}
                                        </span>
                                        <span
                                            class="px-2.5 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                                            {{ cliente.arriendosHistoricos }} histórico{{ cliente.arriendosHistoricos
                                            === 1 ? '' : 's' }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end border-t border-gray-100 pt-3">
                                <div class="flex flex-wrap items-center justify-end gap-2">
                                    <button type="button"
                                        class="rounded-lg border border-orange-200 px-3 py-1.5 text-xs font-semibold text-orange-700 transition hover:bg-orange-50"
                                        @click="startEdit(cliente)">
                                        Editar
                                    </button>
                                    <button type="button"
                                        class="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-50"
                                        @click="removeCliente(cliente.id)">
                                        Borrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    <div v-if="filteredClientes.length === 0"
                        class="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-sm text-gray-500">
                        No hay clientes que coincidan con la búsqueda.
                    </div>
                </div>
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
