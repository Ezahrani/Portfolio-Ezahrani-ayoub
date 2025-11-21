'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'

interface VideoCardProps {
  id: string
  title: string
  description: string
  videoUrl: string
  technologies: string[]
  index: number
  mediaPosition?: 'left' | 'right'
}

export default function VideoCard({
  id,
  title,
  description,
  videoUrl,
  technologies,
  index,
  mediaPosition = 'left',
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group overflow-hidden rounded-2xl border border-accent/25 bg-dark-900/50 backdrop-blur-sm transition-all duration-300 hover:border-accent/50"
    >
      <div
        className={`grid grid-cols-1 gap-0 md:grid-cols-2 ${
          mediaPosition === 'left' ? '' : 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1'
        }`}
      >
        <div className="relative bg-dark-800/70">
          {!isPlaying ? (
            <>
              <video
                src={videoUrl}
                className="w-full h-56 md:h-full object-cover"
                preload="auto"
                muted
                autoPlay
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePlay}
                  aria-label={`Watch ${title} demo`}
                  className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-dark-950 shadow-lg hover:bg-accent/80"
                >
                  <Play size={32} className="ml-1" fill="currentColor" />
                </motion.button>
              </div>
            </>
          ) : (
            <video
              key={`${id}-player`}
              src={videoUrl}
              className="w-full h-full object-cover"
              autoPlay
              controls
              controlsList="nodownload"
              playsInline
            />
          )}
        </div>

        <div className="flex flex-col gap-6 bg-dark-950/60 p-6 md:p-8 border-t border-accent/10 md:border-t-0 md:border-l md:border-l-accent/10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-accent/80">
              Projet #{index + 1}
            </div>
            <h3 className="text-2xl font-semibold text-white leading-tight md:leading-snug">
              {title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent/70">
              Langages & Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={`${id}-${tech}`}
                  className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-sm text-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePlay}
            aria-label={`Watch ${title} demo`}
            className="inline-flex items-center justify-center gap-2 self-start rounded-lg border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent/20"
          >
            <Play size={16} />
            Watch the demo
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
