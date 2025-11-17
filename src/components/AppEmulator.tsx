'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'

interface AppEmulatorProps {
  appUrl: string
  appName: string
  isOpen: boolean
  onClose: () => void
}

export default function AppEmulator({ appUrl, appName, isOpen, onClose }: AppEmulatorProps) {
  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md h-[90vh] bg-black rounded-3xl shadow-2xl shadow-accent/50 border-8 border-gray-900 overflow-hidden flex flex-col"
      >
        {/* Phone Notch */}
        <div className="h-6 bg-black rounded-b-3xl mx-auto w-40 flex items-center justify-center">
          <div className="w-32 h-5 bg-black rounded-b-2xl"></div>
        </div>

        {/* App Header */}
        <div className="bg-gradient-to-r from-accent/20 to-accent/10 border-b border-accent/20 px-4 py-3 flex items-center justify-between">
          <h3 className="text-white font-bold text-sm">{appName}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* App Content */}
        <iframe
          src={appUrl}
          className="flex-1 w-full border-none"
          title={appName}
        />

        {/* Phone Home Indicator */}
        <div className="h-6 bg-black flex items-end justify-center pb-1">
          <div className="w-32 h-1 bg-gray-700 rounded-full"></div>
        </div>
      </motion.div>
    </motion.div>
  )
}
