import Header from "./Header"
import Footer from "./Footer"
import WhatsAppFab from "./WhatsAppFab"
import { useReveal } from "../../lib/useReveal"

const Layout = ({ children }) => {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" tabIndex={-1}>
        {children}
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

export default Layout
