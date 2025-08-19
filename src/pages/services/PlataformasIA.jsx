"use client"

import { useEffect } from "react"
import { Check, X } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import "../../styles/ServicePage.css"
import plataforma from "../../assets/plataformaIA.png"

const PlataformasIA = () => {
  useEffect(() => {
    document.title = "Plataformas con IA | FebaCode"
    window.scrollTo(0, 0)
  }, [])

  const packages = [
    {
      id: 1,
      name: "Escencial",
      price: "$7,000 – $12,000 MXN",
      description: "Ideal para empresas que quieren iniciar su transformación digital con IA o automatización básica",
      features: [
        "Asistente inteligente básico (chatbot para sitio web, WhatsApp o Facebook, con respuestas automáticas a preguntas frecuentes y formulario de contacto).",
        "Scraping automatizado sencillo: extracción periódica de datos públicos (productos, noticias, directorios, publicaciones, etc.) hacia un archivo Excel/CSV o Google Sheets.",
        "Integración con múltiples canales",
        "Soporte técnico y capacitación inicial.",
      ],
      notIncluded: ["Análisis predictivo completo", "Integración con Big Data", "App móvil nativa"],
      popular: false,
    },
    {
      id: 2,
      name: "Profesional",
      price: "$16,000 – $25,000 MXN",
      description: "Para empresas que buscan automatizar procesos y comenzar a explotar sus datos.",
      features: [
        "Asistente inteligente avanzado: chatbot multi-canal, integración con bases de datos o sistemas internos, formularios dinámicos, registro y seguimiento de usuarios.",
        "•Scraping inteligente avanzado: extracción estructurada de información de múltiples fuentes, limpieza y clasificación automática, actualización periódica y alertas personalizadas.",
        "Panel básico de visualización de datos y reportes.",
        "Integración con email o notificaciones.",
        "Soporte extendido y actualización mensual.",
      ],
      notIncluded: ["IA avanzada", "Integración con APIs", "Análisis predictivo", "App móvil"],
    },
    {
      id: 3,
      name: "Premium",
      price: "$35,000 – $60,000 MXN",
      description: "Para proyectos de innovación, empresas grandes o necesidades específicas de alto impacto.",
      features: [
        "Levantamiento y análisis profundo de requerimientos.",
        "Desarrollo de soluciones IA personalizadas: scraping masivo, asistentes hiperpersonalizados, modelos de análisis y predicción avanzados, automatización integral de procesos, integración con infraestructura existente, procesamiento de imágenes, audio o video, etc.",
        "Paneles de administración, control de acceso, reportes avanzados",
        "Integración con apps móviles/web si se requiere.",
        "Soporte dedicado, escalabilidad y roadmap evolutivo.",
      ],
      notIncluded: [],
    },
  ]

  const comparisonFeatures = [
    "Tipo de IA",
    "Procesamiento de lenguaje",
    "Integración canales",
    "Dashboard analítico",
    "APIs",
    "Machine Learning",
    "App móvil",
    "Soporte técnico",
    "Consultoría",
  ]

  return (
    <div className="service-page">
      <Navbar />

      <main className="service-main">
        <div className="service-hero-with-bg" style={{ backgroundImage: `url(${plataforma})` }}>
          <div className="hero-overlay"></div>
          <div className="container">
            <motion.div
              className="service-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="service-title">Plataformas con IA</h1>
              <p className="service-description">
                Desarrollamos soluciones inteligentes que aprovechan el poder de la inteligencia artificial. Desde
                chatbots avanzados hasta sistemas de análisis predictivo, creamos plataformas que transforman la manera
                en que tu negocio opera.
              </p>
              <button className="hero-cta-button">Solicitar Cotización</button>
            </motion.div>
          </div>
        </div>

        <div className="comparison-section">
          <div className="container">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Paquetes
            </motion.h2>
          </div>
        </div>

        <div className="packages-section">
          <div className="container">
            <div className="packages-grid">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  className={`package-card ${pkg.popular ? "popular" : ""}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {pkg.popular && <div className="popular-badge">Más Popular</div>}

                  <div className="package-header">
                    <h3 className="package-name">{pkg.name}</h3>
                    <div className="package-price">{pkg.price}</div>
                    <p className="package-description">{pkg.description}</p>
                  </div>

                  <div className="package-features">
                    <h4>Incluye:</h4>
                    <ul className="features-list">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="feature-item included">
                          <Check size={16} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {pkg.notIncluded.length > 0 && (
                      <>
                        <h4>No incluye:</h4>
                        <ul className="features-list">
                          {pkg.notIncluded.map((feature, idx) => (
                            <li key={idx} className="feature-item not-included">
                              <X size={16} />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>

                  <button className="package-button">Solicitar cotización</button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PlataformasIA
