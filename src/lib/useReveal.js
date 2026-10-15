import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { motion } from "../config/motion"

// Revela una sola vez los elementos [data-reveal] al entrar en pantalla.
// Los hijos de un mismo padre se escalonan unos milisegundos.
export function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const items = Array.from(document.querySelectorAll("[data-reveal]:not(.in)"))
    if (!items.length) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          const siblings = Array.from(el.parentElement?.querySelectorAll(":scope > [data-reveal]") ?? [])
          const index = Math.max(0, siblings.indexOf(el))
          el.style.setProperty("--d", `${Math.min(index, 5) * motion.staggerMs}ms`)
          el.classList.add("in")
          observer.unobserve(el)
        })
      },
      { threshold: motion.revealThreshold, rootMargin: motion.revealRootMargin },
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [pathname])
}
