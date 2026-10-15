// Fuente única de verdad de los datos de contacto y redes de FebaCode.
// Si cambia el teléfono o el correo, se cambia aquí y en ningún otro lugar.

const WHATSAPP_NUMBER = "525644129078"

export const site = {
  name: "FebaCode",
  url: "https://www.febacode.com",
  tagline: "Soluciones que conectan.",
  email: "contacto@febacode.com",
  phoneDisplay: "+52 56 4412 9078",
  phoneHref: "tel:+525644129078",
  city: "Ciudad de México, México",
  social: {
    facebook: "https://www.facebook.com/febacode",
    instagram: "https://www.instagram.com/febacode/",
    tiktok: "https://www.tiktok.com/@febacode",
  },
}

// Mensaje precargado por punto de decisión, sin datos personales,
// para saber desde qué sección llegó cada conversación.
const WHATSAPP_MESSAGES = {
  hero: "Hola, quiero cotizar un proyecto con FebaCode (desde el inicio del sitio).",
  nav: "Hola, quiero cotizar un proyecto con FebaCode (desde el menú).",
  cierre: "Hola, quiero cotizar un proyecto con FebaCode (desde el cierre del sitio).",
  servicios: "Hola, quiero contarles mi caso (desde la sección de servicios).",
  precios: "Hola, quiero cotizar mi proyecto (desde la sección de precios).",
  flotante: "Hola, quiero cotizar un proyecto con FebaCode (desde el botón de WhatsApp).",
  web: "Hola, me interesa un sitio web (desde la página de Desarrollo Web).",
  sistemas: "Hola, me interesa un sistema (desde la página de Sistemas Empresariales).",
  ia: "Hola, me interesa una solución con IA (desde la página de Plataformas con IA).",
  local: "Hola, tengo un negocio local y quiero cotizar (desde la página de Negocios Locales).",
  default: "Hola, deseo cotizar un desarrollo de software.",
}

export const waLink = (contexto = "default") => {
  const text = WHATSAPP_MESSAGES[contexto] ?? WHATSAPP_MESSAGES.default
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
