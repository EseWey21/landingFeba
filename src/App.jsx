import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import "./App.css"
//import SmoothScroll from "./components/SmoothScroll"
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage"
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage"
import Footer from "./components/Footer"

function App() {
  return (
    
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terminos-y-condiciones" element={<TermsAndConditionsPage />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    
  )
}

export default App




