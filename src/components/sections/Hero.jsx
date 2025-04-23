"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import "../../styles/Hero.css"
import codigoImg from "../../assets/codigo.png";


const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.6,
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  }

  const floatingElements = Array(5)
    .fill()
    .map((_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 5}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.1,
    }))

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
    <section id="inicio" className="hero">
      <div className="hero-background">
        {floatingElements.map((el) => (
          <div
            key={el.id}
            className="floating-element"
            style={{
              width: `${el.size}px`,
              height: `${el.size}px`,
              left: el.left,
              top: el.top,
              animationDuration: el.animationDuration,
              animationDelay: el.delay,
              opacity: el.opacity,
            }}
          />
        ))}
      </div>

      <motion.div className="container hero-container" variants={containerVariants} initial="hidden" animate="visible">
        <div className="hero-content">
          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="text-gradient">Transformamos</span> ideas en soluciones digitales que conectan.
          </motion.h1>

          <motion.p className="hero-subtitle" variants={itemVariants}>
            Desarrollamos software, sitios web e interfaces inteligentes que impulsan tu negocio con tecnología de
            vanguardia.
          </motion.p>

          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className="btn btn-cta"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Cotiza tu proyecto <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>

        <motion.div className="hero-image" variants={imageVariants}>
          <div className="hero-image-container">
            <div className="hero-image-overlay"></div>
            <img src={codigoImg} alt="Soluciones digitales" />
          </div>
        </motion.div>
      </motion.div>

      <div className="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
