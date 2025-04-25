"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Hammer } from "lucide-react"
import ProjectCard from "../cards/ProjectCard"
import ScrollReveal from "../ScrollReveal"
import StaggerReveal from "../StaggerReveal"
import "../../styles/Projects.css"
import unii from "../../assets/unii.png"
import pc from "../../assets/bpcd_logo.png"

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
      title: "UniiMarket",
      // client: "VetCare",
      description: "Plataforma web de delivery para comunidades educativas, que conecta a estudiantes, docentes y personal para comprar y vender productos fácilmente.",
      image: unii,
      categories: ["web"],
    },
    {
      id: 2,
      title: "BestPCDeals",
      //client: "FashionStore",
      description: "Plataforma inteligente para armar tu PC ideal y encontrar las mejores ofertas reales en componentes.",
      image: pc,
      categories: ["web", "ai"],
    },
  ]

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter(
        (project) =>
          Array.isArray(project.categories) &&
          project.categories.includes(activeCategory)
      )

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
    <section id="proyectos" className="projects section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Proyectos en puerta</h2>
            <p className="section-subtitle">Conoce algunos de los proyectos en los estamos trabajando</p>
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
                {filteredProjects.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="no-projects-card"
                  >
                    <div className="no-projects-content">
                      <motion.div
                        className="icon-wrapper"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Hammer size={48} strokeWidth={1.5} />
                      </motion.div>
                      <h4>
                        {activeCategory === "app"
                          ? "Próximamente trabajaremos en apps móviles"
                          : "Sin proyectos por el momento"}
                      </h4>
                      <p>Estamos preparando algo increíble. ¡Vuelve pronto!</p>
                    </div>
                  </motion.div>
                ) : (
                  filteredProjects.map((project) => (
                    <div key={project.id} className="stagger-item">
                      <ProjectCard project={project} />
                    </div>
                  ))
                )}
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
              Haz realidad tu proyecto
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Projects
