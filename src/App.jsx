"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import DesarrolloWeb from "./pages/services/DesarrolloWeb"
import SistemasEmpresariales from "./pages/services/SistemasEmpresariales"
import PlataformasIA from "./pages/services/PlataformasIA"
import "./App.css"
import Snowfall from "react-snowfall"
function App() {
  return (
    <Router>
      <div className="app-container">
        <Snowfall 
          color="#82C3D9"
          snowflakeCount={200}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 9999
          }}
        />
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
