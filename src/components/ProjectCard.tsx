'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardProps {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  demoUrl?: string
  githubUrl?: string
  index: number
}

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  image,
  demoUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group relative overflow-hidden rounded-xl bg-dark-800 border border-accent/20 hover:border-accent/50 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden bg-dark-700">
        <div className="w-full h-full bg-gradient-to-br from-accent/10 to-transparent flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🎨</div>
            <p className="text-gray-400">{title}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-accent/10 border border-accent/30 rounded text-accent"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="px-2 py-1 text-xs text-gray-400">
              +{technologies.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-accent/10">
          <Link
            href={`/projects/${id}`}
            className="flex-1 px-4 py-2 bg-accent/10 border border-accent/30 text-accent rounded hover:bg-accent/20 transition-all text-sm font-medium text-center"
          >
            Détails
          </Link>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-accent/10 border border-accent/30 text-accent rounded hover:bg-accent/20 transition-all"
            >
              <ExternalLink size={18} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 bg-accent/10 border border-accent/30 text-accent rounded hover:bg-accent/20 transition-all"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
