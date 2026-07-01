import dotenv from 'dotenv'

dotenv.config({ path: 'conexion.env', override: true })

export default defineNuxtConfig({
  modules: ['@nuxt/ui', 'nuxt-auth-utils'],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    session: {
      password: process.env.NUXT_SESSION_PASSWORD,
    },
  },

  compatibilityDate: '2025-07-15',
})