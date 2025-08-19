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
      price: "$7,000 – $12,000 MXN",
      description:
        "Ideal para pequeños negocios y emprendedores que quieren dar sus primeros pasos en la digitalización.",
      features: [
        "Punto de Venta (POS) básico: registro de ventas y caja.",
        "Control de inventario sencillo: altas, bajas, movimientos, alertas de stock bajo.",
        "Usuarios limitados (1-2 usuarios).",
        "Reportes básicos de ventas e inventario.",
        "Soporte técnico y capacitación inicial.",
      ],
      notIncluded: [ "Integración con APIs", "Análisis predictivo","Automatizacion de procesos"],
    },
    {
      id: 2,
      name: "Profesional",
      price: "$7,000 – $12,000 MXN",
      description: "Para negocios en crecimiento que necesitan mayor control y herramientas de gestión.",
      features: [
        "Punto de Venta (POS) avanzado: ventas, caja, arqueos, notas/tickets y gestión de descuentos.",
        "Inventario avanzado: multi-almacén, productos con variantes, reportes y alertas.",
        "Integración con múltiples canales",
        "Módulo de ingresos y egresos: control de flujo de efectivo y gastos.",
        "CRM sencillo: registro de clientes y ventas por cliente.",
        "Sistema de roles y permisos (multiusuario, 5 usuarios).",
      ],
      notIncluded: ["Integración con Big Data", "Automatizacion de procesos","Exportacion a PDF/Excel"],
      popular: false,
    },
    {
      id: 3,
      name: "Premium",
      price: "$16,000 – $24,000 MXN",
      description: "Plataforma completa con IA avanzada y análisis predictivo",
      features: [
        "Punto de Venta (POS) avanzado: ventas, caja, arqueos, notas/tickets y gestión de descuentos.",
        "Inventario avanzado: multi-almacén, productos con variantes, reportes y alertas.",
        "Módulo de ingresos y egresos: control de flujo de efectivo y gastos.",
        "CRM sencillo: registro de clientes y ventas por cliente.",
        "Sistema de roles y permisos (multiusuario, 5 usuarios).",
        "Reportes avanzados y exportación a Excel/PDF.",
        "Soporte extendido y actualizaciones por 1 año.",
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

export default SistemasEmpresariales
