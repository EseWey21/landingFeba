"use client"

import { useEffect, useRef } from "react"

const ParallaxEffect = ({ children, speed = 0.1, className = "" }) => {
  const ref = useRef(null)
  const initialOffsetY = useRef(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleScroll = () => {
      const scrollY = window.scrollY
      const rect = element.getBoundingClientRect()
      const offsetY = (rect.top + scrollY) * speed

      element.style.transform = `translateY(${offsetY}px)`
    }

    // Store initial position
    const rect = element.getBoundingClientRect()
    initialOffsetY.current = rect.top

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={`parallax-element ${className}`}>
      {children}
    </div>
  )
}

export default ParallaxEffect
