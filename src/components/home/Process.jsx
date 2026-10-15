import SectionHead from "../ui/SectionHead"

const steps = [
  { n: 1, title: "Entendemos tu problema", text: "Platicamos contigo para saber qué necesitas de verdad." },
  { n: 2, title: "Prototipo visual rápido", text: "Te mostramos cómo se vería antes de construirlo." },
  { n: 3, title: "Desarrollo a medida", text: "Lo construimos para tu negocio, sin plantillas genéricas." },
  { n: 4, title: "Lanzamiento y acompañamiento", text: "Lo publicamos y te acompañamos después." },
]

// Solo las integraciones que aparecen en el catálogo. Otras quedan en claims.js.
const integrations = ["WhatsApp", "Facebook", "Stripe", "PayPal", "MercadoPago", "Google Sheets y Excel", "Facturación CFDI 4.0"]

const Process = () => (
  <section className="section section-alt" id="proceso" aria-labelledby="proceso-title">
    <div className="container">
      <SectionHead id="proceso-title" eyebrow="Proceso" title="De tu idea a tu lanzamiento en cuatro pasos" />
      <ol className="steps" data-reveal>
        <svg className="steps-line" viewBox="0 0 100 2" preserveAspectRatio="none" aria-hidden="true">
          <line x1="0" y1="1" x2="100" y2="1" pathLength="1" />
        </svg>
        {steps.map((s) => (
          <li key={s.n} className="step">
            <span className="step-n" aria-hidden="true">{s.n}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="integrations" data-reveal>
        <h3>Se conecta con las herramientas que ya usas</h3>
        <ul>
          {integrations.map((i) => (
            <li key={i} className="chip-static">{i}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default Process
