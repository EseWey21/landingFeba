import { renderToString } from "react-dom/server"
import { StaticRouter } from "react-router-dom"
import App from "./App"
import { routes, notFoundRoute } from "./routes.jsx"
import { claims } from "./config/claims"
import { pillars, formatMXN } from "./config/pricing"

// Devuelve el HTML de una ruta y los datos de su <head>.
export function render(url) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
  )
  const route = routes.find((r) => r.path === url) ?? notFoundRoute
  return {
    html,
    title: route.title,
    description: route.description,
    jsonLd: route.jsonLd ? route.jsonLd() : [],
  }
}

export { routes, notFoundRoute, claims, pillars, formatMXN }
