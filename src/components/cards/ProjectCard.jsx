"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "../../styles/ProjectCard.css";

const ProjectCard = ({ project }) => {
  const { title, description, image, link } = project;

  return (
    <motion.div
      className="project-card"
      whileHover={{
        y: -10,
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="project-image">
        <motion.img
          src={image || "/placeholder.svg"}
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="project-image-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-view-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Ver detalles
          </motion.a>
        </motion.div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Ver proyecto <ArrowRight size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
