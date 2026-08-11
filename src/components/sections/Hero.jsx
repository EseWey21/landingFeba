"use client"

import { ArrowRight, MonitorSmartphone } from "lucide-react"
import { motion } from "framer-motion"
import "../../styles/Hero.css"
import "../../styles/HeroWindow.css"

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
      <motion.div className="hero-note hero-note-spacer" variants={rise} aria-hidden="true" />
    </motion.div>
    <motion.div className="container hero-preview-wrap" initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .65, ease: "easeOut" }}>
      <div className="hero-preview client-window">
        <div className="preview-bar mac-bar"><div className="mac-dots"><i /><i /><i /></div><span><MonitorSmartphone size={15} /> casaoliva.mx / inicio</span><div className="mac-window-actions">⌁ &nbsp; □</div></div>
        <div className="client-site">
          <nav className="client-nav"><b>CASA <span>OLIVA</span></b><div>Menú &nbsp;&nbsp; Nosotros &nbsp;&nbsp; Eventos <button>Reservar mesa</button></div></nav>
          <div className="client-hero"><div className="client-copy"><small>COCINA DE TEMPORADA · CDMX</small><h2>Sabores que<br />se quedan contigo.</h2><p>Una experiencia cálida, local y hecha para compartir.</p><button>Ver menú <ArrowRight size={12} /></button></div><div className="client-visual"><div className="olive-leaf leaf-one" /><div className="olive-leaf leaf-two" /><div className="plate"><i /><i /><i /></div><span>Reserva en línea<br /><b>Abierto hoy</b></span></div></div>
        </div>
      </div>
    </motion.div>
  </section>
}

export default Hero
