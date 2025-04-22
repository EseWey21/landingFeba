"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import "../../styles/ProjectCard.css"

const ProjectCard = ({ project }) => {
  const { title, client, description, image } = project

  // Función para manejar la navegación suave sin cambiar la URL
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      // Calcular la posición de la sección
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY

      // Scroll suave a la sección
      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.div
      className="project-card"
      whileHover={{
        y: -10,
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="project-image">
        <motion.img
          src={image || "/placeholder.svg"}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="project-image-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button className="project-view-btn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Ver detalles
          </motion.button>
        </motion.div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-client">Cliente: {client}</p>
        <p className="project-description">{description}</p>
        <motion.a
          href="#proyectos"
          onClick={(e) => e.preventDefault()}
          className="project-button"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Ver proyecto <ArrowRight size={16} />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default ProjectCard
