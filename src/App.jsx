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

const App = () => {
  useRouteMeta()
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
