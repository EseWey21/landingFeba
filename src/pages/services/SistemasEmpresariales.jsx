"use client"

import { useEffect } from "react"
import { Check, X } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import "../../styles/ServicePage.css"
import sistema from "../../assets/sistemaEmpresa.png"

const SistemasEmpresariales = () => {
  useEffect(() => {
    document.title = "Plataformas con IA | FebaCode"
    window.scrollTo(0, 0)
  }, [])

  const packages = [
    {
      id: 1,
      name: "Esencial",
      price: "$35,000",
      description: "Chatbot básico con IA para atención al cliente automatizada",
      features: [
        "Chatbot con IA básica",
        "Integración web",
        "Respuestas predefinidas",
        "Análisis básico",
        "Soporte por 3 meses",
        "Entrenamiento inicial",
      ],
      notIncluded: ["IA avanzada", "Integración con APIs", "Análisis predictivo", "App móvil"],
    },
    {
      id: 2,
      name: "Profesional",
      price: "$75,000",
      description: "Asistente inteligente con capacidades avanzadas de procesamiento",
      features: [
        "IA avanzada personalizada",
        "Procesamiento de lenguaje natural",
        "Integración con múltiples canales",
        "Dashboard analítico",
        "API personalizada",
        "Aprendizaje continuo",
        "Soporte por 6 meses",
        "Entrenamiento avanzado",
      ],
      notIncluded: ["Análisis predictivo completo", "Integración con Big Data", "App móvil nativa"],
      popular: false,
    },
    {
      id: 3,
      name: "Premium",
      price: "$150,000",
      description: "Plataforma completa con IA avanzada y análisis predictivo",
      features: [
        "IA de última generación",
        "Análisis predictivo completo",
        "Machine Learning avanzado",
        "Integración con Big Data",
        "App móvil nativa",
        "Dashboard ejecutivo",
        "APIs completas",
        "Automatización de procesos",
        "Soporte por 12 meses",
        "Consultoría especializada",
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
        <div className="service-hero-with-bg" style={{ backgroundImage: `url(${sistema})` }}>
          <div className="hero-overlay"></div>
          <div className="container">
            <motion.div
              className="service-hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="service-title">Sistemas Empresariales</h1>
              <p className="service-description">
                Desarrollamos sistemas empresariales robustos que optimizan tus procesos de negocio. Desde control de
                inventarios hasta CRM completos, creamos soluciones que se adaptan a las necesidades específicas de tu
                empresa.
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

export default SistemasEmpresariales
