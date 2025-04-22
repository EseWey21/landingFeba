"use client"

import { motion } from "framer-motion"
import "../styles/Logo.css"

const Logo = () => {
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
      <span className="logo-text">
        Feba
        <motion.span
          className="logo-highlight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Code
        </motion.span>
      </span>
      <motion.span
        className="logo-dot"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 0.5,
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
      />
    </motion.div>
  )
}

export default Logo
