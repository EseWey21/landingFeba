import SectionHead from "../ui/SectionHead"
import Button from "../ui/Button"
import { fromLabel, notIncluded, PRICE_DISCLAIMER, pillars } from "../../config/pricing"
import { claimText } from "../../config/claims"
import { waLink } from "../../config/site"

const rows = ["web", "sistemas", "ia", "local"]

const PricingBlock = () => (
  <section className="section" id="precios" aria-labelledby="precios-title">
    <div className="container">
      <SectionHead id="precios-title" eyebrow="Precios" title="Sabes cuánto invertir desde el primer día">
        Precios de entrada claros. El monto final depende de tu alcance.
      </SectionHead>

      <ul className="price-list">
        {rows.map((id) => (
          <li key={id} className="price-row" data-reveal>
            <span className="price-name">{pillars[id].name}</span>
            <span className="price-amount">{fromLabel(id)}</span>
          </li>
        ))}
      </ul>
      <p className="fine price-note">
        {PRICE_DISCLAIMER} {claimText("sin-costos-ocultos")}
      </p>

      <div className="compare">
        <article className="compare-card" data-reveal>
          <h3>Por proyecto</h3>
          <p>Un pago por lo que necesitas construir. Defines alcance, lo desarrollamos y lo lanzamos.</p>
        </article>
        <article className="compare-card" data-reveal>
          <h3>Acompañamiento mensual</h3>
          <p>Hosting, mantenimiento, soporte y mejoras para que tu solución siga creciendo.</p>
          <span className="compare-price">Se cotiza según tu proyecto</span>
        </article>
      </div>

      <div className="not-included" data-reveal>
        <h3>Lo que no está incluido en el precio</h3>
        <p>Para que no haya sorpresas, esto se cotiza o se paga aparte:</p>
        <ul>
          {notIncluded.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>

      <div className="section-foot" data-reveal>
        <Button href={waLink("precios")} external>Cotizar mi proyecto</Button>
      </div>
    </div>
  </section>
)

export default PricingBlock
