import LegalPage from "./LegalPage"
import { site } from "../config/site"

// Texto pendiente de revisión legal. No nombra una razón social porque FebaCode
// aún no está constituida: se identifica como nombre comercial.
const sections = [
  {
    title: "Quién es el responsable",
    paragraphs: [
      `${site.name} (nombre comercial) es responsable del tratamiento de los datos personales que nos compartas. Puedes contactarnos en ${site.email} o al ${site.phoneDisplay}, en ${site.city}.`,
    ],
  },
  {
    title: "Qué datos recabamos",
    paragraphs: [
      "Este sitio no tiene formularios ni cuentas de usuario. Solo tratamos los datos que tú decidas compartirnos al escribirnos por WhatsApp o por correo, por ejemplo tu nombre, tu teléfono o correo y la descripción de tu proyecto.",
      "Además, el sitio usa Vercel Speed Insights para medir su rendimiento (por ejemplo, tiempos de carga). Para conocer qué datos técnicos recopila esa herramienta, consulta el aviso de privacidad de Vercel.",
    ],
  },
  {
    title: "Para qué usamos tus datos",
    paragraphs: ["Usamos los datos que nos compartes únicamente para:"],
    list: [
      "Responder tus mensajes y dudas.",
      "Prepararte una cotización de tu proyecto.",
      "Darte seguimiento si decides trabajar con nosotros.",
    ],
  },
  {
    title: "Con quién compartimos tus datos",
    paragraphs: [
      "Los mensajes que envías por WhatsApp o correo pasan por esas plataformas, que tienen sus propios avisos de privacidad. Podemos compartir datos con autoridades cuando la ley lo exija.",
    ],
  },
  {
    title: "Cookies y almacenamiento local",
    paragraphs: [
      "No usamos cookies de publicidad ni de seguimiento. El sitio guarda en tu navegador una sola preferencia, la del modo claro u oscuro, y no se envía a ningún servidor.",
    ],
  },
  {
    title: "Tus derechos",
    paragraphs: [
      `Puedes solicitar el acceso, la rectificación, la cancelación o la oposición al tratamiento de tus datos (derechos ARCO) escribiendo a ${site.email}. Responderemos a tu solicitud por el mismo medio.`,
    ],
  },
  {
    title: "Cambios a este aviso",
    paragraphs: [
      "Si este aviso cambia, publicaremos la versión actualizada en esta página con su nueva fecha.",
    ],
  },
]

const PrivacyPolicyPage = () => (
  <LegalPage
    title="Aviso de Privacidad"
    updated="15 de octubre de 2026"
    intro="Este aviso explica cómo tratamos los datos personales que nos compartes al contactarnos."
    sections={sections}
  />
)

export default PrivacyPolicyPage
