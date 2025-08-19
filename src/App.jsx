"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import DesarrolloWeb from "./pages/services/DesarrolloWeb"
import SistemasEmpresariales from "./pages/services/SistemasEmpresariales"
import PlataformasIA from "./pages/services/PlataformasIA"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desarrolloweb" element={<DesarrolloWeb />} />
          <Route path="/sistemasempresariales" element={<SistemasEmpresariales />} />
          <Route path="/plataformasia" element={<PlataformasIA />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
