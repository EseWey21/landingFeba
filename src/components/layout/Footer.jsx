import { Link } from "react-router-dom"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"
import Logo from "./Logo"
import { site } from "../../config/site"
import { navLinks, servicePages, legalPages } from "../../config/nav"

// lucide-react no trae el ícono de TikTok: se dibuja en línea.
const TikTok = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
    <path d="M16.6 3c.3 2.3 1.7 4 4 4.2v3.1c-1.5 0-2.9-.4-4-1.1v6.2c0 3.2-2.6 5.6-5.7 5.6S5.2 18.6 5.2 15.5c0-3.3 2.8-5.8 6.1-5.5v3.2c-1.5-.3-2.9.8-2.9 2.3 0 1.3 1 2.4 2.4 2.4 1.4 0 2.4-1 2.4-2.5V3h3.4z" />
  </svg>
)

const social = [
  { label: "Instagram", href: site.social.instagram, Icon: Instagram },
  { label: "TikTok", href: site.social.tiktok, Icon: TikTok },
  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
]

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="header-logo" aria-label="FebaCode, ir al inicio">
            <Logo />
          </Link>
          <p className="footer-tagline">{site.tagline}</p>
          <ul className="footer-social">
            {social.map(({ label, href, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                  <Icon size={20} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Navegación del pie">
          <h2 className="footer-title">Navegación</h2>
          <ul className="footer-list">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Servicios">
          <h2 className="footer-title">Servicios</h2>
          <ul className="footer-list">
            {servicePages.map((s) => (
              <li key={s.id}>
                <Link to={s.href}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer-title">Contacto</h2>
          <ul className="footer-list footer-contact">
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Phone size={16} aria-hidden="true" />
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>{site.city}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p suppressHydrationWarning>&copy; {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
        <ul className="footer-legal">
          {legalPages.map((p) => (
            <li key={p.id}>
              <Link to={p.href}>{p.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
