import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Layout from "./components/layout/Layout"
import { routes, notFoundRoute } from "./routes.jsx"

const all = [...routes, notFoundRoute]

// En navegación del lado del cliente se actualizan título y descripción
// (el HTML prerenderizado ya trae los correctos para cada ruta).
const useRouteMeta = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    const route = all.find((r) => r.path === pathname) ?? notFoundRoute
    document.title = route.title
    document.querySelector('meta[name="description"]')?.setAttribute("content", route.description)
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `https://www.febacode.com${route.path === "*" ? "/" : route.path}`)
  }, [pathname])
}

// Al navegar a otra ruta (p. ej. desde el pie hacia el Aviso de Privacidad) la página
// debe abrir hasta arriba, no en la posición de scroll de la ruta anterior.
// Con ancla (#precios) se deja que el navegador se desplace a la sección.
const useScrollToTop = () => {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname, hash])
}

const App = () => {
  useRouteMeta()
  useScrollToTop()
  return (
    <Layout>
      <Routes>
        {all.map((r) => (
          <Route key={r.path} path={r.path} element={r.element} />
        ))}
      </Routes>
    </Layout>
  )
}

export default App
