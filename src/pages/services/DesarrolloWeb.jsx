"use client"

import { useEffect } from "react"
import { Check, X } from "lucide-react"
import { motion } from "framer-motion"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import "../../styles/ServicePage.css"
import progra from "../../assets/progra.jpg"

const DesarrolloWeb = () => {
  useEffect(() => {
    document.title = "Desarrollo Web | FebaCode"
    window.scrollTo(0, 0)
  }, [])

  const packages = [
    {
      id: 1,
      name: "Esencial",
      price: "Desde: $3,500 MXN",
      description: "Perfecto para pequeños negocios que necesitan presencia web básica",
      features: [
        "Landing Page",
        "Formulario de Contacto Integrado",
        "Menu Digital con QR",
        "Diseño Responsivo y adaptado a tu marca",
        "Integracion con Whatsapp",
        "Soporte tecnico por 1  mes",
      ],
      notIncluded: ["E-commerce", "Panel administrativo", "Integración con APIs"],
    },
    {
      id: 2,
      name: "Profesional",
      price: "Desde : $6,500 MXN",
      description: "Ideal para empresas que buscan funcionalidades avanzadas",
      features: [
        "Sitio web de hasta 5 secciones (ej. Inicio, Sobre nosotros, Servicios/Menú, Galería/Portafolio, Contacto)",
        "Menú digital QR y/o Portafolio digital",
        "Formulario avanzado (cotización, reservas o contacto)",
        "Integración con redes sociales y Google Maps",
        "Optimización SEO basico",
        "Integración con redes sociales",
        "Soporte por 3 meses",
      ],
      notIncluded: ["Integración con APIs externas", "Sistema de inventarios"],
      popular: false,
    },
    {
      id: 3,
      name: "Empresarial",
      price: "Desde: 13,000 MXN",
      description: "Solución completa para empresas grandes con necesidades específicas",
      features: [
        "Todo lo del paquete Profesional",
        "Tienda en línea / E-commerce o Sistema de reservaciones/citas",
        "Integración de pagos en línea (Stripe, PayPal, MercadoPago)",
        "Panel administrativo completo",
        "Sistema de inventarios",
        "Integración con APIs",
        "Optimización SEO avanzado",
        "Soporte por 12 meses",
        "Capacitacion personal y Soporte extendido ",
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
              src={progra || "/placeholder.svg"}
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

                  <button
                    className="package-button"
                    onClick={() =>
                      window.open(
                        "https://wa.me/525644129078?text=Hola,%20deseo%20cotizar%20un%20desarrollo%20de%20software",
                        "_blank",
                      )
                    }
                  >
                    Solicitar cotización
                  </button>
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
