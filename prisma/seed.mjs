import path from 'node:path'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
import { PrismaClient } from '../generated/prisma/index.js'

dotenv.config({ path: path.resolve(process.cwd(), 'conexion.env') })

const adapter = new PrismaMariaDb(process.env.DATABASE_URL)
const prisma = new PrismaClient({ adapter })

const getOrCreatePerfil = async (nombre) => {
  const existing = await prisma.perfil.findFirst({ where: { nombre } })

  if (existing) {
    return existing
  }

  return prisma.perfil.create({ data: { nombre } })
}

const getOrCreateTipo = async (nombre) => {
  const existing = await prisma.tipo.findFirst({ where: { nombre } })

  if (existing) {
    return existing
  }

  return prisma.tipo.create({ data: { nombre } })
}

const getOrCreateCliente = async (cliente) => {
  const existing = await prisma.cliente.findUnique({ where: { rut: cliente.rut } })

  if (existing) {
    return existing
  }

  return prisma.cliente.create({ data: cliente })
}

const main = async () => {
  const administrador = await getOrCreatePerfil('Administrador')
  const ejecutivo = await getOrCreatePerfil('Ejecutivo')

  const passwordHash = await bcrypt.hash('123456', 10)

  await prisma.usuario.upsert({
    where: { identificador: 'admin@autorent.cl' },
    update: {},
    create: {
      identificador: 'admin@autorent.cl',
      nombre: 'Carlos Iturra',
      password: passwordHash,
      perfilId: administrador.id,
    },
  })

  const usuarioEjecutivo = await prisma.usuario.upsert({
    where: { identificador: 'ejecutivo@autorent.cl' },
    update: {},
    create: {
      identificador: 'ejecutivo@autorent.cl',
      nombre: 'Ana Gómez',
      password: passwordHash,
      perfilId: ejecutivo.id,
    },
  })

  const sedan = await getOrCreateTipo('Sedán')
  const suv = await getOrCreateTipo('SUV')
  const coupe = await getOrCreateTipo('Coupé')

  await getOrCreateCliente({
    rut: '19.876.543-2',
    nombre: 'Camila Rojas',
    telefono: '+56 9 1111 2233',
    email: 'camila.rojas@mail.com',
    direccion: 'Las Condes, Santiago',
  })

  await getOrCreateCliente({
    rut: '15.123.456-7',
    nombre: 'Pedro Santander',
    telefono: '+56 9 4444 5566',
    email: 'pedro.santander@mail.com',
    direccion: 'Providencia, Santiago',
  })

  await getOrCreateCliente({
    rut: '12.345.678-9',
    nombre: 'María Contreras',
    telefono: '+56 9 7777 8899',
    email: 'maria.contreras@mail.com',
    direccion: 'Ñuñoa, Santiago',
  })

  await prisma.vehiculo.upsert({
    where: { patente: 'AB-CD-12' },
    update: {
      fotografia: '/uploads/vehiculos/yaris.svg',
    },
    create: {
      patente: 'AB-CD-12',
      marca: 'Toyota',
      modelo: 'Yaris',
      valorDiario: 25000,
      estado: 'Disponible',
      fotografia: '/uploads/vehiculos/yaris.svg',
      tipoId: sedan.id,
    },
  })

  await prisma.vehiculo.upsert({
    where: { patente: 'EF-GH-34' },
    update: {
      fotografia: '/uploads/vehiculos/tucson.svg',
    },
    create: {
      patente: 'EF-GH-34',
      marca: 'Hyundai',
      modelo: 'Tucson',
      valorDiario: 45000,
      estado: 'Arrendado',
      fotografia: '/uploads/vehiculos/tucson.svg',
      tipoId: suv.id,
    },
  })

  await prisma.vehiculo.upsert({
    where: { patente: 'ZZ-11-XX' },
    update: {
      fotografia: '/uploads/vehiculos/civic.svg',
    },
    create: {
      patente: 'ZZ-11-XX',
      marca: 'Honda',
      modelo: 'Civic',
      valorDiario: 38000,
      estado: 'En mantenimiento',
      fotografia: '/uploads/vehiculos/civic.svg',
      tipoId: coupe.id,
    },
  })

  const arriendosExistentes = await prisma.arriendo.count()

  if (arriendosExistentes === 0) {
    await prisma.arriendo.createMany({
      data: [
        {
          rutCliente: '19.876.543-2',
          nombreCliente: 'Camila Rojas',
          fechaInicio: new Date('2026-06-28T09:00:00.000Z'),
          fechaTermino: new Date('2026-07-02T09:00:00.000Z'),
          fechaHoraEntrega: new Date('2026-06-28T10:30:00.000Z'),
          fechaHoraRecepcion: null,
          fotoEntrega: '/uploads/vehiculos/yaris.svg',
          fotoRecepcion: null,
          usuarioId: usuarioEjecutivo.id,
          vehiculoId: 2,
        },
        {
          rutCliente: '15.123.456-7',
          nombreCliente: 'Pedro Santander',
          fechaInicio: new Date('2026-06-15T09:00:00.000Z'),
          fechaTermino: new Date('2026-06-20T09:00:00.000Z'),
          fechaHoraEntrega: new Date('2026-06-15T09:30:00.000Z'),
          fechaHoraRecepcion: new Date('2026-06-20T18:10:00.000Z'),
          fotoEntrega: '/uploads/vehiculos/tucson.svg',
          fotoRecepcion: '/uploads/vehiculos/tucson.svg',
          usuarioId: usuarioEjecutivo.id,
          vehiculoId: 1,
        },
      ],
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })