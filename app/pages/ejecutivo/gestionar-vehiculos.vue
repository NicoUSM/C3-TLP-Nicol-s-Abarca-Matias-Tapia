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
      <div class="p-4 bg-gray-50 border-b flex flex-col sm:flex-row justify-between sm:items-center gap-3">
        <div>
          <h2 class="font-semibold text-gray-700">Vehículos Registrados</h2>
          <p class="text-xs text-gray-500">{{ filteredVehiculos.length }} vehículo{{ filteredVehiculos.length === 1 ? ''
            : 's' }} encontrado{{ filteredVehiculos.length === 1 ? '' : 's' }}</p>
        </div>
        <span class="text-xs text-gray-500">Estados operativos de la flota</span>
      </div>

      <div class="max-h-96 space-y-3 overflow-y-auto p-4 pr-3">
        <article v-for="vehiculo in filteredVehiculos" :key="vehiculo.id"
          class="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-orange-200 hover:shadow-md">
          <div class="space-y-4">
            <div class="flex items-start gap-4 min-w-0">
              <img :src="getVehicleImage(vehiculo.fotografia)" alt="Fotografía del vehículo"
                class="h-16 w-20 shrink-0 rounded-xl object-cover border border-gray-200 bg-gray-50" />

              <div class="min-w-0 flex-1 space-y-3">
                <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 class="font-semibold text-gray-900 wrap-anywhere">{{ vehiculo.marca }} {{ vehiculo.modelo }}</h3>
                  <p class="font-mono text-sm text-gray-500">{{ vehiculo.patente }}</p>
                </div>

                <div class="flex flex-wrap items-center gap-2">
                  <span class="px-2.5 py-1 rounded-full text-xs font-semibold" :class="{
                    'bg-green-100 text-green-700': vehiculo.estado === 'Disponible',
                    'bg-amber-100 text-amber-700': vehiculo.estado === 'Arrendado',
                    'bg-red-100 text-red-700': vehiculo.estado === 'En mantenimiento',
                    'bg-gray-200 text-gray-700': vehiculo.estado === 'De baja'
                  }">{{ vehiculo.estado }}</span>
                  <span class="px-2.5 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-600">
                    {{ vehiculo.tipo }}
                  </span>
                </div>
              </div>
            </div>

            <div class="flex justify-end border-t border-gray-100 pt-3">
              <div class="flex flex-wrap items-center justify-end gap-2">
                <span v-if="vehiculo.estado === 'Arrendado'" class="text-xs text-gray-500 wrap-anywhere">Vehículo con
                  arriendo vigente. No hay acciones disponibles en este módulo.</span>

                <button
                  v-if="vehiculo.estado !== 'En mantenimiento' && vehiculo.estado !== 'Arrendado' && vehiculo.estado !== 'De baja'"
                  type="button"
                  class="rounded-lg border border-amber-200 px-3 py-1.5 text-xs font-semibold text-amber-700 transition hover:bg-amber-50 disabled:opacity-60"
                  :disabled="updatingVehiculoId === vehiculo.id" @click="updateState(vehiculo.id, 'En mantenimiento')">
                  Mantenimiento
                </button>

                <button
                  v-if="vehiculo.estado !== 'De baja' && vehiculo.estado !== 'Arrendado' && vehiculo.estado !== 'En mantenimiento'"
                  type="button"
                  class="rounded-lg border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-700 transition hover:bg-red-50 disabled:opacity-60"
                  :disabled="updatingVehiculoId === vehiculo.id" @click="updateState(vehiculo.id, 'De baja')">
                  Dar de baja
                </button>

                <button v-if="vehiculo.estado === 'En mantenimiento' || vehiculo.estado === 'De baja'" type="button"
                  class="rounded-lg border border-orange-200 px-3 py-1.5 text-xs font-semibold text-orange-700 transition hover:bg-orange-50 disabled:opacity-60"
                  :disabled="updatingVehiculoId === vehiculo.id" @click="updateState(vehiculo.id, 'Disponible')">
                  Habilitar
                </button>

                <button v-if="vehiculo.estado === 'De baja'" type="button"
                  class="rounded-lg border border-red-300 px-3 py-1.5 text-xs font-semibold text-red-800 transition hover:bg-red-50 disabled:opacity-60"
                  :disabled="updatingVehiculoId === vehiculo.id" @click="deleteVehiculo(vehiculo.id)">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </article>

        <div v-if="filteredVehiculos.length === 0"
          class="rounded-xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-sm text-gray-500">
          No hay vehículos que coincidan con la búsqueda.
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
