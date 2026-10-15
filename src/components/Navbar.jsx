"use client"

import { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { useNavigate, useLocation } from "react-router-dom" // Agregando hooks de React Router
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "./Logo"
import { waLink } from "../config/site"
import { navSections } from "../config/nav"
import "../styles/Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [activeSection, setActiveSection] = useState("inicio")
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

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

  // Menú móvil: Esc cierra, el foco se queda dentro y regresa al botón al cerrar
  useEffect(() => {
    if (!isOpen) return
    const toggle = toggleRef.current
    const menu = menuRef.current
    const focusables = () =>
      menu ? Array.from(menu.querySelectorAll("a[href], button:not([disabled])")) : []
    menu?.querySelector(".mobile-close-btn")?.focus()
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false)
        return
      }
      if (event.key !== "Tab") return
      const items = focusables()
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKeyDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      toggle?.focus()
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
    <>
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${visible || isOpen ? "" : "hidden"}`}
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
            {navSections.map(({ id: section, label }) => (
              <motion.li key={section} variants={itemVariants}>
                <a
                  href={`#${section}`}
                  onClick={(e) => handleNavClick(e, section)}
                  className={activeSection === section && location.pathname === "/" ? "active" : ""} // Solo mostrar activo en página principal
                >
                  {label}
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
          <motion.a
            className="navbar-contact"
            href={waLink("nav")}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
          >
            Hablemos <span>↗</span>
          </motion.a>
        </motion.div>

        <motion.button
          type="button"
          ref={toggleRef}
          className="navbar-toggle"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          aria-controls="menu-movil"
          onClick={() => setIsOpen(true)}
          variants={itemVariants}
          whileTap={{ scale: 0.9 }}
        >
          <span className="menu-icon-container">
            <Menu size={24} />
          </span>
        </motion.button>

      </div>
    </motion.nav>
    {createPortal(
      <AnimatePresence>
          {isOpen && (
            <motion.div
              className="mobile-menu"
              id="menu-movil"
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Menú"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <div className="mobile-menu-header">
                <a className="mobile-logo" href="#inicio" onClick={handleLogoClick}>
                  <Logo scrolled={true} />
                </a>
                <motion.button
                  type="button"
                  className="mobile-close-btn"
                  aria-label="Cerrar menú"
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
              <div className="mobile-menu-content">
                <ul className="mobile-links">
                  {navSections.map(({ id: section, label }, index) => (
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
                        {label}
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
                    href={waLink("nav")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="btn btn-cta">Cotiza tu proyecto</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
      </AnimatePresence>
      , document.body)}
    </>
  )
}

export default Navbar
