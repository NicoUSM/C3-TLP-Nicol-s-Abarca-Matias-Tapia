import dotenv from 'dotenv'
import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import type { PrismaClient as PrismaClientType } from '../../generated/prisma/index.js'

dotenv.config({ path: 'conexion.env', override: true })

const require = createRequire(import.meta.url)
const prismaClientModule = require(resolve(process.cwd(), 'generated/prisma/index.js'))
const PrismaClient = prismaClientModule.PrismaClient as {
  new (options?: { adapter?: PrismaMariaDb }): PrismaClientType
}

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClientType
}

const adapter = new PrismaMariaDb(process.env.DATABASE_URL ?? '')

export const prisma = process.env.NODE_ENV === 'production'
  ? (globalForPrisma.prisma ?? new PrismaClient({ adapter }))
  : new PrismaClient({ adapter })

if (process.env.NODE_ENV === 'production') {
  globalForPrisma.prisma = prisma
}