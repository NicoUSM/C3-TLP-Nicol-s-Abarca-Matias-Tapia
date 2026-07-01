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
                <div class="p-4 bg-gray-50 border-b flex flex-col lg:flex-row justify-between lg:items-center gap-3">
                    <div>
                        <h2 class="font-semibold text-gray-700">Historial y Vigentes</h2>
                        <p class="text-xs text-gray-500">{{ filteredArriendos.length }} arriendo{{
                            filteredArriendos.length === 1 ? '' : 's' }} encontrado{{ filteredArriendos.length === 1 ?
                            '' : 's' }}</p>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-2">
                        <select v-model="estadoFiltro"
                            class="w-full sm:w-auto border border-gray-300 rounded-lg p-1.5 text-sm outline-none bg-white">
                            <option value="todos">Todos los estados</option>
                            <option value="vigentes">Solo Vigentes</option>
                            <option value="finalizados">Solo Finalizados</option>
                        </select>
                        <input v-model="search" type="text" placeholder="Buscar ID o Patente..."
                            class="w-full sm:w-56 border border-gray-300 rounded-lg p-1.5 text-sm focus:ring-2 focus:ring-orange-500 outline-none" />
                    </div>
                </div>

                <div class="max-h-136 space-y-3 overflow-y-auto p-4 pr-3 lg:max-h-[calc(100vh-18rem)]">
                    <article v-for="arriendo in filteredArriendos" :key="arriendo.id"
                        class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-orange-200 hover:shadow-md">
                        <div class="space-y-4">
                            <div class="flex items-start gap-4 min-w-0">
                                <div
                                    class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-100 font-mono text-sm font-bold text-orange-700">
                                    #{{ arriendo.id }}
                                </div>

                                <div class="min-w-0 flex-1 space-y-3">
                                    <div
                                        class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                        <h3 class="font-semibold text-gray-900 wrap-anywhere">{{ arriendo.vehiculo }}
                                        </h3>
                                        <p class="font-mono text-sm text-gray-500">{{ arriendo.patente }}</p>
                                    </div>

                                    <div class="grid gap-3 text-sm text-gray-600 md:grid-cols-2">
                                        <div class="space-y-1 min-w-0">
                                            <p class="text-xs font-semibold uppercase text-gray-400">Cliente</p>
                                            <p class="font-medium text-gray-700 wrap-anywhere">{{ arriendo.cliente }}
                                            </p>
                                            <p class="font-mono text-xs text-gray-500 wrap-anywhere">{{ arriendo.rut }}
                                            </p>
                                        </div>

                                        <div class="space-y-1 min-w-0 md:text-right">
                                            <p class="text-xs font-semibold uppercase text-gray-400">Período</p>
                                            <p class="text-sm text-gray-700">{{ arriendo.fechaInicio }}</p>
                                            <p class="text-xs text-gray-400">hasta</p>
                                            <p class="text-sm text-gray-700">{{ arriendo.fechaFin }}</p>
                                        </div>
                                    </div>

                                    <div class="flex flex-wrap items-center gap-2">
                                        <span class="px-2.5 py-1 rounded-full text-xs font-semibold"
                                            :class="arriendo.estado === 'Vigente' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'">
                                            {{ arriendo.estado }}
                                        </span>
                                        <span
                                            class="px-2.5 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                                            ${{ arriendo.total.toLocaleString('es-CL') }}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-end border-t border-gray-100 pt-3">
                                <NuxtLink :to="`/ejecutivo/arriendos/${arriendo.id}`"
                                    class="rounded-lg border border-orange-200 px-3 py-1.5 text-xs font-semibold text-orange-700 transition hover:bg-orange-50">
                                    Ver Detalle / Devolución
                                </NuxtLink>
                            </div>
                        </div>
                    </article>

                    <div v-if="filteredArriendos.length === 0"
                        class="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-sm text-gray-500">
                        No hay arriendos registrados.
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
