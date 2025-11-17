'use client'

import { motion } from 'framer-motion'

interface MobilePhoneMockupProps {
  title: string
  description: string
  children: React.ReactNode
}

export default function MobilePhoneMockup({
  title,
  description,
  children,
}: MobilePhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-6"
    >
      <div className="text-center mb-4">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>

      {/* Phone Mockup */}
      <div className="relative w-full max-w-sm">
        {/* Phone frame */}
        <div className="relative bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-800">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl z-20" />

          {/* Screen */}
          <div className="relative w-full bg-dark-900 overflow-hidden" style={{ aspectRatio: '9/19.5' }}>
            {children}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-700 rounded-full" />
        </div>

        {/* Glow effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      </div>
    </motion.div>
  )
}
