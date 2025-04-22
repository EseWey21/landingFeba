"use client"

import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "./Logo"
import "../styles/Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [activeSection, setActiveSection] = useState("inicio")
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  // Función para manejar la navegación suave sin cambiar la URL
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      // Cerrar el menú móvil si está abierto
      if (isOpen) setIsOpen(false)

      // Calcular la posición de la sección
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY

      // Scroll suave a la sección
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          // Determinar si el navbar debe ser visible basado en la dirección del scroll
          if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            // Scrolling down & past threshold - hide navbar
            setVisible(false)
          } else {
            // Scrolling up or at top - show navbar
            setVisible(true)
          }

          // Actualizar el estado de scroll para el fondo
          setScrolled(currentScrollY > 50)

          // Actualizar la sección activa
          updateActiveSection(currentScrollY)

          lastScrollY.current = currentScrollY
          ticking.current = false
        })

        ticking.current = true
      }
    }

    const updateActiveSection = (scrollPos) => {
      const sections = document.querySelectorAll("section[id]")

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id")

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }

    return () => {
      document.body.classList.remove("no-scroll")
    }
  }, [isOpen])

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  }

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${visible ? "" : "hidden"}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container navbar-container">
        <motion.div className="navbar-logo" variants={itemVariants}>
          <a href="#inicio" onClick={(e) => handleNavClick(e, "inicio")}>
            <Logo />
          </a>
        </motion.div>

        <motion.div className="navbar-menu desktop-menu" variants={navVariants}>
          <ul className="navbar-links">
            {["inicio", "servicios", "nosotros", "proyectos", "contacto"].map((section, index) => (
              <motion.li key={section} variants={itemVariants}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleNavClick(e, section)}
                  className={activeSection === section ? "active" : ""}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section && (
                    <motion.span
                      className="active-indicator"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div className="navbar-cta" variants={itemVariants}>
          </motion.div>
        </motion.div>

        <motion.div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} variants={itemVariants}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="mobile-menu-content">
                <ul className="mobile-links">
                  {["inicio", "servicios", "nosotros", "proyectos", "contacto"].map((section, index) => (
                    <motion.li
                      key={section}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.1 + index * 0.1 },
                      }}
                    >
                      <a
                        href={`#${section}`}
                        onClick={(e) => handleNavClick(e, section)}
                        className={activeSection === section ? "active" : ""}
                      >
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  className="mobile-cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.6 },
                  }}
                >
                  <button className="btn btn-cta">Cotiza tu proyecto</button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar
