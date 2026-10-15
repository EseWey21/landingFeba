// Contenido NO aprobado todavía. El sitio no importa este archivo: lo lee solo el
// script de build (scripts/prerender.mjs) para fallar si algo de esto llega al sitio.
// Para publicar un elemento, el dueño lo confirma y se mueve a claims.js o faq.js.

export const pendingClaims = [
  { id: "codigo-del-cliente", text: "El código es 100 % tuyo." },
  { id: "sin-licencias", text: "Sin licencias mensuales obligatorias." },
  { id: "tiempos-de-entrega", text: "Tiempos de entrega por tipo de proyecto." },
  { id: "servidores-propios", text: "Servidores propios." },
  { id: "integraciones-extra", text: "Integraciones con Odoo, CONTPAQi, Google Cloud y otras." },
  // Del catálogo 2026 (sección de condiciones generales): aún sin aprobación para el sitio
  { id: "sin-rentas-por-usuario", text: "sin rentas forzosas por cada usuario" },
  { id: "propiedad-de-tu-solucion", text: "Propiedad de tu solución" },
  { id: "atencion-24-7", text: "24/7" },
  { id: "ventaja-vs-agencias", text: "ventaja de 30% a 50%" },
  { id: "garantia-inicial", text: "1 a 3 meses de garantía" },
]

// Preguntas frecuentes que dependen de una afirmación pendiente.
export const pendingFaq = [
  {
    q: "¿El sistema es mío o pago una renta eterna?",
    a: "[CONFIRMAR] Respuesta pendiente de aprobación.",
    needs: "codigo-del-cliente",
  },
]
