"use client"

import { motion } from "framer-motion"
import "../../styles/FeatureCard.css"

const FeatureCard = ({ feature }) => {
  const { icon, title, description } = feature

  return (
    <motion.div
      className="feature-card"
      whileHover={{
        y: -10,
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="feature-icon"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
      >
        {icon}
      </motion.div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>

      <motion.div
        className="feature-card-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      />
    </motion.div>
  )
}

export default FeatureCard
