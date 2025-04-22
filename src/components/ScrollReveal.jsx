"use client"

import { useEffect, useRef } from "react"

const ScrollReveal = ({ children, className, threshold = 0.1, delay = 0 }) => {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible")
          }, delay)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, delay])

  return (
    <div ref={ref} className={`fade-in ${className || ""}`}>
      {children}
    </div>
  )
}

export default ScrollReveal
