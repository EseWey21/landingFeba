// Preguntas frecuentes. Una pregunta con `needs` solo se publica si esa afirmación
// está confirmada en claims.js. Las respuestas públicas no prometen plazos ni
// propiedad del código mientras no estén confirmados.
import { isConfirmed, claimText } from "./claims"

const all = [
  {
    q: "¿Cuánto cuesta una página o un sistema?",
    a: `Una landing desde $3,500 MXN; sistemas e inteligencia artificial desde $7,000 MXN. El precio exacto depende de tu alcance y te lo damos claro por WhatsApp. ${claimText("sin-costos-ocultos") ?? ""}`.trim(),
  },
  {
    q: "¿En cuánto tiempo entregan?",
    a: "Depende del alcance. Lo definimos contigo en la cotización.",
  },
  {
    q: "¿Qué pasa si necesito cambios después?",
    a: "Puedes pedirlos cuando quieras. Los cambios y el mantenimiento se cotizan como acompañamiento mensual o por proyecto.",
  },
  {
    q: "¿Cómo sé si mi negocio necesita IA o un sistema a medida?",
    a: "Si repites tareas a mano (responder lo mismo, capturar datos, llevar inventario), probablemente sí. Cuéntanos cómo trabajas y te recomendamos lo mínimo que necesitas.",
  },
  {
    q: "¿El sistema es mío o pago una renta eterna?",
    a: "[CONFIRMAR] Respuesta pendiente de aprobación.",
    needs: "codigo-del-cliente",
  },
]

export const faqItems = all.filter((item) => !item.needs || isConfirmed(item.needs))
