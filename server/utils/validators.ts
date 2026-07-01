export const normalizeRut = (rut: string) => rut.replace(/\./g, '').replace(/-/g, '').toUpperCase().trim()

export const normalizePatente = (patente: string) => patente.toUpperCase().replace(/[^A-Z0-9]/g, '').trim()

export const isValidPatente = (patente: string) => {
  const clean = normalizePatente(patente)

  // Formato obligatorio: AB-CD-12 (4 letras y 2 dígitos).
  return /^[A-Z]{4}\d{2}$/.test(clean)
}

export const isValidRut = (rut: string) => {
  const clean = normalizeRut(rut)

  // Valida solo estructura de RUT: 7-8 digitos mas DV (0-9 o K).
  return /^\d{7,8}[0-9K]$/.test(clean)
}

export const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
