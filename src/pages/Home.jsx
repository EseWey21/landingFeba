"use client"

import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/sections/Hero"
import Services from "../components/sections/Services"
import Features from "../components/sections/Features"
import Projects from "../components/sections/Projects"
import CallToAction from "../components/sections/CallToAction"
import Footer from "../components/Footer"

const Home = () => {
  // Preload animations
  useEffect(() => {
    // Add animation classes to stagger items when they become visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const staggerItems = entry.target.querySelectorAll(".stagger-item")
            staggerItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible")
              }, index * 100)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    // Observe all stagger containers
    document.querySelectorAll(".stagger-container").forEach((container) => {
      observer.observe(container)
    })

    return () => {
      document.querySelectorAll(".stagger-container").forEach((container) => {
        observer.unobserve(container)
      })
    }
  }, [])

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <Projects />
      {/* <Testimonials /> */}
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home
