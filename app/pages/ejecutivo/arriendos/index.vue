<script setup lang="ts">
type VehiculoDisponible = {
    id: number
    patente: string
    marca: string
    modelo: string
    valorDiario: number
    fotografia: string
    tipo: string
}

type ArriendoRow = {
    id: number
    cliente: string
    rut: string
    vehiculo: string
    patente: string
    fechaInicio: string
    fechaFin: string
    estado: string
    total: number
    vehiculoId: number
}

type ClienteOption = {
    id: number
    rut: string
    nombre: string
}

const { data: arriendos, refresh: refreshArriendos } = await useFetch<ArriendoRow[]>('/api/ejecutivo/arriendos', { default: () => [] })
const { data: vehiculosDisponibles, refresh: refreshVehiculos } = await useFetch<VehiculoDisponible[]>('/api/ejecutivo/vehiculos-disponibles', { default: () => [] })
const { data: clientesRegistrados } = await useFetch<ClienteOption[]>('/api/ejecutivo/clientes', { default: () => [] })

const search = ref('')
const estadoFiltro = ref('todos')
const feedback = ref('')
const errorMessage = ref('')
const isSaving = ref(false)

const form = reactive({
    clienteId: '',
    vehiculoId: '',
    fechaInicio: '',
    fechaTermino: '',
})

// Nombre: filteredArriendos
// Input: ninguno directo (usa search.value, estadoFiltro.value y arriendos.value)
// Descripcion: filtra el listado de arriendos por texto de busqueda y estado seleccionado.
// Output: arreglo de arriendos filtrados para mostrar en la tabla.
const filteredArriendos = computed(() => {
    const term = search.value.trim().toLowerCase()

    return (arriendos.value ?? []).filter((arriendo) => {
        const matchesSearch = !term || [String(arriendo.id), arriendo.patente, arriendo.cliente, arriendo.rut, arriendo.vehiculo].some((value) => value.toLowerCase().includes(term))
        const matchesState = estadoFiltro.value === 'todos' || (estadoFiltro.value === 'vigentes' && arriendo.estado === 'Vigente') || (estadoFiltro.value === 'finalizados' && arriendo.estado === 'Finalizado')

        return matchesSearch && matchesState
    })
})

const calculateDays = computed(() => {
    // Nombre: calculateDays
    // Input: ninguno directo (usa form.fechaInicio y form.fechaTermino)
    // Descripcion: calcula la cantidad de dias del arriendo segun las fechas ingresadas.
    // Output: numero de dias validos; retorna 0 si las fechas no son validas.
    if (!form.fechaInicio || !form.fechaTermino) {
        return 0
    }

    const start = new Date(`${form.fechaInicio}T00:00:00.000Z`)
    const end = new Date(`${form.fechaTermino}T00:00:00.000Z`)

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime()) || end < start) {
        return 0
    }

    const dayMs = 1000 * 60 * 60 * 24
    return Math.max(1, Math.ceil((end.getTime() - start.getTime()) / dayMs) + 1)
})

// Nombre: selectedVehicle
// Input: ninguno directo (usa form.vehiculoId y vehiculosDisponibles.value)
// Descripcion: obtiene el vehiculo disponible seleccionado en el formulario.
// Output: vehiculo seleccionado o undefined si no existe coincidencia.
const selectedVehicle = computed(() => (vehiculosDisponibles.value ?? []).find((vehiculo) => vehiculo.id === Number(form.vehiculoId)))

// Nombre: selectedCliente
// Input: ninguno directo (usa form.clienteId y clientesRegistrados.value)
// Descripcion: obtiene el cliente registrado seleccionado en el formulario.
// Output: cliente seleccionado o undefined si no existe coincidencia.
const selectedCliente = computed(() => (clientesRegistrados.value ?? []).find((cliente) => cliente.id === Number(form.clienteId)))

// Nombre: estimatedTotal
// Input: ninguno directo (usa calculateDays.value y selectedVehicle.value)
// Descripcion: calcula el valor total estimado multiplicando dias por valor diario del vehiculo.
// Output: monto estimado del arriendo; retorna 0 si no hay vehiculo seleccionado.
const estimatedTotal = computed(() => calculateDays.value * (selectedVehicle.value?.valorDiario ?? 0))

// Nombre: createArriendo
// Input: ninguno directo (usa form y selectedCliente)
// Descripcion: valida los datos del formulario y crea un nuevo arriendo.
// Output: no retorna valor; muestra feedback/error, refresca listados y limpia formulario.
const createArriendo = async () => {
    feedback.value = ''
    errorMessage.value = ''
    isSaving.value = true

    try {
        if (!selectedCliente.value) {
            throw new Error('Selecciona un cliente registrado.')
        }

        await $fetch('/api/ejecutivo/arriendos', {
            method: 'POST',
            body: {
                rutCliente: selectedCliente.value.rut,
                nombreCliente: selectedCliente.value.nombre,
                vehiculoId: Number(form.vehiculoId),
                fechaInicio: form.fechaInicio,
                fechaTermino: form.fechaTermino,
            },
        })

        feedback.value = 'Arriendo creado correctamente.'
        form.clienteId = ''
        form.vehiculoId = ''
        form.fechaInicio = ''
        form.fechaTermino = ''
        await refreshArriendos()
        await refreshVehiculos()
    } catch (error: any) {
        errorMessage.value = error?.data?.statusMessage ?? error?.message ?? 'No se pudo crear el arriendo.'
    } finally {
        isSaving.value = false
    }
}
</script>

