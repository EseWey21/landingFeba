import { useState } from "react"
import { fromLabel } from "../../config/pricing"

// Pieza interactiva del hero: elige qué necesitas y ve el precio de entrada.
const options = [
  { id: "web", chip: "Sitio web", title: "Desarrollo Web", text: "Landing, sitio profesional o tienda en línea con WhatsApp integrado." },
  { id: "sistemas", chip: "Sistema", title: "Sistemas Empresariales", text: "Punto de venta, inventario y reportes hechos para cómo trabajas." },
  { id: "ia", chip: "IA", title: "Plataformas con IA", text: "Chatbots y automatización para atender y vender sin saturarte." },
  { id: "local", chip: "Negocio local", title: "Soluciones para Negocios Locales", text: "Algo a la medida de tu restaurante, clínica, gimnasio o tienda." },
]

const ServicePicker = () => {
  const [selected, setSelected] = useState("web")
  const current = options.find((o) => o.id === selected)
  const label = fromLabel(current.id)
  const hasFrom = label.startsWith("Desde ")

  return (
    <aside className="picker" aria-label="Elige qué necesitas">
      <div className="picker-chips" role="group" aria-label="Tipo de servicio">
        {options.map((o) => (
          <button
            key={o.id}
            type="button"
            className="chip"
            aria-pressed={selected === o.id}
            onClick={() => setSelected(o.id)}
          >
            {o.chip}
          </button>
        ))}
      </div>
      <div className="picker-out" aria-live="polite" key={current.id}>
        <h2>{current.title}</h2>
        <p>{current.text}</p>
        <div className="picker-price">
          {hasFrom ? (
            <>
              <span>Desde</span>
              <strong>{label.replace("Desde ", "")}</strong>
            </>
          ) : (
            <strong className="picker-quote">{label}</strong>
          )}
        </div>
      </div>
    </aside>
  )
}

export default ServicePicker
