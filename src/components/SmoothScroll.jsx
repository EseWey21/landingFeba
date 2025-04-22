"use client"

import { useEffect, useRef } from "react"
import "../styles/SmoothScroll.css"

const SmoothScroll = ({ children }) => {
  const scrollingContainerRef = useRef(null)
  const data = useRef({
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  })

  useEffect(() => {
    // Don't apply smooth scroll on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return
    }

    requestAnimationFrame(() => smoothScrolling())

    const scrollingContainer = scrollingContainerRef.current
    const bodyHeight = () => {
      const scrollingContainerHeight = scrollingContainer.getBoundingClientRect().height
      document.body.style.height = `${scrollingContainerHeight}px`
    }

    bodyHeight()

    const handleResize = () => {
      bodyHeight()
    }

    // Ensure smooth scrolling works with anchor links
    const handleHashChange = () => {
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash)
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          })
        }
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const smoothScrolling = () => {
    // Don't apply smooth scroll on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return
    }

    data.current.current = window.scrollY
    data.current.previous += (data.current.current - data.current.previous) * data.current.ease
    data.current.rounded = Math.round(data.current.previous * 100) / 100

    if (scrollingContainerRef.current) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.current.rounded}px)`
    }

    requestAnimationFrame(() => smoothScrolling())
  }

  // If touch device, don't apply smooth scroll
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    return <>{children}</>
  }

  return (
    <div className="smooth-scroll-container">
      <div ref={scrollingContainerRef} className="smooth-scroll-content">
        {children}
      </div>
    </div>
  )
}

export default SmoothScroll
