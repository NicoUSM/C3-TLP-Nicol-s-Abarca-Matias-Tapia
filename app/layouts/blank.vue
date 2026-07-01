<template>
    <div class="relative min-h-screen bg-linear-to-br from-orange-50 via-amber-50 to-orange-100 overflow-hidden">
        <div class="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
            <img src="/uploads/SansaTorMotors.png" alt="" aria-hidden="true"
                class="w-304 max-w-[92vw] object-contain opacity-12 blur-[5px] select-none" />
        </div>

        <div class="relative z-10 min-h-screen flex items-center justify-center p-4">
            <slot />
        </div>
    </div>
</template>