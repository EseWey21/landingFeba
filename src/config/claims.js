// Afirmaciones comerciales. Solo se publican las que tienen `confirmed: true`.
// Para activar una, el dueño la confirma y se cambia aquí; nada más en el sitio
// debe afirmarla por su cuenta.

export const claims = [
  { id: "sin-costos-ocultos", text: "Sin costos ocultos.", confirmed: true },
  { id: "codigo-del-cliente", text: "El código es 100 % tuyo.", confirmed: false },
  { id: "sin-licencias", text: "Sin licencias mensuales obligatorias.", confirmed: false },
  { id: "tiempos-de-entrega", text: "Tiempos de entrega por tipo de proyecto.", confirmed: false },
  { id: "servidores-propios", text: "Servidores propios.", confirmed: false },
  { id: "integraciones-extra", text: "Integraciones con Odoo, CONTPAQi, Google Cloud y otras.", confirmed: false },
]

export const isConfirmed = (id) => claims.some((c) => c.id === id && c.confirmed)

export const claimText = (id) => claims.find((c) => c.id === id && c.confirmed)?.text ?? null
