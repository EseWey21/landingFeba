"use client"

import { useState, useEffect, useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom" // Agregando hooks de React Router
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

  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()

    // Cerrar el menú móvil si está abierto
    if (isOpen) setIsOpen(false)

    // Si estamos en la página principal, usar navegación suave
    if (location.pathname === "/") {
      const section = document.getElementById(sectionId)
      if (section) {
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: sectionPosition,
          behavior: "smooth",
        })
      }
    } else {
      // Si estamos en otra ruta, navegar a la página principal con la sección
      navigate("/", { replace: true })
      // Usar setTimeout para asegurar que la página se cargue antes del scroll
      setTimeout(() => {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionPosition = section.getBoundingClientRect().top + window.scrollY
          window.scrollTo({
            top: sectionPosition,
            behavior: "smooth",
          })
        }
      }, 100)
    }
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    if (location.pathname === "/") {
      // Si estamos en la página principal, ir al inicio
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      // Si estamos en otra ruta, navegar a la página principal
      navigate("/", { replace: true })
    }
    if (isOpen) setIsOpen(false)
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

          if (location.pathname === "/") {
            updateActiveSection(currentScrollY)
          }

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
  }, [location.pathname]) // Agregando location.pathname como dependencia

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

  // Siempre usar el logo de color en el menú móvil
  //const mobileLogoScrolled = true

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${visible ? "" : "hidden"}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container navbar-container mobile-padding">
        <motion.div className="navbar-logo" variants={itemVariants}>
          <a href="#inicio" onClick={handleLogoClick}>
            <Logo scrolled={scrolled || isOpen} />
          </a>
        </motion.div>

        <motion.div className="navbar-menu desktop-menu" variants={navVariants}>
          <ul className="navbar-links">
            {["inicio", "servicios", "nosotros", "contacto"].map((section, index) => (
              <motion.li key={section} variants={itemVariants}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleNavClick(e, section)}
                  className={activeSection === section && location.pathname === "/" ? "active" : ""} // Solo mostrar activo en página principal
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                  {activeSection === section &&
                    location.pathname === "/" && ( // Solo mostrar indicador en página principal
                      <motion.span
                        className="active-indicator"
                        layoutId="activeIndicator"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div className="navbar-cta" variants={itemVariants}></motion.div>
        </motion.div>

        {!isOpen && (
          <motion.div
            className="navbar-toggle"
            onClick={() => setIsOpen(true)}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="menu-icon-container">
              <Menu size={24} />
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="mobile-menu-header">
                <div className="mobile-logo" onClick={handleLogoClick}>
                  <Logo scrolled={true} />
                </div>
                <motion.div
                  className="mobile-close-btn"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.div>
              </div>
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
                        className={activeSection === section && location.pathname === "/" ? "active" : ""} // Solo mostrar activo en página principal
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
                  <a
                    href="https://wa.me/525644129078?text=Hola,%20deseo%20cotizar%20un%20desarrollo%20de%20software"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-cta">Cotiza tu proyecto</button>
                  </a>
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
