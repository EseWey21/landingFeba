import { Check } from "lucide-react"
import Button from "../components/ui/Button"
import { services } from "../config/services"
import { fromLabel, hasFromPrice, notIncludedFor, PRICE_DISCLAIMER } from "../config/pricing"
import { waLink } from "../config/site"

const ServicePage = ({ slug }) => {
  const s = services[slug]
  const hasPrice = hasFromPrice(s.pillar)

  return (
    <>
      <section className="page-hero" aria-labelledby="svc-title">
        <div className="container page-hero-inner">
          <span className="tag">Servicio</span>
          <h1 id="svc-title">{s.h1}</h1>
          <p className="page-lead">{s.lead}</p>
          <p className="page-price">
            <strong>{fromLabel(s.pillar)}</strong>
          </p>
          {hasPrice && <p className="fine">{PRICE_DISCLAIMER}</p>}
          <div className="hero-cta">
            <Button href={waLink(s.wa)} external>Cotizar por WhatsApp</Button>
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="inc-title">
        <div className="container two-col">
          <div data-reveal>
            <h2 id="inc-title">{hasPrice ? "Lo que incluye tu punto de partida" : "Cómo trabajamos contigo"}</h2>
            <ul className="check-list">
              {s.includes.map((i) => (
                <li key={i}><Check size={18} aria-hidden="true" />{i}</li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <h2>{hasPrice ? "Para crecer después" : "Ejemplos de lo que podemos hacer"}</h2>
            <ul className="check-list">
              {s.grows.map((i) => (
                <li key={i}><Check size={18} aria-hidden="true" />{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="who-title">
        <div className="container two-col">
          <div data-reveal>
            <h2 id="who-title">Para quién es</h2>
            <p className="muted">{s.forWho}</p>
          </div>
          <div data-reveal>
            <h2>Costos aparte</h2>
            <ul className="plain-list">
              {s.extras.map((e) => (<li key={e}>{e}</li>))}
              {notIncludedFor(s.pillar).map((n) => (<li key={n.id}>{n.text}</li>))}
            </ul>
            <p className="fine">Cotizamos todo contigo antes de empezar.</p>
          </div>
        </div>
      </section>

      <section className="closing" aria-labelledby="svc-cta">
        <div className="container closing-inner" data-reveal>
          <h2 id="svc-cta">Platiquemos de tu proyecto</h2>
          <p>Cuéntanos qué necesitas y te respondemos por WhatsApp.</p>
          <div className="closing-cta">
            <Button href={waLink(s.wa)} external>Cotizar por WhatsApp</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicePage
