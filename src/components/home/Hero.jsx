import Button from "../ui/Button"
import ServicePicker from "./ServicePicker"
import { waLink } from "../../config/site"
import { formatMXN, pillars } from "../../config/pricing"
import { claimText } from "../../config/claims"

// El contenido del hero se ve de inmediato: la animación no retrasa el LCP.
const Hero = () => (
  <section className="hero" id="inicio" aria-labelledby="hero-title">
    <div className="container hero-grid">
      <div className="hero-copy">
        <span className="tag hero-in" style={{ "--i": 0 }}>Software e IA · Ciudad de México</span>
        <h1 id="hero-title" className="hero-in" style={{ "--i": 1 }}>
          Tecnología que convierte <mark className="hl">ideas complejas</mark> en resultados.
        </h1>
        <p className="hero-sub hero-in" style={{ "--i": 2 }}>
          Desarrollo a la medida, claro y a precio accesible para tu negocio.
        </p>
        <div className="hero-cta hero-in" style={{ "--i": 3 }}>
          <Button href={waLink("hero")} external>Cotizar por WhatsApp en 2 minutos</Button>
          <Button href="#precios" variant="secondary">Ver precios</Button>
        </div>
        <ul className="hero-badges hero-in" style={{ "--i": 4 }}>
          <li>Landing desde {formatMXN(pillars.web.from)} MXN</li>
          {claimText("sin-costos-ocultos") && <li>{claimText("sin-costos-ocultos").replace(/\.$/, "")}</li>}
        </ul>
      </div>
      <div className="hero-visual hero-in" style={{ "--i": 3 }}>
        <ServicePicker />
      </div>
    </div>
  </section>
)

export default Hero
