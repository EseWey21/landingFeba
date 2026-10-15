import { Link } from "react-router-dom"

// Botón/enlace. `to` = ruta interna; `href` = externo o ancla.
const Button = ({ variant = "primary", size, to, href, external, className = "", children, ...rest }) => {
  const cls = `btn btn-${variant}${size === "sm" ? " btn-sm" : ""} ${className}`.trim()
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  const extra = external ? { target: "_blank", rel: "noopener noreferrer" } : {}
  return <a href={href} className={cls} {...extra} {...rest}>{children}</a>
}

export default Button
