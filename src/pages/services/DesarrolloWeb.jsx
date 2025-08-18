"use client"

import { useEffect } from "react"
import { Check, X } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import "../../styles/ServicePage.css"
import desarrollo from "../../assets/imagenWeb.png"
import { image } from "framer-motion/client"

const DesarrolloWeb = () => {
  useEffect(() => {
    document.title = "Desarrollo Web | FebaCode"
    window.scrollTo(0, 0)
  }, [])

  const packages = [
    {
      id: 1,
      name: "Esencial",
      price: "$15,000",
      description: "Perfecto para pequeños negocios que necesitan presencia web básica",
      features: [
        "Diseño responsivo",
        "Hasta 5 páginas",
        "Formulario de contacto",
        "Optimización SEO básica",
        "Hosting por 1 año",
        "Soporte por 3 meses",
      ],
      notIncluded: ["E-commerce", "Panel administrativo", "Integración con APIs", "Mantenimiento mensual"],
    },
    {
      id: 2,
      name: "Profesional",
      price: "$35,000",
      description: "Ideal para empresas que buscan funcionalidades avanzadas",
      features: [
        "Diseño responsivo premium",
        "Hasta 15 páginas",
        "E-commerce básico",
        "Panel administrativo",
        "Optimización SEO avanzada",
        "Integración con redes sociales",
        "Hosting por 1 año",
        "Soporte por 6 meses",
      ],
      notIncluded: ["Integración con APIs externas", "Sistema de inventarios", "Mantenimiento mensual"],
      popular: false,
    },
    {
      id: 3,
      name: "Empresarial",
      price: "$65,000",
      description: "Solución completa para empresas grandes con necesidades específicas",
      features: [
        "Diseño personalizado completo",
        "Páginas ilimitadas",
        "E-commerce avanzado",
        "Panel administrativo completo",
        "Sistema de inventarios",
        "Integración con APIs",
        "Optimización SEO premium",
        "Hosting por 2 años",
        "Soporte por 12 meses",
        "Mantenimiento mensual",
      ],
      notIncluded: [],
    },
  ]

  const comparisonFeatures = [
    "Diseño responsivo",
    "Número de páginas",
    "E-commerce",
    "Panel administrativo",
    "SEO",
    "Integración APIs",
    "Hosting incluido",
    "Soporte técnico",
    "Mantenimiento",
  ]

  return (
    <div className="service-page">
      <Navbar />

      <main className="service-main">
        <div className="service-hero-with-image">
          <div className="hero-background">
            <img
              src={desarrollo}
              alt="Desarrollo Web - Código de programación"
              className="hero-background-image"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="hero-title">Desarrollo Web</h1>
              <p className="hero-description">
                Creamos sitios web modernos, responsivos y optimizados que conectan tu negocio con tus clientes. Desde
                landing pages hasta e-commerce completos, desarrollamos soluciones web que impulsan tu presencia
                digital.
              </p>
              <motion.button
                className="hero-cta-button"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Ver Paquetes
              </motion.button>
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

export default DesarrolloWeb
