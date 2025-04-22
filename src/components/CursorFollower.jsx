"use client"

import { useEffect, useState } from "react"
import "../styles/CursorFollower.css"

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      return
    }

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setHidden(false)
    }

    const handleMouseDown = () => setClicked(true)
    const handleMouseUp = () => setClicked(false)

    const handleLinkHoverStart = () => setLinkHovered(true)
    const handleLinkHoverEnd = () => setLinkHovered(false)

    const handleMouseLeave = () => setHidden(true)
    const handleMouseEnter = () => setHidden(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseenter", handleMouseEnter)

    // Add event listeners to all links and buttons
    const links = document.querySelectorAll("a, button, .clickable")
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHoverStart)
      link.addEventListener("mouseleave", handleLinkHoverEnd)
    })

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseenter", handleMouseEnter)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverStart)
        link.removeEventListener("mouseleave", handleLinkHoverEnd)
      })
    }
  }, [])

  // Add event listeners when new elements are added to the DOM
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          const links = document.querySelectorAll("a, button, .clickable")
          links.forEach((link) => {
            link.addEventListener("mouseenter", () => setLinkHovered(true))
            link.addEventListener("mouseleave", () => setLinkHovered(false))
          })
        }
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`cursor-follower ${hidden ? "hidden" : ""} ${clicked ? "clicked" : ""} ${linkHovered ? "link-hovered" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div className="cursor-follower-circle"></div>
      <div className="cursor-follower-dot"></div>
    </div>
  )
}

export default CursorFollower
