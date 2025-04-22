"use client"

import { useEffect, useRef } from "react"

const StaggerReveal = ({ children, staggerDelay = 100, threshold = 0.1 }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = entry.target.querySelectorAll(".stagger-item")
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("visible")
            }, index * staggerDelay)
          })
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = containerRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [staggerDelay, threshold])

  return <div ref={containerRef}>{children}</div>
}

export default StaggerReveal
