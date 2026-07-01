<script setup lang="ts">
definePageMeta({
    middleware: ['admin'],
})

type TipoRow = {
    id: number
    nombre: string
}

type VehiculoRow = {
    id: number
    patente: string
    marca: string
    modelo: string
    tipoId: number
    tipo: string
    valorDiario: number
    estado: string
    fotografia: string
}

const { data: vehiculos, refresh: refreshVehiculos } = await useFetch<VehiculoRow[]>('/api/admin/vehiculos', { default: () => [] })
const { data: tipos } = await useFetch<TipoRow[]>('/api/admin/tipos', { default: () => [] })

const search = ref('')
const feedback = ref('')
const errorMessage = ref('')
const isSaving = ref(false)
const isEditModalOpen = ref(false)
const editingId = ref<number | null>(null)
const selectedFile = ref<File | null>(null)
const editSelectedFile = ref<File | null>(null)

const createForm = reactive({
    patente: '',
    marca: '',
    modelo: '',
    tipoId: '',
    valorDiario: '',
})

const editForm = reactive({
    patente: '',
    marca: '',
    modelo: '',
    tipoId: '',
    valorDiario: '',
})

// Nombre: getFile
// Input: value (File | File[] | null)
// Descripcion: obtiene el primer archivo seleccionado cuando el componente entrega un arreglo.
// Output: archivo seleccionado o null si no existe.
const getFile = (value: File | File[] | null): File | null => Array.isArray(value) ? value[0] ?? null : value

// Nombre: filteredVehiculos
// Input: ninguno directo (usa search.value y vehiculos.value)
// Descripcion: filtra el listado de vehiculos por patente, marca, modelo, tipo o estado.
// Output: arreglo de vehiculos filtrados para mostrar en la tabla.
const filteredVehiculos = computed(() => {
    const term = search.value.trim().toLowerCase()

    if (!term) {
        return vehiculos.value ?? []
    }

    return (vehiculos.value ?? []).filter((vehiculo) => {
        return [vehiculo.patente, vehiculo.marca, vehiculo.modelo, vehiculo.tipo, vehiculo.estado].some((value) => value.toLowerCase().includes(term))
    })
})

// Nombre: resetCreateForm
// Input: ninguno
// Descripcion: limpia el formulario de creacion de vehiculos y el archivo seleccionado.
// Output: no retorna valor; restablece los campos del formulario principal.
const resetCreateForm = () => {
    createForm.patente = ''
    createForm.marca = ''
    createForm.modelo = ''
    createForm.tipoId = ''
    createForm.valorDiario = ''
    selectedFile.value = null
}

// Nombre: closeEditModal
// Input: ninguno
// Descripcion: cierra el modal de edicion y limpia su formulario.
// Output: no retorna valor; restablece el vehiculo en edicion.
const closeEditModal = () => {
    editingId.value = null
    isEditModalOpen.value = false
    editForm.patente = ''
    editForm.marca = ''
    editForm.modelo = ''
    editForm.tipoId = ''
    editForm.valorDiario = ''
    editSelectedFile.value = null
}

// Nombre: startEdit
// Input: vehiculo (VehiculoRow)
// Descripcion: carga los datos del vehiculo seleccionado en el formulario de edicion.
// Output: no retorna valor; abre el modal y limpia mensajes previos.
const startEdit = (vehiculo: VehiculoRow) => {
    editingId.value = vehiculo.id
    editForm.patente = vehiculo.patente
    editForm.marca = vehiculo.marca
    editForm.modelo = vehiculo.modelo
    editForm.tipoId = String(vehiculo.tipoId)
    editForm.valorDiario = String(vehiculo.valorDiario)
    editSelectedFile.value = null
    feedback.value = ''
    errorMessage.value = ''
    isEditModalOpen.value = true
}

