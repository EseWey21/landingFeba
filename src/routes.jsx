import Home from "./pages/Home"
import ServicePage from "./pages/ServicePage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import TermsPage from "./pages/TermsPage"
import NotFound from "./pages/NotFound"
import { services } from "./config/services"
import { site } from "./config/site"
import { faqItems } from "./config/faq"
import { fromLabel } from "./config/pricing"

const HOME_TITLE = "FebaCode | Software, sitios web e IA para negocios en México"
const HOME_DESCRIPTION =
  "FebaCode crea software, sitios web y soluciones con inteligencia artificial a la medida para negocios y PyMEs de México. Landing desde $3,500 MXN. Cotiza por WhatsApp."

// JSON-LD: solo datos verdaderos. Sin calificaciones, reseñas ni premios.
const organization = () => ({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  logo: `${site.url}/icon-512.png`,
  email: site.email,
  telephone: "+525644129078",
  areaServed: "MX",
  address: { "@type": "PostalAddress", addressLocality: "Ciudad de México", addressCountry: "MX" },
  sameAs: Object.values(site.social),
})

const faqLd = () => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((i) => ({
    "@type": "Question",
    name: i.q,
    acceptedAnswer: { "@type": "Answer", text: i.a },
  })),
})

const serviceLd = (slug) => {
  const s = services[slug]
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.h1,
    description: s.seoDescription,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: "MX",
    url: `${site.url}/servicios/${slug}`,
    ...(fromLabel(s.pillar).startsWith("Desde") ? {} : {}),
  }
}

// Fuente única de rutas: la usan el router, el prerender y el sitemap.
export const routes = [
  {
    path: "/",
    element: <Home />,
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    jsonLd: () => [organization(), faqLd()],
  },
  ...Object.keys(services).map((slug) => ({
    path: `/servicios/${slug}`,
    element: <ServicePage slug={slug} />,
    title: services[slug].seoTitle,
    description: services[slug].seoDescription,
    jsonLd: () => [serviceLd(slug)],
  })),
  {
    path: "/politica-de-privacidad",
    element: <PrivacyPolicyPage />,
    title: "Aviso de Privacidad | FebaCode",
    description: "Cómo trata FebaCode los datos personales que compartes al contactarnos.",
  },
  {
    path: "/terminos-y-condiciones",
    element: <TermsPage />,
    title: "Términos y Condiciones | FebaCode",
    description: "Términos de uso del sitio web de FebaCode.",
  },
]

export const notFoundRoute = {
  path: "*",
  element: <NotFound />,
  title: "Página no encontrada | FebaCode",
  description: "La página que buscas no existe en febacode.com.",
}
