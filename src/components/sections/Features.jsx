"use client"

import { Palette, Shield, MessageSquare } from "lucide-react"
import FeatureCard from "../cards/FeatureCard"
import ScrollReveal from "../ScrollReveal"
import StaggerReveal from "../StaggerReveal"
import "../../styles/Features.css"
import uxui from "../../assets/uxui.png";
// import laptop from "../../assets/laptop2.png";
// import persona from "../../assets/persona.png";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <Palette size={48} />,
      title: "Diseño claro y profesional",
      description: "Interfaces elegantes y funcionales que reflejan la identidad de tu marca.",
    },
    {
      id: 2,
      icon: <Shield size={48} />,
      title: "Soluciones robustas y sostenibles",
      description: "Tecnología escalable y segura que crece con tu negocio.",
    },
    {
      id: 3,
      icon: <MessageSquare size={48} />,
      title: "Comunicación y soporte continuo",
      description: "Acompañamiento durante todo el proceso y después de la implementación.",
    },
  ]

  return (
    <section id="nosotros" className="features section">
      <div className="features-bg">
        <div className="features-bg-gradient"></div>
        <div className="features-bg-pattern"></div>
      </div>

      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">¿Por qué elegirnos?</h2>
            <p className="section-subtitle">Tecnología funcional, visualmente clara y creada contigo</p>
          </div>
        </ScrollReveal>

        <StaggerReveal staggerDelay={150}>
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="stagger-item">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </StaggerReveal>

        <ScrollReveal delay={300}>
          <div className="features-showcase">
            <div className="features-showcase-content">
              <h3>Experiencia de usuario excepcional</h3>
              <p>
                Nuestras soluciones no solo funcionan bien, sino que también ofrecen una experiencia de usuario
                intuitiva y agradable.
              </p>
              <ul className="features-list">
                <li>Interfaces intuitivas y fáciles de usar</li>
                <li>Diseño responsive para todos los dispositivos</li>
                <li>Optimización de rendimiento y velocidad</li>
              </ul>
            </div>
            <div className="features-showcase-image">
              <div className="features-image-container">
                <img src={uxui} alt="Experiencia de Usuario" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Features
