import { Link } from "react-router-dom"
import { ArrowRight, Globe, LayoutDashboard, Bot, Store } from "lucide-react"
import SectionHead from "../ui/SectionHead"
import Button from "../ui/Button"
import { fromLabel, PRICE_DISCLAIMER } from "../../config/pricing"
import { waLink } from "../../config/site"

const items = [
  { id: "web", Icon: Globe, title: "Desarrollo Web", text: "Tu negocio en internet, listo para recibir clientes.", to: "/servicios/desarrollo-web" },
  { id: "sistemas", Icon: LayoutDashboard, title: "Sistemas Empresariales", text: "Ventas, inventario y reportes en un solo lugar.", to: "/servicios/sistemas-empresariales" },
  { id: "ia", Icon: Bot, title: "Plataformas con IA", text: "Atiende y automatiza lo repetitivo con inteligencia artificial.", to: "/servicios/plataformas-con-ia" },
  { id: "local", Icon: Store, title: "Soluciones para Negocios Locales", text: "Algo hecho a la medida de tu restaurante, clínica, gimnasio o tienda.", to: "/servicios/negocios-locales" },
]

const Pillars = () => (
  <section className="section" id="servicios" aria-labelledby="servicios-title">
    <div className="container">
      <SectionHead id="servicios-title" eyebrow="Qué hacemos" title="Cuatro formas de dar el salto digital" />
      <ul className="pillar-grid">
        {items.map(({ id, Icon, title, text, to }) => (
          <li key={id} className="pillar-card" data-reveal>
            <Link to={to} className="pillar-link">
              <span className="pillar-icon"><Icon size={26} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="pillar-price">{fromLabel(id)}</span>
              <span className="pillar-more">
                Ver más <ArrowRight size={16} aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="section-foot" data-reveal>
        <p className="fine">{PRICE_DISCLAIMER}</p>
        <Button href={waLink("servicios")} external variant="primary">Cuéntanos tu caso</Button>
      </div>
    </div>
  </section>
)

export default Pillars
