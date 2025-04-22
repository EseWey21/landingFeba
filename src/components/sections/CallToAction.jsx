"use client"

import { Rocket } from "lucide-react"
import { motion } from "framer-motion"
import ScrollReveal from "../ScrollReveal"
import "../../styles/CallToAction.css"

const CallToAction = () => {
  // Función para manejar la navegación suave sin cambiar la URL
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="contacto" className="cta section">
      <div className="cta-bg">
        <div className="cta-bg-gradient"></div>
        <div className="cta-bg-pattern"></div>
      </div>

      <div className="container">
        <ScrollReveal>
          <div className="cta-content">
            <h2 className="cta-title">¿Listo para llevar tu idea al siguiente nivel?</h2>
            <p className="cta-subtitle">Contáctanos hoy mismo y comencemos a trabajar en tu proyecto</p>

            <motion.a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className="btn btn-cta"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 30px rgba(246, 95, 76, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Rocket size={20} /> Empezar Proyecto
            </motion.a>

            <div className="cta-floating-elements">
              <motion.div
                className="cta-floating-element element-1"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="cta-floating-element element-2"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 6,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="cta-floating-element element-3"
                animate={{
                  y: [0, -10, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 7,
                  ease: "easeInOut",
                }}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CallToAction