<template>
    <div class="space-y-6">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-4">
            <div>
                <h1 class="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <span>Gestión de Arriendos</span>
                    <span class="title-emoji">📋</span>
                </h1>
                <p class="text-sm text-gray-500">Administra los contratos, entregas y devoluciones.</p>
            </div>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-fit">
                <h2 class="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Ingresar Nuevo Arriendo</h2>

                <form class="space-y-4" @submit.prevent="createArriendo">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Cliente Registrado</label>
                        <select v-model="form.clienteId"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none bg-white"
                            required>
                            <option value="" disabled>Seleccione un cliente...</option>
                            <option v-for="cliente in clientesRegistrados" :key="cliente.id"
                                :value="String(cliente.id)">
                                {{ cliente.nombre }} | {{ cliente.rut }}
                            </option>
                        </select>
                        <p v-if="selectedCliente" class="text-xs text-gray-500 mt-1">RUT: {{ selectedCliente.rut }}</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Vehículo (Solo Disponibles)</label>
                        <select v-model="form.vehiculoId"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none bg-white"
                            required>
                            <option value="" disabled>Seleccione un vehículo...</option>
                            <option v-for="vehiculo in vehiculosDisponibles" :key="vehiculo.id"
                                :value="String(vehiculo.id)">
                                {{ vehiculo.patente }} | {{ vehiculo.marca }} {{ vehiculo.modelo }} (${{
                                    vehiculo.valorDiario.toLocaleString('es-CL') }}/día)
                            </option>
                        </select>
                    </div>

                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Fecha de Inicio</label>
                            <input v-model="form.fechaInicio" type="date"
                                class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none text-gray-700"
                                required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Fecha de Término</label>
                            <input v-model="form.fechaTermino" type="date"
                                class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none text-gray-700"
                                required />
                        </div>
                    </div>

                    <div class="bg-orange-50 p-3 rounded-lg border border-orange-100 mt-4">
                        <div class="flex justify-between text-sm mb-1">
                            <span class="text-orange-700">Días de arriendo:</span>
                            <span class="font-bold text-orange-900">{{ calculateDays }}</span>
                        </div>
                        <div class="flex justify-between text-sm">
                            <span class="text-orange-700">Valor Total Estimado:</span>
                            <span class="font-bold text-orange-900">${{ estimatedTotal.toLocaleString('es-CL') }}</span>
                        </div>
                    </div>

                    <button type="submit" :disabled="isSaving"
                        class="w-full bg-orange-600 hover:bg-orange-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-2.5 rounded-lg text-sm font-semibold transition mt-2 shadow-sm">
                        {{ isSaving ? 'Creando...' : 'Crear Contrato' }}
                    </button>
                    <p v-if="feedback" class="text-sm text-green-700">{{ feedback }}</p>
                    <p v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</p>
                </form>
            </div>

            <div class="xl:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div class="p-4 bg-gray-50 border-b flex justify-between items-center">
                    <h2 class="font-semibold text-gray-700">Historial y Vigentes</h2>

                    <div class="flex gap-2">
                        <select v-model="estadoFiltro"
                            class="border border-gray-300 rounded-lg p-1.5 text-sm outline-none bg-white">
                            <option value="todos">Todos los estados</option>
                            <option value="vigentes">Solo Vigentes</option>
                            <option value="finalizados">Solo Finalizados</option>
                        </select>
                        <input v-model="search" type="text" placeholder="Buscar ID o Patente..."
                            class="border border-gray-300 rounded-lg p-1.5 text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
                    </div>
                </div>

                <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm text-gray-600">
                        <thead class="bg-white text-xs uppercase text-gray-500 font-bold border-b">
                            <tr>
                                <th class="p-4">ID</th>
                                <th class="p-4">Detalle</th>
                                <th class="p-4 text-center">Período</th>
                                <th class="p-4 text-right">Valor</th>
                                <th class="p-4 text-center">Estado</th>
                                <th class="p-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-100">
                            <tr v-for="arriendo in filteredArriendos" :key="arriendo.id"
                                class="hover:bg-gray-50 transition-colors">
                                <td class="p-4 font-mono font-medium text-gray-900">#{{ arriendo.id }}</td>
                                <td class="p-4">
                                    <p class="font-semibold text-gray-800">{{ arriendo.vehiculo }} <span
                                            class="font-normal text-gray-500 font-mono">({{ arriendo.patente }})</span>
                                    </p>
                                    <p class="text-xs text-gray-500">Cliente: {{ arriendo.cliente }}</p>
                                </td>
                                <td class="p-4 text-center text-xs">
                                    <div>{{ arriendo.fechaInicio }}</div>
                                    <div class="text-gray-400">hasta</div>
                                    <div>{{ arriendo.fechaFin }}</div>
                                </td>
                                <td class="p-4 text-right font-semibold text-gray-900">${{
                                    arriendo.total.toLocaleString('es-CL') }}</td>
                                <td class="p-4 text-center">
                                    <span class="px-2 py-1 rounded-full text-xs font-semibold"
                                        :class="arriendo.estado === 'Vigente' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'">
                                        {{ arriendo.estado }}
                                    </span>
                                </td>
                                <td class="p-4 text-center">
                                    <NuxtLink :to="`/ejecutivo/arriendos/${arriendo.id}`"
                                        class="text-orange-600 hover:text-orange-800 hover:underline text-xs font-semibold">
                                        Ver Detalle / Devolución
                                    </NuxtLink>
                                </td>
                            </tr>
                            <tr v-if="filteredArriendos.length === 0">
                                <td colspan="6" class="p-6 text-center text-gray-500">No hay arriendos registrados.</td>
                            </tr>
                        </tbody>
                    </table>
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
