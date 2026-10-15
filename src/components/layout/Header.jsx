import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu } from "lucide-react"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"
import MobileMenu from "./MobileMenu"
import Button from "../ui/Button"
import { navLinks } from "../../config/nav"
import { waLink } from "../../config/site"

const Header = () => {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState(null)

  // Resalta la sección visible en la página principal
  useEffect(() => {
    if (pathname !== "/" || !("IntersectionObserver" in window)) {
      setActive(null)
      return
    }
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <header className="site-header">
      <div className="container header-row">
        <Link to="/" className="header-logo" aria-label="FebaCode, ir al inicio">
          <Logo />
        </Link>

        <nav className="header-nav" aria-label="Principal">
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={l.href} aria-current={active === l.id ? "location" : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Button size="sm" href={waLink("nav")} external className="header-wa">
            WhatsApp
          </Button>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} aria-hidden="true" />
          </button>
        </div>
      </div>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} active={active} />
    </header>
  )
}

export default Header
