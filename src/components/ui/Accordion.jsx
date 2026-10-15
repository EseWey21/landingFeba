import { useState } from "react"
import { ChevronDown } from "lucide-react"

// Acordeón accesible: cada pregunta es un botón con aria-expanded. La altura se
// anima con grid-template-rows (no se anima height).
const Accordion = ({ items }) => {
  const [open, setOpen] = useState(null)
  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div className={`acc-item${isOpen ? " is-open" : ""}`} key={item.q} data-reveal>
            <h3>
              <button
                type="button"
                className="acc-trigger"
                aria-expanded={isOpen}
                aria-controls={`acc-panel-${i}`}
                id={`acc-btn-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <ChevronDown size={20} aria-hidden="true" />
              </button>
            </h3>
            <div className="acc-panel" id={`acc-panel-${i}`} role="region" aria-labelledby={`acc-btn-${i}`}>
              <div className="acc-inner">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
