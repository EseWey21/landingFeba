import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import Logo from "./Logo"
import Button from "../ui/Button"
import { navLinks, servicePages } from "../../config/nav"
import { waLink } from "../../config/site"

// Se renderiza en <body> (fuera del <header>) para no heredar transform ni
// backdrop-filter. Esc cierra, el foco se queda dentro y vuelve al botón.
const MobileMenu = ({ open, onClose, active }) => {
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const opener = document.querySelector(".menu-toggle")
    const menu = ref.current
    document.body.style.overflow = "hidden"
    menu?.querySelector(".menu-close")?.focus()

    const items = () => Array.from(menu?.querySelectorAll("a[href], button:not([disabled])") ?? [])
    const onKey = (e) => {
      if (e.key === "Escape") return onClose()
      if (e.key !== "Tab") return
      const list = items()
      if (!list.length) return
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
      opener?.focus()
    }
  }, [open, onClose])

  if (!open || typeof document === "undefined") return null

  return createPortal(
    <div className="mobile-menu" id="menu-movil" ref={ref} role="dialog" aria-modal="true" aria-label="Menú">
      <div className="mobile-menu-top">
        <span className="header-logo"><Logo /></span>
        <button type="button" className="menu-close" aria-label="Cerrar menú" onClick={onClose}>
          <X size={24} aria-hidden="true" />
        </button>
      </div>
      <nav aria-label="Principal (móvil)" className="mobile-menu-body">
        <ul className="mobile-links">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={l.href} onClick={onClose} aria-current={active === l.id ? "location" : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="mobile-sub" aria-label="Servicios">
          {servicePages.map((s) => (
            <li key={s.id}>
              <a href={s.href}>{s.label}</a>
            </li>
          ))}
        </ul>
        <Button href={waLink("nav")} external className="mobile-cta" onClick={onClose}>
          Cotizar por WhatsApp
        </Button>
      </nav>
    </div>,
    document.body,
  )
}

export default MobileMenu
