"use client"

import { Monitor, Building2, BrainCircuit } from "lucide-react"
import ServiceCard from "../cards/ServiceCard"
import StaggerReveal from "../StaggerReveal"
import ScrollReveal from "../ScrollReveal"
import "../../styles/Services.css"

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Monitor size={48} />,
      title: "Desarrollo Web",
      description: "Sitios, landings, eCommerce y sistemas administrativos adaptados a tus necesidades.",
      route: "/desarrollo-web",
    },
    {
      id: 2,
      icon: <Building2 size={48} />,
      title: "Sistemas Empresariales",
      description: "Control de ingresos, inventarios, CRM y agendamientos para optimizar tus procesos.",
      route: "/sistemas-empresariales",
    },
    {
      id: 3,
      icon: <BrainCircuit size={48} />,
      title: "Plataformas con IA",
      description: "Asistentes inteligentes, comparadores y cazadores de precios con tecnología avanzada.",
      route: "/plataformas-ia",
    },
  ]

  return (
    <section id="servicios" className="services section">
      <div className="services-bg-elements">
        <div className="services-bg-circle circle-1"></div>
        <div className="services-bg-circle circle-2"></div>
        <div className="services-bg-circle circle-3"></div>
      </div>

      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <h2 className="section-title">¿Qué hacemos?</h2>
            <p className="section-subtitle">Ofrecemos soluciones digitales personalizadas para impulsar tu negocio</p>
          </div>
        </ScrollReveal>

        <StaggerReveal staggerDelay={150}>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="stagger-item">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  )
}

export default Services
