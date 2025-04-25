"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Home, ArrowLeft, Search } from "lucide-react"
import Footer from "../components/Footer"
import "../styles/NotFound.css"

const NotFound = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Cambiar el título de la página
    document.title = "Página no encontrada | FebaCode"
  }, [])

  // Función para volver a la página anterior
  const goBack = () => {
    window.history.back()
  }

  // Función para ir a la página de inicio y asegurar que el scroll funcione
  const goHome = () => {
    // Navegar a la página de inicio
    navigate("/")

    // Asegurar que el scroll se restablezca y funcione correctamente
    // Esto se ejecutará después de que la navegación se complete
    setTimeout(() => {
      window.scrollTo(0, 0)
      // Habilitar el scroll
      document.body.style.overflow = "auto"
      document.documentElement.style.overflow = "auto"

      // Eliminar cualquier clase que pueda estar bloqueando el scroll
      document.body.classList.remove("no-scroll")
    }, 100)
  }

  // Variantes para las animaciones
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

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 0.5,
      },
    },
  }

  const buttonVariants = {
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

  // Elementos flotantes para el fondo
  const floatingElements = Array(12)
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

  return (
    <div className="not-found-page">
      <main className="not-found-main">
        <div className="not-found-background">
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
          <div className="not-found-bg-gradient"></div>
        </div>

        <motion.div
          className="container not-found-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="not-found-content" variants={itemVariants}>
            <motion.div className="not-found-numbers" variants={numberVariants}>
              <motion.div
                className="number-4"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              >
                4
              </motion.div>
              <motion.div
                className="number-circle"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <motion.div
                  className="circle-inner"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <motion.div
                className="number-4"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
              >
                4
              </motion.div>
            </motion.div>

            <motion.h1 className="not-found-title" variants={itemVariants}>
              <span className="text-gradient">Página</span> no encontrada
            </motion.h1>

            <motion.p className="not-found-subtitle" variants={itemVariants}>
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </motion.p>

            <motion.div className="not-found-actions" variants={itemVariants}>
              <motion.button
                className="btn btn-secondary"
                onClick={goBack}
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <ArrowLeft size={20} /> Volver atrás
              </motion.button>

              <motion.button
                onClick={goHome}
                className="btn btn-cta"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Home size={20} /> Ir al inicio
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="not-found-illustration"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.8,
              },
            }}
          >
            <div className="illustration-container">
              <motion.div
                className="search-animation"
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 5,
                  ease: "easeInOut",
                }}
              >
                <div className="search-icon-container">
                  <Search size={80} strokeWidth={1.5} className="search-icon" />
                  <motion.div
                    className="search-pulse"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>

              <motion.div
                className="dots-pattern"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 60,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />

              <motion.div
                className="orbit-circle"
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 30,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <motion.div
                  className="orbit-dot"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

export default NotFound
