// Catálogo completo de precios (fuente: Precios.docx). MXN, "precio sugerido": varía
// según el alcance.
//
// IMPORTANTE: este archivo NO lo importa el sitio, para que los niveles que aún no
// se publican no viajen en el JavaScript público. Lo lee solo el script de build
// (scripts/prerender.mjs) para comprobar que ningún monto oculto llegue al sitio.
// Para publicar un nivel, se agrega su dato a src/config/pricing.js y aquí se marca
// `published: true`.

export const catalog = {
  web: {
    name: "Desarrollo Web",
    tiers: [
      { id: "esencial", name: "Esencial", min: 3500, max: 5000, published: true },
      { id: "profesional", name: "Profesional", min: 6500, max: 8500, published: false },
      { id: "empresarial", name: "Empresarial", min: 13000, max: 18000, published: false },
      { id: "elite", name: "Ultra / Élite", quote: true, published: false },
    ],
  },
  sistemas: {
    name: "Sistemas Empresariales",
    tiers: [
      { id: "control-basico", name: "Control Básico", min: 7000, max: 12000, published: true },
      { id: "gestion", name: "Gestión Empresarial", min: 16000, max: 24000, published: false },
      { id: "integral", name: "Solución Integral", min: 28000, max: 45000, published: false },
      { id: "medida", name: "A la medida", fromOnly: 50000, published: false },
    ],
  },
  ia: {
    name: "Plataformas con IA",
    tiers: [
      { id: "starter", name: "Starter IA", min: 7000, max: 12000, published: true },
      { id: "analitica", name: "Analítica y Automatización IA", min: 16000, max: 25000, published: false },
      { id: "empresarial", name: "IA Empresarial", min: 35000, max: 60000, published: false },
      { id: "medida", name: "Plataforma de IA a la medida", fromOnly: 65000, published: false },
    ],
  },
  local: { name: "Soluciones para Negocios Locales", tiers: [] }, // cotización personalizada
}
