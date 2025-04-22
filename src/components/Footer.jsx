"use client"

import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import Logo from "./Logo"
import "../styles/Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Función para manejar la navegación suave sin cambiar la URL
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      // Calcular la posición de la sección
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY

      // Scroll suave a la sección
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.5 + i * 0.1,
      },
    }),
    hover: {
      scale: 1.2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  }

  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-bg-gradient"></div>
        <div className="footer-bg-pattern"></div>
      </div>

      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="footer-info" variants={itemVariants}>
            <Logo />
            <p className="footer-tagline">Soluciones que conectan.</p>
            <div className="footer-social">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href={`https://${["facebook", "twitter", "instagram", "linkedin"][i]}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={["Facebook", "Twitter", "Instagram", "LinkedIn"][i]}
                  custom={i}
                  variants={socialVariants}
                  whileHover="hover"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="footer-links">
            <motion.div className="footer-links-column" variants={itemVariants}>
              <h3 className="footer-links-title">Navegación</h3>
              <ul>
                <li>
                  <a href="#inicio" onClick={(e) => handleNavClick(e, "inicio")}>
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#servicios" onClick={(e) => handleNavClick(e, "servicios")}>
                    Servicios
                  </a>
                </li>
                <li>
                  <a href="#nosotros" onClick={(e) => handleNavClick(e, "nosotros")}>
                    ¿Por qué elegirnos?
                  </a>
                </li>
                <li>
                  <a href="#proyectos" onClick={(e) => handleNavClick(e, "proyectos")}>
                    Proyectos
                  </a>
                </li>
                <li>
                  <a href="#contacto" onClick={(e) => handleNavClick(e, "contacto")}>
                    Contacto
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div className="footer-links-column" variants={itemVariants}>
              <h3 className="footer-links-title">Servicios</h3>
              <ul>
                <li>
                  <a href="#servicios" onClick={(e) => handleNavClick(e, "servicios")}>
                    Desarrollo Web
                  </a>
                </li>
                <li>
                  <a href="#servicios" onClick={(e) => handleNavClick(e, "servicios")}>
                    Sistemas Empresariales
                  </a>
                </li>
                <li>
                  <a href="#servicios" onClick={(e) => handleNavClick(e, "servicios")}>
                    Plataformas con IA
                  </a>
                </li>
                <li>
                  <a href="#servicios" onClick={(e) => handleNavClick(e, "servicios")}>
                    Software a la medida
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div className="footer-links-column" variants={itemVariants}>
              <h3 className="footer-links-title">Contacto</h3>
              <ul className="footer-contact">
                <li>
                  <Mail size={16} />
                  <a href="mailto:info@febacode.com">info@febacode.com</a>
                </li>
                <li>
                  <Phone size={16} />
                  <a href="tel:+525512345678">+52 55 1234 5678</a>
                </li>
                <li>
                  <MapPin size={16} />
                  <span>Ciudad de México, México</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p className="footer-copyright" variants={itemVariants}>
            &copy; {currentYear} Feba Code. Todos los derechos reservados.
          </motion.p>
          <motion.div className="footer-legal" variants={itemVariants}>
            <a href="#privacidad" onClick={(e) => e.preventDefault()}>
              Aviso de Privacidad
            </a>
            <a href="#terminos" onClick={(e) => e.preventDefault()}>
              Términos y Condiciones
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
