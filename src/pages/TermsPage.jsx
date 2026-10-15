import LegalPage from "./LegalPage"
import { site } from "../config/site"

// Texto pendiente de revisión legal.
const sections = [
  {
    title: "Uso del sitio",
    paragraphs: [
      `Este sitio presenta los servicios de ${site.name}. Al usarlo aceptas estos términos. Si no estás de acuerdo, te pedimos no utilizarlo.`,
    ],
  },
  {
    title: "Información y precios",
    paragraphs: [
      "La información del sitio es de carácter general. Los precios publicados son de referencia, en pesos mexicanos, y se afinan según el alcance de cada proyecto. Una cotización formal se acuerda por escrito antes de iniciar.",
    ],
  },
  {
    title: "Contratación de servicios",
    paragraphs: [
      "Los servicios se contratan mediante una cotización y un acuerdo entre las partes, donde se definen alcance, costos y condiciones. Lo publicado en este sitio no constituye por sí solo una oferta vinculante.",
    ],
  },
  {
    title: "Propiedad intelectual del sitio",
    paragraphs: [
      `El nombre, el logotipo y el contenido de este sitio pertenecen a ${site.name}. No se permite copiarlos ni usarlos con fines comerciales sin autorización por escrito.`,
    ],
  },
  {
    title: "Enlaces a terceros",
    paragraphs: [
      "El sitio enlaza a plataformas externas como WhatsApp, Instagram, TikTok y Facebook. No controlamos su contenido ni sus políticas.",
    ],
  },
  {
    title: "Limitación de responsabilidad",
    paragraphs: [
      "Hacemos lo posible por mantener el sitio disponible y la información al día, pero no garantizamos que esté libre de errores ni disponible en todo momento.",
    ],
  },
  {
    title: "Contacto y cambios",
    paragraphs: [
      `Para cualquier duda sobre estos términos escríbenos a ${site.email}. Podemos actualizarlos y publicaremos la versión vigente en esta página.`,
    ],
  },
]

const TermsPage = () => (
  <LegalPage
    title="Términos y Condiciones"
    updated="15 de octubre de 2026"
    intro="Estos términos regulan el uso del sitio web de FebaCode."
    sections={sections}
  />
)

export default TermsPage
