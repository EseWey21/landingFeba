import Button from "../components/ui/Button"

// Plantilla de páginas legales: título, fecha y secciones numeradas.
const LegalPage = ({ title, updated, intro, sections }) => (
  <>
    <section className="page-hero" aria-labelledby="legal-title">
      <div className="container page-hero-inner">
        <span className="tag">Legal</span>
        <h1 id="legal-title">{title}</h1>
        <p className="fine">Última actualización: {updated}</p>
      </div>
    </section>
    <section className="section legal">
      <div className="container legal-body">
        <p className="legal-intro">{intro}</p>
        {sections.map((s, i) => (
          <div key={s.title} className="legal-section">
            <h2>{i + 1}. {s.title}</h2>
            {s.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {s.list && (
              <ul className="plain-list">
                {s.list.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
        <div className="section-foot">
          <Button to="/" variant="ghost">Volver al inicio</Button>
        </div>
      </div>
    </section>
  </>
)

export default LegalPage