// Nombre: appendFormFields
// Input: payload (FormData), form (formulario), file (File | null), requireFile (boolean)
// Descripcion: valida campos obligatorios y agrega los datos del vehiculo al FormData.
// Output: no retorna valor; completa el payload o lanza un error de validacion.
const appendFormFields = (payload: FormData, form: typeof createForm | typeof editForm, file: File | null, requireFile: boolean) => {
    if (!form.patente || !form.marca || !form.modelo || !form.tipoId || !form.valorDiario) {
        throw new Error('Completa todos los campos.')
    }

    if (requireFile && !file) {
        throw new Error('Debes subir una fotografía del vehículo.')
    }

    payload.append('patente', form.patente)
    payload.append('marca', form.marca)
    payload.append('modelo', form.modelo)
    payload.append('tipoId', form.tipoId)
    payload.append('valorDiario', form.valorDiario)

    if (file) {
        payload.append('fotografia', file)
    }
}

// Nombre: createVehiculo
// Input: ninguno directo (usa createForm y selectedFile)
// Descripcion: crea un vehiculo nuevo con sus datos y fotografia.
// Output: no retorna valor; muestra feedback/error, refresca lista y limpia formulario.
const createVehiculo = async () => {
    feedback.value = ''
    errorMessage.value = ''
    isSaving.value = true

    try {
        const payload = new FormData()
        appendFormFields(payload, createForm, getFile(selectedFile.value), true)

        await $fetch('/api/admin/vehiculos', {
            method: 'POST',
            body: payload,
        })

        feedback.value = 'Vehículo creado correctamente.'
        await refreshVehiculos()
        resetCreateForm()
    } catch (error: any) {
        errorMessage.value = error?.data?.statusMessage ?? error?.message ?? 'No se pudo guardar el vehículo.'
    } finally {
        isSaving.value = false
    }
}

// Nombre: updateVehiculo
// Input: ninguno directo (usa editForm, editSelectedFile y editingId)
// Descripcion: actualiza los datos del vehiculo seleccionado desde el modal.
// Output: no retorna valor; muestra feedback/error, refresca lista y cierra modal.
const updateVehiculo = async () => {
    feedback.value = ''
    errorMessage.value = ''
    isSaving.value = true

    try {
        if (!editingId.value) {
            throw new Error('No hay vehículo seleccionado.')
        }

        const payload = new FormData()
        appendFormFields(payload, editForm, getFile(editSelectedFile.value), false)

        await $fetch(`/api/admin/vehiculos/${editingId.value}`, {
            method: 'PUT',
            body: payload,
        })

        feedback.value = 'Vehículo actualizado correctamente.'
        await refreshVehiculos()
        closeEditModal()
    } catch (error: any) {
        errorMessage.value = error?.data?.statusMessage ?? error?.message ?? 'No se pudo actualizar el vehículo.'
    } finally {
        isSaving.value = false
    }
}

// Nombre: removeVehiculo
// Input: vehiculoId (number)
// Descripcion: elimina un vehiculo por su ID y actualiza el listado en pantalla.
// Output: no retorna valor; actualiza mensajes segun el resultado.
const removeVehiculo = async (vehiculoId: number) => {
    feedback.value = ''
    errorMessage.value = ''

    try {
        await $fetch(`/api/admin/vehiculos/${vehiculoId}`, { method: 'DELETE' })
        feedback.value = 'Vehículo eliminado correctamente.'
        await refreshVehiculos()
    } catch (error: any) {
        errorMessage.value = error?.data?.statusMessage ?? 'No se pudo eliminar el vehículo.'
    }
}
</script>

