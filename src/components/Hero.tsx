'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 text-center relative z-10"
      >
        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Full-Stack & Mobile </span>
          <span className="text-accent">Developer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          variants={itemVariants}
          className="font-mono text-base md:text-lg text-gray-300 mb-8 w-full max-w-4xl mx-auto space-y-4 leading-relaxed text-left"
        >
          <p>
            I am a versatile developer specialized in mobile applications, web platforms, and complete back-end systems.
          </p>
          <p>
            With over 5 years of experience, I have built and delivered high-quality products across sports, e-commerce, aviation,
            gaming, and digital services.
          </p>
          <p>
            I handle the entire development cycle—requirements analysis, architecture and system design, mobile development (Flutter,
            React Native), web & API development (Node.js, Laravel, Firebase), third-party integrations, UI/UX optimization, and
            long-term maintenance.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button className="px-8 py-3 bg-accent text-dark-950 font-bold rounded-lg hover:bg-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
            See My Projects
          </button>
          <button className="px-8 py-3 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all duration-300">
            Contact Me
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ArrowDown className="text-accent" size={32} />
        </motion.div>
      </motion.div>
    </section>
  )
}
