import SectionHead from "../ui/SectionHead"
import { claimText } from "../../config/claims"

// Tecnología Tranquila. Solo se publica lo confirmado: los matices sobre
// propiedad del código, licencias o plazos viven en claims.js hasta aprobarse.
const principles = [
  { n: "01", title: "Claridad", text: "Te explicamos todo sin tecnicismos." },
  { n: "02", title: "Utilidad real", text: "Construimos solo lo que tu negocio necesita." },
  { n: "03", title: "Hecho a tu medida", text: "Nada enlatado: cada sistema se adapta a ti." },
  { n: "04", title: "Confianza y precio accesible", text: claimText("sin-costos-ocultos") ?? "Precios claros desde el inicio." },
]

const Principles = () => (
  <section className="section section-alt" id="nosotros" aria-labelledby="nosotros-title">
    <div className="container">
      <SectionHead id="nosotros-title" eyebrow="Cómo trabajamos" title="Tecnología tranquila, hecha para ti">
        Somos una startup mexicana en Ciudad de México.
      </SectionHead>
      <ul className="principle-grid">
        {principles.map((p) => (
          <li key={p.n} className="principle" data-reveal>
            <span className="principle-n">{p.n}</span>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

export default Principles
