// Precios que SÍ se publican: solo la entrada "desde" de cada pilar (fuente:
// Precios.docx, mínimo del primer nivel). El catálogo completo está en
// catalogo.js y no se importa aquí, para que no viaje en el JavaScript público.

export const PRICE_DISCLAIMER = "Precio de referencia en MXN; se afina con tu alcance."

export const pillars = {
  web: { id: "web", name: "Desarrollo Web", from: 3500 },
  sistemas: { id: "sistemas", name: "Sistemas Empresariales", from: 7000 },
  ia: { id: "ia", name: "Plataformas con IA", from: 7000 },
  local: { id: "local", name: "Soluciones para Negocios Locales", from: null }, // cotización personalizada
}

const formatter = new Intl.NumberFormat("es-MX")

export const formatMXN = (n) => `$${formatter.format(n)}`

// "Desde $3,500 MXN" o "Cotización personalizada"
export const fromLabel = (pillarId) => {
  const { from } = pillars[pillarId]
  return from ? `Desde ${formatMXN(from)} MXN` : "Cotización personalizada"
}

export const hasFromPrice = (pillarId) => pillars[pillarId].from !== null

// Lo que no está incluido en el precio, para que "sin costos ocultos" sea cierto.
// "Hosting y respaldo" y "mantenimiento mensual" aparecen como extras en Precios.docx.
// Que el consumo de WhatsApp y de IA se paga aparte lo confirmó el dueño.
// El dominio NO se cobra, por eso no aparece. Los montos no se publican.
export const notIncluded = [
  { id: "hosting", text: "Hosting y respaldo", pillars: ["web", "sistemas", "ia", "local"] },
  { id: "mantenimiento", text: "Mantenimiento mensual", pillars: ["web", "sistemas", "ia", "local"] },
  {
    id: "consumo",
    text: "Uso de WhatsApp Business y de las APIs de IA (se pagan según el consumo)",
    pillars: ["ia", "local"],
  },
]

export const notIncludedFor = (pillarId) => notIncluded.filter((n) => n.pillars.includes(pillarId))
