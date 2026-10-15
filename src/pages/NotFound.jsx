import Button from "../components/ui/Button"
import { waLink } from "../config/site"

const NotFound = () => (
  <section className="page-hero notfound" aria-labelledby="nf-title">
    <div className="container page-hero-inner">
      <span className="tag">Error 404</span>
      <h1 id="nf-title">No encontramos esa página.</h1>
      <p className="page-lead">Puede que el enlace haya cambiado. Vuelve al inicio o escríbenos por WhatsApp.</p>
      <div className="hero-cta">
        <Button to="/">Ir al inicio</Button>
        <Button href={waLink("default")} external variant="secondary">Escribir por WhatsApp</Button>
      </div>
    </div>
  </section>
)

export default NotFound
