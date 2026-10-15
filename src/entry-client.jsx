import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { SpeedInsights } from "@vercel/speed-insights/react"
import "@fontsource-variable/manrope/wght.css"
import "@fontsource/dm-mono/400.css"
import "@fontsource/dm-mono/500.css"
import "./styles/tokens.css"
import "./styles/base.css"
import "./styles/layout.css"
import "./styles/home.css"
import "./styles/pages.css"
import App from "./App"

const container = document.getElementById("root")
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
      <SpeedInsights />
    </BrowserRouter>
  </StrictMode>
)

// Indica al script de <head> que la app cargó (ver la salvaguarda de reveals)
window.__appReady = true

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
