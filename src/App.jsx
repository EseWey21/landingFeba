"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import "./App.css"
import SmoothScroll from "./components/SmoothScroll"

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </SmoothScroll>
    </Router>
  )
}

export default App
