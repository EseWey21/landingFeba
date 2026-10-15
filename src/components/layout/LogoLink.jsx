import { Link, useLocation } from "react-router-dom"
import Logo from "./Logo"

// El logo lleva siempre al inicio, hasta arriba de la página. Si ya estamos en el
// Home, el clic no navega (la ruta no cambia): se desplaza hasta arriba y limpia el #.
const LogoLink = ({ onClick }) => {
  const { pathname } = useLocation()

  const handleClick = (event) => {
    if (pathname === "/") {
      event.preventDefault()
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
      if (window.location.hash) window.history.replaceState(null, "", "/")
    }
    onClick?.(event)
  }

  return (
    <Link to="/" className="header-logo" aria-label="FebaCode, ir al inicio" onClick={handleClick}>
      <Logo />
    </Link>
  )
}

export default LogoLink
