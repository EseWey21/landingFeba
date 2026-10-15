import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Lock } from "lucide-react"
import { fromLabel, hasFromPrice, formatMXN, pillars } from "../../config/pricing"

// Ventana de navegador (estilo Safari): cada opción es una pestaña y el contenido
// se ve como una página web. Las pestañas siguen el patrón ARIA de tabs.
const options = [
  { id: "web", tab: "Sitio web", title: "Desarrollo Web", text: "Landing, sitio profesional o tienda en línea con WhatsApp integrado.", to: "/servicios/desarrollo-web" },
  { id: "sistemas", tab: "Sistema", title: "Sistemas Empresariales", text: "Punto de venta, inventario y reportes hechos para cómo trabajas.", to: "/servicios/sistemas-empresariales" },
  { id: "ia", tab: "IA", title: "Plataformas con IA", text: "Chatbots y automatización para atender y vender sin saturarte.", to: "/servicios/plataformas-con-ia" },
  { id: "local", tab: "Negocio local", title: "Soluciones para Negocios Locales", text: "Algo a la medida de tu restaurante, clínica, gimnasio o tienda.", to: "/servicios/negocios-locales" },
]

// Ilustraciones simples de la "página" de cada servicio (decorativas)
const Art = ({ id }) => {
  if (id === "web")
    return (
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <rect className="a-line" x="6" y="8" width="108" height="74" rx="8" fill="none" />
        <rect className="a-aqua" x="14" y="16" width="52" height="8" rx="4" />
        <rect className="a-soft" x="14" y="30" width="92" height="30" rx="5" />
        <rect className="a-soft" x="14" y="66" width="28" height="9" rx="4" />
        <rect className="a-coral" x="48" y="66" width="28" height="9" rx="4" />
      </svg>
    )
  if (id === "sistemas")
    return (
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <rect className="a-line" x="6" y="8" width="108" height="74" rx="8" fill="none" />
        <rect className="a-soft" x="16" y="52" width="14" height="22" rx="3" />
        <rect className="a-aqua" x="38" y="38" width="14" height="36" rx="3" />
        <rect className="a-soft" x="60" y="46" width="14" height="28" rx="3" />
        <rect className="a-coral" x="82" y="24" width="14" height="50" rx="3" />
        <rect className="a-soft" x="16" y="16" width="40" height="6" rx="3" />
      </svg>
    )
  if (id === "ia")
    return (
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <rect className="a-line" x="6" y="8" width="108" height="74" rx="8" fill="none" />
        <rect className="a-soft" x="14" y="16" width="58" height="16" rx="8" />
        <rect className="a-aqua" x="46" y="38" width="62" height="16" rx="8" />
        <rect className="a-soft" x="14" y="60" width="40" height="14" rx="7" />
        <circle className="a-coral" cx="100" cy="68" r="6" />
      </svg>
    )
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true">
      <rect className="a-line" x="6" y="8" width="108" height="74" rx="8" fill="none" />
      <path className="a-aqua" d="M18 34 L24 20 H96 L102 34 Z" />
      <rect className="a-soft" x="18" y="38" width="84" height="36" rx="4" />
      <rect className="a-coral" x="50" y="50" width="20" height="24" rx="3" />
      <rect className="a-line-fill" x="24" y="46" width="18" height="12" rx="2" />
      <rect className="a-line-fill" x="78" y="46" width="18" height="12" rx="2" />
    </svg>
  )
}

const ServicePicker = () => {
  const [selected, setSelected] = useState("web")
  const tabsRef = useRef([])
  const current = options.find((o) => o.id === selected)

  // Flechas, Inicio y Fin cambian de pestaña (patrón ARIA de tabs)
  const onKeyDown = (event, index) => {
    const last = options.length - 1
    let next = null
    if (event.key === "ArrowRight") next = index === last ? 0 : index + 1
    else if (event.key === "ArrowLeft") next = index === 0 ? last : index - 1
    else if (event.key === "Home") next = 0
    else if (event.key === "End") next = last
    if (next === null) return
    event.preventDefault()
    setSelected(options[next].id)
    tabsRef.current[next]?.focus()
  }

  return (
    <aside className="browser" aria-label="Elige qué necesitas">
      <div className="browser-bar">
        <span className="traffic" aria-hidden="true">
          <i className="t-close" />
          <i className="t-min" />
          <i className="t-max" />
        </span>
        <span className="address">
          <Lock size={12} aria-hidden="true" />
          <span>febacode.com{current.to}</span>
        </span>
      </div>

      <div className="browser-tabs" role="tablist" aria-label="Tipo de servicio">
        {options.map((o, i) => (
          <button
            key={o.id}
            ref={(el) => (tabsRef.current[i] = el)}
            type="button"
            role="tab"
            id={`picker-tab-${o.id}`}
            aria-selected={selected === o.id}
            aria-controls={`picker-panel-${o.id}`}
            tabIndex={selected === o.id ? 0 : -1}
            className="b-tab"
            onClick={() => setSelected(o.id)}
            onKeyDown={(e) => onKeyDown(e, i)}
          >
            {o.tab}
          </button>
        ))}
      </div>

      {/* Los cuatro paneles se apilan en la misma celda: la ventana siempre mide lo que el
          más alto y no "salta" al cambiar de pestaña. Los inactivos quedan inertes y ocultos. */}
      <div className="browser-pages">
        {options.map((o) => {
          const active = o.id === selected
          return (
            <div
              key={o.id}
              className={`browser-page${active ? " is-active" : ""}`}
              id={`picker-panel-${o.id}`}
              role="tabpanel"
              aria-labelledby={`picker-tab-${o.id}`}
              inert={!active}
            >
              <div className="wp-nav" aria-hidden="true">
                <span className="wp-logo">FebaCode</span>
                <span className="wp-dots">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="wp-body">
                <div className="wp-copy">
                  <h2>{o.title}</h2>
                  <p>{o.text}</p>
                  <div className="wp-price">
                    {hasFromPrice(o.id) ? (
                      <>
                        <span>Desde</span>
                        <strong>{formatMXN(pillars[o.id].from)} MXN</strong>
                      </>
                    ) : (
                      <strong className="wp-quote">{fromLabel(o.id)}</strong>
                    )}
                  </div>
                  <Link to={o.to} className="wp-link">
                    Ver servicio <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
                <div className="wp-art">
                  <Art id={o.id} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </aside>
  )
}

export default ServicePicker
