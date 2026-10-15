// Precios que SÍ se publican: solo la entrada "desde" de cada pilar (fuente: Catálogo
// de Paquetes y Precios 2026 ajustado, mínimo del primer paquete). El catálogo
// completo está en catalogo.js y no se importa aquí, para que no viaje en el
// JavaScript público.

export const PRICE_DISCLAIMER = "Precio de referencia en MXN; se afina con tu alcance."

export const pillars = {
  web: { id: "web", name: "Desarrollo Web", from: 3599 },
  sistemas: { id: "sistemas", name: "Sistemas Empresariales", from: 7599 },
  ia: { id: "ia", name: "Plataformas con IA", from: 6799 },
  local: { id: "local", name: "Soluciones para Negocios Locales", from: 4399 },
}

const formatter = new Intl.NumberFormat("es-MX")

export const formatMXN = (n) => `$${formatter.format(n)}`

// "$3,599 MXN" (sin la palabra "desde"), para frases y descripciones
export const fromAmount = (pillarId) => `${formatMXN(pillars[pillarId].from)} MXN`

// "Desde $3,599 MXN" o "Cotización personalizada" si un pilar no tuviera precio
export const fromLabel = (pillarId) => {
  const { from } = pillars[pillarId]
  return from ? `Desde ${formatMXN(from)} MXN` : "Cotización personalizada"
}

export const hasFromPrice = (pillarId) => pillars[pillarId].from !== null

// Lo que no está incluido en el precio, para que "sin costos ocultos" sea cierto.
// Fuente: sección "Condiciones Generales y Transparencia" del catálogo 2026. Los
// montos (iguala mensual, add-ons) no se publican.
export const notIncluded = [
  {
    id: "dominio-hosting",
    text: "Dominio y hosting (a nombre de tu negocio o dentro del acompañamiento mensual)",
    pillars: ["web", "sistemas", "ia", "local"],
  },
  {
    id: "acompanamiento",
    text: "Acompañamiento mensual opcional, después del soporte inicial",
    pillars: ["web", "sistemas", "ia", "local"],
  },
  {
    id: "consumo",
    text: "Consumo de WhatsApp Business y de las APIs de IA (se paga directo al proveedor según el uso)",
    pillars: ["ia", "local"],
  },
]

export const notIncludedFor = (pillarId) => notIncluded.filter((n) => n.pillars.includes(pillarId))
