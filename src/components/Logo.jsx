"use client"

import { motion } from "framer-motion"
import "../styles/Logo.css"
import febaLogoBlanco from "../assets/feba_completo_blanco.png"
import febaLogo from "../assets/feba_completo.png"

const Logo = ({ scrolled = false }) => {
  return (
    <motion.div
      className="logo"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <img src={scrolled ? febaLogo : febaLogoBlanco} alt="Feba Code" className="logo-image" />
    </motion.div>
  )
}

export default Logo
