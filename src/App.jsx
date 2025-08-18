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
          <Route path="/desarrollo-web" element={<DesarrolloWeb />} />
          <Route path="/sistemas-empresariales" element={<SistemasEmpresariales />} />
          <Route path="/plataformas-ia" element={<PlataformasIA />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
