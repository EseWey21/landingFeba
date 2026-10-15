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
  default: "Hola, deseo cotizar un desarrollo de software.",
}

export const waLink = (contexto = "default") => {
  const text = WHATSAPP_MESSAGES[contexto] ?? WHATSAPP_MESSAGES.default
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
