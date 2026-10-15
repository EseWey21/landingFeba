"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import "../../styles/Hero.css"

const Hero = () => {
  const goTo = (event, sectionId) => { event.preventDefault(); document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" }) }
  const rise = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }
  return <section id="inicio" className="hero hero-centered">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-glow hero-glow-one" aria-hidden="true" />
    <div className="hero-glow hero-glow-two" aria-hidden="true" />
    <div className="hero-glow hero-glow-three" aria-hidden="true" />
    <div className="hero-glow hero-glow-four" aria-hidden="true" />
    <div className="hero-glow hero-glow-five" aria-hidden="true" />
    <motion.div className="container hero-center-content" initial="hidden" animate="visible" transition={{ staggerChildren: .13, delayChildren: .15 }}>
      <motion.h1 className="hero-title" variants={rise}>Tecnología que convierte<br /><span>ideas complejas</span> en resultados.</motion.h1>
      <motion.p className="hero-subtitle" variants={rise}>Diseñamos y construimos plataformas, sistemas e inteligencia artificial para empresas que quieren avanzar.</motion.p>
      <motion.div className="hero-cta" variants={rise}><a href="#contacto" onClick={(event) => goTo(event, "contacto")} className="btn btn-cta">Cotiza tu proyecto <ArrowRight size={18} /></a><a href="#servicios" onClick={(event) => goTo(event, "servicios")} className="btn hero-outline">Conoce nuestros servicios</a></motion.div>
      
    </motion.div>
  </section>
}

export default Hero
