// Catálogo completo de precios (fuente: Catálogo de Paquetes y Precios 2026 ajustado,
// "-20% - 1"). MXN, "precio sugerido": varía según el alcance.
//
// IMPORTANTE: este archivo NO lo importa el sitio, para que los niveles y montos que
// aún no se publican no viajen en el JavaScript público. Lo lee solo el script de build
// (scripts/prerender.mjs) para comprobar que ningún monto oculto llegue al sitio.
// Para publicar un nivel, se agrega su dato a src/config/pricing.js y aquí se marca
// `published: true`.

export const catalog = {
  web: {
    name: "Desarrollo Web",
    tiers: [
      { id: "esencial", name: "Esencial", min: 3599, max: 5999, published: true },
      { id: "profesional", name: "Profesional", min: 8399, max: 13199, published: false },
      { id: "empresarial", name: "Empresarial", min: 17599, max: 30399, published: false },
      { id: "custom", name: "Web Custom / Corporativo", fromOnly: 35999, published: false },
    ],
    extras: [{ id: "acompanamiento-web", name: "Acompañamiento mensual Web", min: 639, max: 1759 }],
  },
  sistemas: {
    name: "Sistemas Empresariales",
    tiers: [
      { id: "control-basico", name: "Control Básico", min: 7599, max: 11999, published: true },
      { id: "gestion", name: "Gestión Empresarial", min: 17599, max: 27999, published: false },
      { id: "integral", name: "Solución Integral PyME", min: 33599, max: 54399, published: false },
      { id: "medida", name: "Software Empresarial / ERP a la medida", fromOnly: 63999, published: false },
    ],
    extras: [
      { id: "cfdi", name: "Módulo de Facturación CFDI 4.0", min: 9599, max: 14399 },
      { id: "migracion", name: "Limpieza y migración de bases de datos", min: 3999, max: 11999 },
      { id: "poliza-sistema", name: "Póliza de acompañamiento y soporte", min: 1439, max: 3599 },
    ],
  },
  ia: {
    name: "Plataformas con IA",
    tiers: [
      { id: "starter", name: "Starter IA", min: 6799, max: 11599, published: true },
      { id: "analitica", name: "Analítica y Automatización IA", min: 17599, max: 28799, published: false },
      { id: "empresarial", name: "IA Empresarial / Cazadores de Precios", min: 38399, max: 67999, published: false },
      { id: "medida", name: "Ecosistema de IA a la medida", fromOnly: 75999, published: false },
    ],
    extras: [{ id: "poliza-ia", name: "Póliza de mantenimiento de scraping y flujos IA", min: 1999, max: 4799 }],
  },
  local: {
    name: "Soluciones para Negocios Locales",
    tiers: [
      { id: "impulso", name: "Impulso Local Digital", min: 4399, max: 7599, published: true },
      { id: "sistema-giro", name: "Sistema Operativo de Giro", min: 14399, max: 25599, published: false },
      { id: "multi-sucursal", name: "Franquicia / Multi-Sucursal", min: 33599, max: 59999, published: false },
    ],
    extras: [],
  },
}
