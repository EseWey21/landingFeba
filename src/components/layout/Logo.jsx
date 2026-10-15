import logoClaro from "../../assets/logo-claro.webp"
import logoOscuro from "../../assets/logo-oscuro.webp"

// Dos versiones del logo: se muestra la que corresponde al tema (ver layout.css).
const Logo = () => (
  <span className="logo">
    <img className="logo-img logo-light" src={logoClaro} alt="FebaCode" width="244" height="103" decoding="async" />
    <img className="logo-img logo-dark" src={logoOscuro} alt="" aria-hidden="true" width="244" height="103" loading="lazy" decoding="async" />
  </span>
)

export default Logo
