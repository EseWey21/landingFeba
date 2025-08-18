"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import "../../styles/ServiceCard.css"

const ServiceCard = ({ service }) => {
  const { icon, title, description, route } = service
  const navigate = useNavigate()

  const handleClick = () => {
    if (route) {
      navigate(route)
    }
  }

  return (
    <motion.div
      className="service-card"
      whileHover={{
        y: -10,
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="service-icon"
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
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <motion.button
        className="service-button"
        onClick={handleClick}
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        Ver más <ArrowRight size={16} />
      </motion.button>
    </motion.div>
  )
}

export default ServiceCard
