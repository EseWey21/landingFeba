"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import TestimonialCard from "../cards/TestimonialCard"
import ScrollReveal from "../ScrollReveal"
import "../../styles/Testimonials.css"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Claudia M.",
      company: "Clínica VetCare",
      quote:
        "Feba Code entendió exactamente lo que mi negocio necesitaba. El sistema que desarrollaron ha optimizado nuestros procesos y mejorado la experiencia de nuestros clientes.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Roberto G.",
      company: "GymFit",
      quote:
        "La plataforma de gestión de membresías que crearon para nuestro gimnasio ha sido un cambio radical. Ahora podemos enfocarnos en nuestros clientes en lugar de en el papeleo.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Laura P.",
      company: "FashionStore",
      quote:
        "Nuestras ventas aumentaron un 40% desde que implementamos la tienda online desarrollada por Feba Code. La interfaz es intuitiva y nuestros clientes la adoran.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const nextTestimonial = () => {
    setAutoplay(false)
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setAutoplay(false)
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="testimonials section">
      <div className="testimonials-bg">
        <div className="testimonials-bg-gradient"></div>
        <div className="testimonials-bg-pattern"></div>
      </div>

      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
            <p className="section-subtitle">Historias de éxito de quienes han confiado en nosotros</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="testimonials-slider">
            <motion.button
              className="testimonial-nav prev"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <div className="testimonials-container">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="testimonial-slide"
                >
                  <TestimonialCard testimonial={testimonials[currentIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              className="testimonial-nav next"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>

          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => {
                  setAutoplay(false)
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Testimonials
