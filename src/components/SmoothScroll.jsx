"use client"

import { useEffect, useRef, useState } from "react"
import "../styles/SmoothScroll.css"

const SmoothScroll = ({ children }) => {
  const scrollingContainerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const data = useRef({
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  })
  const rafId = useRef(null)
  const isInitialMount = useRef(true)

  // Detectar si es un dispositivo móvil o táctil
  useEffect(() => {
    const checkMobile = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0
    }

    setIsMobile(checkMobile())

    // Si es un dispositivo móvil, no aplicamos el smooth scroll personalizado
    if (checkMobile()) {
      return
    }

    const scrollingContainer = scrollingContainerRef.current

    // Configurar la altura del body para permitir el scroll
    const setBodyHeight = () => {
      if (scrollingContainer) {
        const scrollingContainerHeight = scrollingContainer.getBoundingClientRect().height
        document.body.style.height = `${scrollingContainerHeight}px`
      }
    }

    setBodyHeight()

    // Iniciar la animación de scroll
    startSmoothScrolling()

    // Manejar cambios de tamaño de ventana
    const handleResize = () => {
      setBodyHeight()
    }

    window.addEventListener("resize", handleResize)

    // Asegurar que el scroll esté habilitado
    document.body.style.overflow = "auto"
    document.documentElement.style.overflow = "auto"
    document.body.classList.remove("no-scroll")

    return () => {
      window.removeEventListener("resize", handleResize)
      // Limpiar el requestAnimationFrame al desmontar
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
      // Restaurar la altura del body
      document.body.style.height = ""
    }
  }, [])

  // Efecto para manejar la navegación entre páginas
  useEffect(() => {
    // Solo ejecutar después del montaje inicial
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    // Restablecer el scroll cuando cambia la ubicación
    window.scrollTo(0, 0)

    // Asegurar que el scroll esté habilitado
    document.body.style.overflow = "auto"
    document.documentElement.style.overflow = "auto"
    document.body.classList.remove("no-scroll")

    // Actualizar la altura del body
    if (scrollingContainerRef.current && !isMobile) {
      const scrollingContainerHeight = scrollingContainerRef.current.getBoundingClientRect().height
      document.body.style.height = `${scrollingContainerHeight}px`
    }
  }, [window.location.pathname, isMobile])

  // Función para iniciar el smooth scrolling
  const startSmoothScrolling = () => {
    // Función de animación para el smooth scroll
    const smoothScrolling = () => {
      data.current.current = window.scrollY
      data.current.previous += (data.current.current - data.current.previous) * data.current.ease
      data.current.rounded = Math.round(data.current.previous * 100) / 100

      if (scrollingContainerRef.current) {
        scrollingContainerRef.current.style.transform = `translateY(-${data.current.rounded}px)`
      }

      rafId.current = requestAnimationFrame(smoothScrolling)
    }

    rafId.current = requestAnimationFrame(smoothScrolling)
  }

  // Manejar la navegación a secciones específicas
  useEffect(() => {
    if (isMobile) return

    // Función para manejar clics en enlaces internos
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return

      const id = target.getAttribute("href").slice(1)
      const element = document.getElementById(id)

      if (element) {
        e.preventDefault()
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        })
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [isMobile])

  // Si es un dispositivo móvil, renderizamos normalmente sin el smooth scroll
  if (isMobile) {
    return <>{children}</>
  }

  return (
    <div className="smooth-scroll-container">
      <div ref={scrollingContainerRef} className="smooth-scroll-content">
        {children}
      </div>
    </div>
  )
}

export default SmoothScroll
