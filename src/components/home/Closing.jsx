import { Mail, Phone } from "lucide-react"
import Button from "../ui/Button"
import { site, waLink } from "../../config/site"

const Closing = () => (
  <section className="closing" id="contacto" aria-labelledby="contacto-title">
    <div className="container closing-inner" data-reveal>
      <h2 id="contacto-title">Platiquemos de tu proyecto</h2>
      <p>Cuéntanos qué necesitas y te respondemos por WhatsApp.</p>
      <div className="closing-cta">
        <Button href={waLink("cierre")} external>Cotizar por WhatsApp en 2 minutos</Button>
      </div>
      <ul className="closing-contact">
        <li>
          <Mail size={18} aria-hidden="true" />
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </li>
        <li>
          <Phone size={18} aria-hidden="true" />
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
        </li>
      </ul>
    </div>
  </section>
)

export default Closing
