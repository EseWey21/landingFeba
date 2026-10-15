import { MessageCircle } from "lucide-react"
import { waLink } from "../../config/site"

const WhatsAppFab = () => (
  <aside aria-label="Contacto rápido">
  <a className="wa-fab" href={waLink("flotante")} target="_blank" rel="noopener noreferrer" aria-label="Escríbenos por WhatsApp">
    <MessageCircle size={26} aria-hidden="true" />
  </a>
  </aside>
)

export default WhatsAppFab
