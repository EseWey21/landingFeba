const SectionHead = ({ eyebrow, title, children, id }) => (
  <div className="section-head" data-reveal>
    {eyebrow && <span className="eyebrow">{eyebrow}</span>}
    <h2 id={id}>{title}</h2>
    {children && <p>{children}</p>}
  </div>
)

export default SectionHead
