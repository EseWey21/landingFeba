// Preguntas frecuentes PUBLICADAS. Las que dependen de una afirmación sin confirmar
// están en pendientes.js y no se importan aquí. Las respuestas no prometen plazos
// ni propiedad del código.
import { claimText } from "./claims"
import { fromAmount } from "./pricing"

export const faqItems = [
  {
    q: "¿Cuánto cuesta una página o un sistema?",
    a: `Una landing desde ${fromAmount("web")}; negocios locales desde ${fromAmount("local")}; sistemas desde ${fromAmount("sistemas")} e inteligencia artificial desde ${fromAmount("ia")}. El precio exacto depende de tu alcance y te lo damos claro por WhatsApp. ${claimText("sin-costos-ocultos") ?? ""}`.trim(),
  },
  {
    q: "¿En cuánto tiempo entregan?",
    a: "Depende del alcance. Lo definimos contigo en la cotización.",
  },
  {
    q: "¿Qué pasa si necesito cambios después?",
    a: "Los cambios y el mantenimiento se cotizan como acompañamiento mensual o por proyecto.",
  },
  {
    q: "¿Cómo sé si mi negocio necesita IA o un sistema a medida?",
    a: "Si repites tareas a mano (responder lo mismo, capturar datos, llevar inventario), probablemente sí. Cuéntanos cómo trabajas y te recomendamos lo mínimo que necesitas.",
  },
]
