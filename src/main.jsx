"use client"

import React from "react"
import ReactDOM from "react-dom/client"
import { AnimatePresence } from "framer-motion"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom"; // Importa BrowserRouter

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* Envuelve App con BrowserRouter */}
      <AnimatePresence mode="wait">
        <App />
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>,
)