<template>
    <div class="space-y-6">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-4">
            <div>
                <h1 class="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <span>Gestión de Vehículos</span>
                    <span class="title-emoji">🚙</span>
                </h1>
                <p class="text-sm text-gray-500">Administra la flota, sus tipos, precios y fotografías.</p>
            </div>
            <input v-model="search" type="text" placeholder="Buscar vehículo..."
                class="w-full sm:w-72 border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-fit">
                <h2 class="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Crear Vehículo</h2>

                <form class="space-y-4" @submit.prevent="createVehiculo">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Patente</label>
                        <input v-model="createForm.patente" type="text" placeholder="AB-CD-12"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Marca</label>
                            <input v-model="createForm.marca" type="text" placeholder="Toyota"
                                class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                                required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Modelo</label>
                            <input v-model="createForm.modelo" type="text" placeholder="Yaris"
                                class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                                required />
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                        <select v-model="createForm.tipoId"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none bg-white"
                            required>
                            <option value="" disabled>Seleccione tipo...</option>
                            <option v-for="tipo in tipos" :key="tipo.id" :value="String(tipo.id)">{{ tipo.nombre }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Valor diario</label>
                        <input v-model="createForm.valorDiario" type="number" min="1"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Fotografía</label>
                        <UFileUpload v-model="selectedFile" accept="image/*" :multiple="false"
                            label="Selecciona una imagen" />
                    </div>
                    <button type="submit" :disabled="isSaving"
                        class="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-2.5 rounded-lg text-sm font-semibold transition mt-2 shadow-sm">
                        {{ isSaving ? 'Guardando...' : 'Guardar Vehículo' }}
                    </button>
                    <p v-if="feedback" class="text-sm text-green-700">{{ feedback }}</p>
                    <p v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</p>
                </form>
            </div>

            <div class="xl:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div class="p-4 bg-gray-50 border-b">
                    <h2 class="font-semibold text-gray-700">Vehículos Registrados</h2>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm text-gray-600">
                        <thead class="bg-white text-xs uppercase text-gray-500 font-bold border-b">
                            <tr>
                                <th class="p-4">Vehículo</th>
                                <th class="p-4">Tipo</th>
                                <th class="p-4 text-right">Valor Diario</th>
                                <th class="p-4 text-center">Estado</th>
                                <th class="p-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr v-for="vehiculo in filteredVehiculos" :key="vehiculo.id"
                                class="hover:bg-gray-50 transition-colors">
                                <td class="p-4">
                                    <div class="flex items-center gap-3">
                                        <img :src="vehiculo.fotografia" :alt="vehiculo.patente"
                                            class="h-12 w-16 rounded-lg object-cover bg-gray-100" />
                                        <div>
                                            <p class="font-semibold text-gray-900">{{ vehiculo.marca }} {{
                                                vehiculo.modelo }}</p>
                                            <p class="text-xs text-gray-500 font-mono">{{ vehiculo.patente }}</p>
                                        </div>
                                    </div>
                                </td>
                                <td class="p-4">{{ vehiculo.tipo }}</td>
                                <td class="p-4 text-right font-semibold">${{
                                    vehiculo.valorDiario.toLocaleString('es-CL') }}</td>
                                <td class="p-4 text-center">
                                    <span
                                        class="px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">{{
                                            vehiculo.estado }}</span>
                                </td>
                                <td class="p-4 text-center">
                                    <button type="button"
                                        class="text-orange-600 hover:underline text-xs font-semibold mr-3"
                                        @click="startEdit(vehiculo)">Editar</button>
                                    <button type="button" class="text-red-600 hover:underline text-xs font-semibold"
                                        @click="removeVehiculo(vehiculo.id)">Borrar</button>
                                </td>
                            </tr>
                            <tr v-if="filteredVehiculos.length === 0">
                                <td colspan="5" class="p-6 text-center text-gray-500">No hay vehículos registrados.</td>
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
                    <h2 class="text-lg font-semibold text-gray-800">Editar Vehículo</h2>
                    <button type="button" class="text-gray-500 hover:text-gray-700 text-sm font-semibold"
                        @click="closeEditModal">Cerrar</button>
                </div>
                <form class="space-y-4" @submit.prevent="updateVehiculo">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Patente</label>
                        <input v-model="editForm.patente" type="text" placeholder="AB-CD-12"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Marca</label>
                            <input v-model="editForm.marca" type="text"
                                class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                                required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Modelo</label>
                            <input v-model="editForm.modelo" type="text"
                                class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                                required />
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                        <select v-model="editForm.tipoId"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none bg-white"
                            required>
                            <option value="" disabled>Seleccione tipo...</option>
                            <option v-for="tipo in tipos" :key="tipo.id" :value="String(tipo.id)">{{ tipo.nombre }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Valor diario</label>
                        <input v-model="editForm.valorDiario" type="number" min="1"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
                            required />
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Nueva fotografía opcional</label>
                        <UFileUpload v-model="editSelectedFile" accept="image/*" :multiple="false"
                            label="Selecciona una imagen" />
                    </div>
                    <div class="flex justify-end gap-2">
                        <button type="button"
                            class="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold"
                            @click="closeEditModal">Cancelar</button>
                        <button type="submit" :disabled="isSaving"
                            class="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold">{{
                                isSaving ? 'Guardando...' : 'Guardar Cambios' }}</button>
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
