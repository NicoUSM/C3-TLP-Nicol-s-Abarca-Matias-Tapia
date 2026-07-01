<script setup lang="ts">
type ArriendoDetalle = {
    id: number
    cliente: string
    rut: string
    vehiculo: string
    patente: string
    estado: string
    fechaInicio: string
    fechaFinEstimada: string
    valorDiario: number
    fotoEntrega: string | null
    fotoRecepcion: string | null
    fechaHoraEntrega: string | null
    fechaHoraRecepcion: string | null
    total: number
    vehiculoId: number
}

const route = useRoute()
const arriendoId = route.params.id
const { data: arriendo, refresh: refreshArriendo } = await useFetch<ArriendoDetalle>(`/api/ejecutivo/arriendos/${arriendoId}`, {
    default: () => ({
        id: 0,
        cliente: '',
        rut: '',
        vehiculo: '',
        patente: '',
        estado: '',
        fechaInicio: '',
        fechaFinEstimada: '',
        valorDiario: 0,
        fotoEntrega: null,
        fotoRecepcion: null,
        fechaHoraEntrega: null,
        fechaHoraRecepcion: null,
        total: 0,
        vehiculoId: 0,
    }),
})

const tipoRegistro = ref<'entrega' | 'recepcion'>('entrega')
const fecha = ref('')
const hora = ref('')
const selectedFile = ref<File | File[] | null>(null)
const selectedUploadFile = computed(() => Array.isArray(selectedFile.value) ? selectedFile.value[0] : selectedFile.value)
const feedback = ref('')
const errorMessage = ref('')
const isSaving = ref(false)
const arriendoIdText = computed(() => arriendo.value?.id ?? '-')

// Nombre: submitRegistro
// Input: ninguno directo (usa tipoRegistro, fecha, hora y selectedFile)
// Descripcion: registra evento de entrega o recepcion con fecha, hora y fotografia.
// Output: no retorna valor; guarda registro, actualiza mensajes y refresca detalle.
const submitRegistro = async () => {
    feedback.value = ''
    errorMessage.value = ''

    if (!selectedUploadFile.value || !fecha.value || !hora.value) {
        errorMessage.value = 'Completa fecha, hora y fotografía.'
        return
    }

    isSaving.value = true

    try {
        const payload = new FormData()
        payload.append('tipoRegistro', tipoRegistro.value)
        payload.append('fecha', fecha.value)
        payload.append('hora', hora.value)
        payload.append('fotografia', selectedUploadFile.value)

        await $fetch(`/api/ejecutivo/arriendos/${arriendoId}`, {
            method: 'POST',
            body: payload,
        })

        feedback.value = 'Registro guardado correctamente.'
        selectedFile.value = null
        await refreshArriendo()
    } catch (error: any) {
        errorMessage.value = error?.data?.statusMessage ?? 'No se pudo guardar el registro.'
    } finally {
        isSaving.value = false
    }
}
</script>

<template>
    <div class="space-y-6">
        <div class="flex items-center gap-4 border-b pb-4">
            <NuxtLink to="/ejecutivo/arriendos"
                class="text-gray-500 hover:text-orange-600 transition-colors bg-gray-100 hover:bg-orange-50 p-2 rounded-lg">
                ⬅ Volver
            </NuxtLink>
            <div>
                <h1 class="text-2xl font-bold text-gray-900">Detalle de Arriendo #{{ arriendoIdText }}</h1>
                <p class="text-sm text-gray-500">Supervisa el estado y gestiona la devolución del vehículo.</p>
            </div>

            <div class="ml-auto">
                <span class="px-4 py-2 rounded-lg text-sm font-bold border"
                    :class="arriendo?.estado === 'Vigente' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-700 border-gray-200'">
                    Estado: {{ arriendo?.estado }}
                </span>
            </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 class="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Datos del Contrato</h2>

                    <div class="space-y-3 text-sm">
                        <div class="flex justify-between border-b border-gray-50 pb-2">
                            <span class="text-gray-500">Cliente:</span>
                            <span class="font-medium text-gray-900">{{ arriendo?.cliente }} ({{ arriendo?.rut }})</span>
                        </div>
                        <div class="flex justify-between border-b border-gray-50 pb-2">
                            <span class="text-gray-500">Vehículo:</span>
                            <span class="font-medium text-gray-900">{{ arriendo?.vehiculo }} ({{ arriendo?.patente
                                }})</span>
                        </div>
                        <div class="flex justify-between border-b border-gray-50 pb-2">
                            <span class="text-gray-500">Fecha Inicio (Entrega):</span>
                            <span class="font-medium text-gray-900">{{ arriendo?.fechaInicio }}</span>
                        </div>
                        <div class="flex justify-between border-b border-gray-50 pb-2">
                            <span class="text-gray-500">Fecha Estimada Devolución:</span>
                            <span class="font-medium text-gray-900">{{ arriendo?.fechaFinEstimada }}</span>
                        </div>
                        <div class="flex justify-between border-b border-gray-50 pb-2">
                            <span class="text-gray-500">Valor Diario:</span>
                            <span class="font-medium text-gray-900">${{ (arriendo?.valorDiario ??
                                0).toLocaleString('es-CL') }}</span>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <h2 class="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Registro Fotográfico</h2>
                    <div class="grid grid-cols-2 gap-4">
                        <div
                            class="bg-gray-100 rounded-lg h-32 flex items-center justify-center border border-gray-200 text-gray-400 text-sm font-medium text-center p-2 overflow-hidden">
                            <img v-if="arriendo?.fotoEntrega" :src="arriendo.fotoEntrega" alt="Foto de entrega"
                                class="h-full w-full object-cover" />
                            <span v-else>Sin foto de entrega</span>
                        </div>
                        <div
                            class="bg-gray-100 rounded-lg h-32 flex items-center justify-center border border-gray-200 text-gray-400 text-sm font-medium text-center p-2 overflow-hidden">
                            <img v-if="arriendo?.fotoRecepcion" :src="arriendo.fotoRecepcion" alt="Foto de recepción"
                                class="h-full w-full object-cover" />
                            <span v-else>Sin foto de recepción</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-200 h-fit">
                <h2 class="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Registrar Evento (Entrega/Devolución)
                </h2>

                <form class="space-y-5" @submit.prevent="submitRegistro">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Tipo de Registro</label>
                        <select v-model="tipoRegistro"
                            class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none bg-white"
                            required>
                            <option value="entrega">Entrega del Vehículo al Cliente</option>
                            <option value="recepcion">Recepción / Devolución del Vehículo</option>
                        </select>
                    </div>
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Fecha Exacta</label>
                            <input v-model="fecha" type="date"
                                class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none text-gray-700"
                                required />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Hora Exacta</label>
                            <input v-model="hora" type="time"
                                class="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none text-gray-700"
                                required />
                        </div>
                    </div>

                    <div class="bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300">
                        <label class="block text-sm font-medium text-gray-700 mb-2">Subir Fotografía del Estado del
                            Vehículo</label>
                        <UFileUpload v-model="selectedFile" accept="image/*" :multiple="false"
                            label="Arrastra o selecciona una imagen"
                            description="Usa una foto de entrega o recepción." />
                    </div>

                    <button type="submit" :disabled="isSaving"
                        class="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg text-sm font-bold transition shadow-sm mt-4">
                        {{ isSaving ? 'Guardando...' : 'Guardar Registro y Fotografías' }}
                    </button>
                    <p v-if="feedback" class="text-sm text-green-700">{{ feedback }}</p>
                    <p v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</p>
                </form>
            </div>

        </div>
    </div>
</template>