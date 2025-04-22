"use client"

import React from "react"
import ReactDOM from "react-dom/client"
import { AnimatePresence } from "framer-motion"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence mode="wait">
      <App />
    </AnimatePresence>
  </React.StrictMode>,
)
