// Catálogo oficial de precios (fuente: Precios.docx). Montos en MXN, "precio sugerido":
// varían según el alcance. Solo se publican los niveles con `published: true`;
// hoy son únicamente las entradas "desde" de cada pilar.

export const PRICE_DISCLAIMER = "Precio de referencia en MXN; se afina con tu alcance."

export const pillars = {
  web: {
    id: "web",
    name: "Desarrollo Web",
    from: 3500,
    tiers: [
      { id: "esencial", name: "Esencial", min: 3500, max: 5000, support: "1 mes", published: true },
      { id: "profesional", name: "Profesional", min: 6500, max: 8500, support: "2 meses", published: false },
      { id: "empresarial", name: "Empresarial", min: 13000, max: 18000, support: "3 a 6 meses", published: false },
      { id: "elite", name: "Ultra / Élite", quote: true, published: false },
    ],
  },
  sistemas: {
    id: "sistemas",
    name: "Sistemas Empresariales",
    from: 7000,
    tiers: [
      { id: "control-basico", name: "Control Básico", min: 7000, max: 12000, published: true },
      { id: "gestion", name: "Gestión Empresarial", min: 16000, max: 24000, published: false },
      { id: "integral", name: "Solución Integral", min: 28000, max: 45000, published: false },
      { id: "medida", name: "A la medida", fromOnly: 50000, published: false },
    ],
  },
  ia: {
    id: "ia",
    name: "Plataformas con IA",
    from: 7000,
    tiers: [
      { id: "starter", name: "Starter IA", min: 7000, max: 12000, published: true },
      { id: "analitica", name: "Analítica y Automatización IA", min: 16000, max: 25000, published: false },
      { id: "empresarial", name: "IA Empresarial", min: 35000, max: 60000, published: false },
      { id: "medida", name: "Plataforma de IA a la medida", fromOnly: 65000, published: false },
    ],
  },
  local: {
    id: "local",
    name: "Soluciones para Negocios Locales",
    from: null, // sin precio en el catálogo: cotización personalizada
    tiers: [],
  },
}

const formatter = new Intl.NumberFormat("es-MX")

export const formatMXN = (n) => `$${formatter.format(n)}`

// "desde $3,500 MXN" o "Cotización personalizada"
export const fromLabel = (pillarId) => {
  const { from } = pillars[pillarId]
  return from ? `Desde ${formatMXN(from)} MXN` : "Cotización personalizada"
}

// Costos recurrentes que NO están incluidos: se declaran para que "sin costos
// ocultos" sea cierto. Los montos los define el equipo; aquí no se inventan.
export const notIncluded = [
  "Dominio y hosting",
  "Uso de WhatsApp Business y de la API de IA (se pagan a cada plataforma según consumo)",
  "Mantenimiento mensual y mejoras posteriores",
]
