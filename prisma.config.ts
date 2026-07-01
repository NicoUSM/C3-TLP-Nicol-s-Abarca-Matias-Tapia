import { defineConfig, env } from '@prisma/config'
import dotenv from 'dotenv'

dotenv.config({ path: 'conexion.env' })

export default defineConfig({
  earlyAccess: true,
  datasource: {
    url: env("DATABASE_URL"),
  }
})