'use client'

import { motion } from 'framer-motion'

interface Experience {
  company: string
  role: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
}

interface ExperienceBlockProps {
  experience: Experience
  index: number
}

export default function ExperienceBlock({ experience, index }: ExperienceBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="code-block glow-effect mb-6"
    >
      <div className="pt-8">
        <div className="text-accent font-bold mb-2">// {experience.company}</div>
        <div className="text-green-400 mb-4">
          const role = "<span className="text-yellow-400">{experience.role}</span>";
        </div>
        <div className="text-green-400 mb-4">
          const period = "<span className="text-yellow-400">{experience.period}</span>";
        </div>

        <div className="text-gray-400 mb-4 ml-4">{experience.description}</div>

        <div className="text-accent mb-3">Technologies:</div>
        <div className="flex flex-wrap gap-2 mb-4 ml-4">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-accent text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="text-accent mb-3">Résultats:</div>
        <ul className="ml-4 text-gray-400 space-y-1">
          {experience.achievements.map((achievement, i) => (
            <li key={i}>✓ {achievement}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
