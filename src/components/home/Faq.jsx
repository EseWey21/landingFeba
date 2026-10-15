import SectionHead from "../ui/SectionHead"
import Accordion from "../ui/Accordion"
import { faqItems } from "../../config/faq"

const Faq = () => (
  <section className="section" id="preguntas" aria-labelledby="preguntas-title">
    <div className="container faq-wrap">
      <SectionHead id="preguntas-title" eyebrow="Preguntas" title="Lo que casi todos nos preguntan" />
      <Accordion items={faqItems} />
    </div>
  </section>
)

export default Faq
