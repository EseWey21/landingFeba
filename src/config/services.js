// Contenido de las subpáginas de servicio. Lo que se describe en "incluye" corresponde
// al primer paquete de cada pilar (el que respalda el precio "desde") según el catálogo
// 2026; "grows" resume los paquetes siguientes sin publicar sus precios. Los montos
// salen de pricing.js. No se prometen plazos, propiedad del código ni integraciones
// que no estén en el catálogo.
import { fromAmount } from "./pricing"

export const services = {
  "desarrollo-web": {
    pillar: "web",
    wa: "web",
    seoTitle: "Desarrollo web a la medida para negocios | FebaCode",
    seoDescription: `Páginas web, landings y tiendas en línea para negocios y PyMEs de México, con WhatsApp integrado. Landing desde ${fromAmount("web")}. Cotiza con FebaCode.`,
    h1: "Tu negocio en internet, listo para recibir clientes.",
    lead: "Páginas y tiendas en línea claras y con WhatsApp integrado, hechas a la medida de tu marca.",
    includes: [
      "Landing page profesional de una sola sección, con hasta 4 bloques informativos",
      "Formulario de contacto y botón directo a WhatsApp",
      "Menú digital QR básico (si aplica, para restaurantes y cafeterías)",
      "Diseño responsivo con la identidad visual de tu marca",
      "Soporte técnico por 1 mes",
    ],
    grows: [
      "Sitio de hasta 5 secciones con SEO básico y Google Analytics",
      "Panel sencillo para editar tus textos, imágenes o precios",
      "Tienda en línea o reservaciones, con pasarela de pagos (Stripe, PayPal o MercadoPago)",
      "Blog, SEO técnico avanzado y desarrollo a la medida para empresas",
    ],
    forWho: "Emprendedores, profesionistas, restaurantes y negocios pequeños que quieren estar en internet sin complicarse.",
    extras: ["Posicionamiento SEO continuo", "Campañas de marketing digital"],
  },
  "sistemas-empresariales": {
    pillar: "sistemas",
    wa: "sistemas",
    seoTitle: "Sistemas empresariales: punto de venta e inventario | FebaCode",
    seoDescription: `Sistemas de punto de venta, inventario y reportes a la medida para negocios y PyMEs de México. Desde ${fromAmount("sistemas")}. Cotiza con FebaCode.`,
    h1: "Ventas, inventario y reportes en un solo lugar.",
    lead: "Sistemas administrativos y de gestión que se adaptan a cómo trabaja tu negocio, no al revés.",
    includes: [
      "Punto de venta básico o registro de ingresos y ventas, con corte de caja diario",
      "Inventario sencillo: altas, bajas, movimientos y alertas de stock mínimo",
      "Acceso para 1 a 2 usuarios",
      "Reportes básicos de ventas e inventario, con exportación a Excel o Google Sheets",
      "Capacitación inicial y soporte técnico por 1 mes",
    ],
    grows: [
      "Punto de venta avanzado, multi-almacén y control de ingresos y egresos",
      "CRM comercial y roles y permisos para varios usuarios",
      "Agendamiento, facturación CFDI 4.0 y dashboards directivos",
      "Migración inicial de datos y software a la medida (ERP)",
    ],
    forWho: "Negocios que hoy llevan ventas e inventario en cuadernos, hojas de cálculo o varias herramientas separadas.",
    extras: [
      "Módulo de facturación CFDI 4.0 (para los primeros paquetes)",
      "Limpieza y migración de bases de datos históricas complejas",
    ],
  },
  "plataformas-con-ia": {
    pillar: "ia",
    wa: "ia",
    seoTitle: "Plataformas con IA: chatbots y automatización | FebaCode",
    seoDescription: `Asistentes con inteligencia artificial y automatización para negocios de México: WhatsApp, web y redes. Desde ${fromAmount("ia")}. Cotiza con FebaCode.`,
    h1: "Atiende y automatiza lo repetitivo con inteligencia artificial.",
    lead: "Asistentes y automatizaciones que responden, recopilan datos y te quitan tareas repetitivas.",
    includes: [
      "Asistente conversacional con IA en 1 canal (WhatsApp, Facebook o Instagram, o tu sitio web), entrenado con la información de tu negocio",
      "Respuestas a preguntas frecuentes y calificación de clientes",
      "Envío automático de datos de prospectos o pedidos a Google Sheets o Excel",
      "Opción de extracción sencilla de datos públicos (1 fuente) en lugar del asistente",
      "Capacitación inicial y soporte por 1 mes",
    ],
    grows: [
      "Agente multicanal con consulta de inventario y precios, citas y cotizaciones en PDF",
      "Automatización de hasta 3 flujos entre WhatsApp, correo, CRM o base de datos",
      "Lectura de documentos y monitoreo de varias fuentes con alertas",
      "Cazador de precios, analítica y predicción, y proyectos de IA a la medida",
    ],
    forWho: "Negocios que contestan lo mismo todo el día o que pierden tiempo copiando información de un lugar a otro.",
    extras: ["Mantenimiento de extracción de datos y flujos de IA después del periodo inicial"],
  },
  "negocios-locales": {
    pillar: "local",
    wa: "local",
    seoTitle: "Soluciones digitales para negocios locales | FebaCode",
    seoDescription: `Tecnología a la medida para restaurantes, clínicas, consultorios, gimnasios, estéticas y comercios de México. Desde ${fromAmount("local")}. Cotiza con FebaCode.`,
    h1: "Algo hecho a la medida de tu negocio.",
    lead: "Si tu restaurante, clínica, gimnasio, estética o tienda necesita un salto digital concreto, lo diseñamos contigo.",
    includes: [
      "Sitio web local, optimizado para búsquedas en tu zona, con tu ficha de Google Maps integrada",
      "Restaurantes y cafeterías: menú digital QR con pedidos estructurados directo a WhatsApp",
      "Clínicas, gimnasios y servicios: agenda de citas en línea con recordatorios por WhatsApp",
      "Soporte técnico por 1 mes",
    ],
    grows: [
      "Sistema operativo para tu giro: punto de venta y comandas para restaurantes",
      "Agenda médica y expediente clínico digital para clínicas y consultorios",
      "Control de membresías y asistencias para gimnasios",
      "Varias sucursales con panel centralizado, facturación CFDI 4.0 y programa de lealtad",
    ],
    forWho: "Cafeterías, restaurantes, consultorios, estéticas, gimnasios y comercios que quieren digitalizar su atención de forma sencilla.",
    extras: [],
  },
}
