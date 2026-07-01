<script setup lang="ts">
type VehiculoRow = {
  id: number
  patente: string
  marca: string
  modelo: string
  valorDiario: number
  estado: string
  fotografia: string
  tipo: string
}

const { data: vehiculos, refresh: refreshVehiculos } = await useFetch<VehiculoRow[]>('/api/ejecutivo/vehiculos', { default: () => [] })
const search = ref('')
const feedback = ref('')
const errorMessage = ref('')
const updatingVehiculoId = ref<number | null>(null)

// Nombre: getVehicleImage
// Input: path (string)
// Descripcion: normaliza rutas antiguas de imagen para apuntar al directorio actual de uploads.
// Output: string con la ruta de imagen ajustada o la original si no requiere conversion.
const getVehicleImage = (path: string) => {
  if (path.startsWith('/images/vehiculos/')) {
    return path.replace('/images/vehiculos/', '/uploads/vehiculos/').replace(/\.jpg$/i, '.svg')
  }

  return path
}

// Nombre: filteredVehiculos
// Input: ninguno directo (usa search.value y vehiculos.value)
// Descripcion: filtra la lista de vehiculos por patente, marca, modelo, tipo o estado.
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

// Nombre: updateState
// Input: vehiculoId (number), estado (string)
// Descripcion: actualiza el estado operativo de un vehiculo especifico.
// Output: no retorna valor; muestra resultado y refresca el listado.
const updateState = async (vehiculoId: number, estado: string) => {
  feedback.value = ''
  errorMessage.value = ''
  updatingVehiculoId.value = vehiculoId

  try {
    await $fetch(`/api/ejecutivo/vehiculos/${vehiculoId}`, {
      method: 'PUT',
      body: { estado },
    })

    feedback.value = 'Estado actualizado correctamente.'
    await refreshVehiculos()
  } catch (error: any) {
    errorMessage.value = error?.data?.statusMessage ?? 'No se pudo actualizar el estado.'
  } finally {
    updatingVehiculoId.value = null
  }
}

// Nombre: deleteVehiculo
// Input: vehiculoId (number)
// Descripcion: elimina un vehiculo marcado como De baja.
// Output: no retorna valor; muestra resultado y refresca el listado.
const deleteVehiculo = async (vehiculoId: number) => {
  feedback.value = ''
  errorMessage.value = ''
  updatingVehiculoId.value = vehiculoId

  try {
    await $fetch(`/api/ejecutivo/vehiculos/${vehiculoId}`, {
      method: 'DELETE',
    })

    feedback.value = 'Vehículo eliminado correctamente.'
    await refreshVehiculos()
  } catch (error: any) {
    errorMessage.value = error?.data?.statusMessage ?? 'No se pudo eliminar el vehículo.'
  } finally {
    updatingVehiculoId.value = null
  }
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <span>Estados de Vehículos</span>
          <span class="title-emoji">🚘</span>
        </h1>
        <p class="text-sm text-gray-500">Cambia el estado operativo de la flota.</p>
      </div>
      <input v-model="search" type="text" placeholder="Buscar patente o modelo..."
        class="border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none w-full sm:w-80" />
    </div>

    <p v-if="feedback" class="text-sm text-green-700">{{ feedback }}</p>
    <p v-if="errorMessage" class="text-sm text-red-600">{{ errorMessage }}</p>

    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <table class="w-full text-left text-sm text-gray-600">
        <thead class="bg-white text-xs uppercase text-gray-500 font-bold border-b">
          <tr>
            <th class="p-4 w-24">Foto</th>
            <th class="p-4">Patente</th>
            <th class="p-4">Vehículo</th>
            <th class="p-4">Estado Actual</th>
            <th class="p-4 text-center">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="vehiculo in filteredVehiculos" :key="vehiculo.id" class="hover:bg-gray-50 transition-colors">
            <td class="p-4">
              <img :src="getVehicleImage(vehiculo.fotografia)" alt="Fotografía del vehículo"
                class="h-12 w-16 rounded object-cover border border-gray-200" />
            </td>
            <td class="p-4 font-mono font-medium text-gray-900">{{ vehiculo.patente }}</td>
            <td class="p-4">
              <p class="font-semibold text-gray-800">{{ vehiculo.marca }} {{ vehiculo.modelo }}</p>
              <p class="text-xs text-gray-500">{{ vehiculo.tipo }}</p>
            </td>
            <td class="p-4">
              <span class="px-2.5 py-1 rounded-full text-xs font-semibold" :class="{
                'bg-green-100 text-green-700': vehiculo.estado === 'Disponible',
                'bg-amber-100 text-amber-700': vehiculo.estado === 'Arrendado',
                'bg-red-100 text-red-700': vehiculo.estado === 'En mantenimiento',
                'bg-gray-200 text-gray-700': vehiculo.estado === 'De baja'
              }">{{ vehiculo.estado }}</span>
            </td>
            <td class="p-4 text-center">
              <div class="flex flex-wrap items-center justify-center gap-2">
                <span v-if="vehiculo.estado === 'Arrendado'" class="text-xs text-gray-500">Vehículo con arriendo
                  vigente. No hay acciones disponibles en este módulo.</span>

                <button
                  v-if="vehiculo.estado !== 'En mantenimiento' && vehiculo.estado !== 'Arrendado' && vehiculo.estado !== 'De baja'"
                  type="button" class="text-amber-600 hover:text-amber-800 hover:underline text-xs font-semibold"
                  :disabled="updatingVehiculoId === vehiculo.id" @click="updateState(vehiculo.id, 'En mantenimiento')">
                  Mantenimiento
                </button>

                <button
                  v-if="vehiculo.estado !== 'De baja' && vehiculo.estado !== 'Arrendado' && vehiculo.estado !== 'En mantenimiento'"
                  type="button" class="text-red-600 hover:text-red-800 hover:underline text-xs font-semibold"
                  :disabled="updatingVehiculoId === vehiculo.id" @click="updateState(vehiculo.id, 'De baja')">
                  Dar de baja
                </button>

                <button v-if="vehiculo.estado === 'En mantenimiento' || vehiculo.estado === 'De baja'" type="button"
                  class="text-orange-600 hover:text-orange-800 hover:underline text-xs font-semibold"
                  :disabled="updatingVehiculoId === vehiculo.id" @click="updateState(vehiculo.id, 'Disponible')">
                  Habilitar
                </button>

                <button v-if="vehiculo.estado === 'De baja'" type="button"
                  class="text-red-700 hover:text-red-900 hover:underline text-xs font-semibold"
                  :disabled="updatingVehiculoId === vehiculo.id" @click="deleteVehiculo(vehiculo.id)">
                  Eliminar
                </button>

              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
