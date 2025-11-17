'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Volume2, VolumeX, Battery, Signal, Wifi } from 'lucide-react'

interface AdvancedMobileEmulatorProps {
  children: React.ReactNode
  appName: string
  isOpen: boolean
  onClose: () => void
}

export default function AdvancedMobileEmulator({
  children,
  appName,
  isOpen,
  onClose,
}: AdvancedMobileEmulatorProps) {
  const [isMuted, setIsMuted] = useState(false)
  const [battery, setBattery] = useState(85)
  const [time, setTime] = useState('09:41')

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      setTime(`${hours}:${minutes}`)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative"
      >
        {/* Phone Body */}
        <div className="w-96 h-[800px] bg-black rounded-3xl shadow-2xl shadow-accent/50 border-8 border-gray-900 overflow-hidden flex flex-col">
          {/* Status Bar */}
          <div className="bg-black px-6 py-2 flex justify-between items-center text-white text-xs font-semibold">
            <span>{time}</span>
            <div className="flex gap-1 items-center">
              <Signal size={14} />
              <Wifi size={14} />
              <div className="flex items-center gap-0.5">
                <div className="w-1 h-2 bg-white rounded-sm"></div>
                <div className="w-1 h-3 bg-white rounded-sm"></div>
                <div className="w-1 h-4 bg-white rounded-sm"></div>
              </div>
              <Battery size={14} />
            </div>
          </div>

          {/* Notch */}
          <div className="h-7 bg-black flex justify-center items-center">
            <div className="w-40 h-6 bg-black rounded-b-3xl border-b-2 border-l-2 border-r-2 border-gray-800"></div>
          </div>

          {/* App Content */}
          <div className="flex-1 bg-white overflow-hidden">
            <div className="w-full h-full overflow-y-auto overflow-x-hidden">
              {children}
            </div>
          </div>

          {/* Home Indicator */}
          <div className="h-6 bg-black flex items-end justify-center pb-1">
            <div className="w-32 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="absolute -top-16 right-0 bg-accent text-black p-3 rounded-full hover:bg-accent/80 transition-all shadow-lg"
        >
          <X size={24} />
        </motion.button>

        {/* Info Panel */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 bg-dark-800 border border-accent/30 rounded-lg p-4 w-28 text-white text-xs space-y-2">
          <div>
            <p className="text-gray-400">App</p>
            <p className="font-bold text-accent truncate">{appName}</p>
          </div>
          <div>
            <p className="text-gray-400">Battery</p>
            <p className="font-bold">{battery}%</p>
          </div>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="w-full bg-accent/20 text-accent py-1 rounded text-xs font-bold hover:bg-accent/30 transition-all flex items-center justify-center gap-1"
          >
            {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
            {isMuted ? 'Muted' : 'Sound'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
