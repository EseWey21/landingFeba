"use client"

import { Quote } from "lucide-react"
import { motion } from "framer-motion"
import "../../styles/TestimonialCard.css"

const TestimonialCard = ({ testimonial }) => {
  const { name, company, quote, image } = testimonial

  return (
    <motion.div
      className="testimonial-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="testimonial-quote-icon"
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 0.2, rotate: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Quote size={32} />
      </motion.div>
      <p className="testimonial-text">{quote}</p>
      <div className="testimonial-author">
        <motion.div
          className="testimonial-author-image"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5,
          }}
        >
          <img src={image || "/placeholder.svg"} alt={name} />
        </motion.div>
        <div className="testimonial-author-info">
          <h4 className="testimonial-author-name">{name}</h4>
          <p className="testimonial-author-company">{company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
