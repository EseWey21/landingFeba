"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import ProjectCard from "../cards/ProjectCard"
import ScrollReveal from "../ScrollReveal"
import StaggerReveal from "../StaggerReveal"
import "../../styles/Projects.css"

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "Todos" },
    { id: "web", name: "Web" },
    { id: "app", name: "Apps" },
    { id: "ai", name: "IA" },
  ]

  const projects = [
    {
      id: 1,
      title: "Sistema de Gestión Clínica",
      client: "VetCare",
      description: "Plataforma integral para administración de citas, historias clínicas y facturación.",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
    },
    {
      id: 2,
      title: "E-commerce Personalizado",
      client: "FashionStore",
      description: "Tienda online con catálogo dinámico, pasarela de pagos y gestión de inventario.",
      image: "/placeholder.svg?height=300&width=500",
      category: "web",
    },
    {
      id: 3,
      title: "Asistente Virtual con IA",
      client: "TechSolutions",
      description: "Chatbot inteligente para atención al cliente y resolución de consultas frecuentes.",
      image: "/placeholder.svg?height=300&width=500",
      category: "ai",
    },
    {
      id: 4,
      title: "App de Gestión de Gimnasio",
      client: "FitLife",
      description: "Aplicación móvil para gestión de membresías, clases y rutinas personalizadas.",
      image: "/placeholder.svg?height=300&width=500",
      category: "app",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  // Función para manejar la navegación suave sin cambiar la URL
  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="proyectos" className="projects section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Lo que hemos creado</h2>
            <p className="section-subtitle">Conoce algunos de nuestros proyectos más destacados</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="projects-filter">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
                {activeCategory === category.id && (
                  <motion.span
                    className="filter-indicator"
                    layoutId="filterIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="projects-grid-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="projects-grid"
            >
              <StaggerReveal staggerDelay={100}>
                {filteredProjects.map((project) => (
                  <div key={project.id} className="stagger-item">
                    <ProjectCard project={project} />
                  </div>
                ))}
              </StaggerReveal>
            </motion.div>
          </AnimatePresence>
        </div>

        <ScrollReveal delay={400}>
          <div className="projects-cta">
            <h3>¿Tienes un proyecto en mente?</h3>
            <p>Estamos listos para ayudarte a hacerlo realidad</p>
            <motion.a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Ver más proyectos
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Projects
