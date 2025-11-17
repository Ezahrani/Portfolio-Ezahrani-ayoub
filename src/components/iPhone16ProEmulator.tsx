'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Battery, Wifi, Signal } from 'lucide-react'

interface iPhone16ProEmulatorProps {
  children: React.ReactNode
  appName: string
  isOpen: boolean
  onClose: () => void
}

export default function iPhone16ProEmulator({
  children,
  appName,
  isOpen,
  onClose,
}: iPhone16ProEmulatorProps) {
  const [time, setTime] = useState('09:41')
  const [battery, setBattery] = useState(85)

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
      className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative"
        style={{
          width: '384px',
          aspectRatio: '1179/2556',
        }}
      >
        {/* iPhone 16 Pro Body */}
        <div className="w-full h-full bg-black rounded-[50px] shadow-2xl border-8 border-gray-900 overflow-hidden flex flex-col relative"
          style={{
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Status Bar */}
          <div className="bg-black px-6 py-2 flex justify-between items-center text-white text-xs font-semibold z-10">
            <span className="font-medium">{time}</span>
            <div className="flex gap-1 items-center">
              <Signal size={12} className="fill-white" />
              <Wifi size={12} className="fill-white" />
              <div className="flex items-center gap-0.5">
                <div className="w-0.5 h-2 bg-white rounded-sm"></div>
                <div className="w-0.5 h-3 bg-white rounded-sm"></div>
                <div className="w-0.5 h-4 bg-white rounded-sm"></div>
              </div>
              <Battery size={12} className="fill-white" />
            </div>
          </div>

          {/* Dynamic Island */}
          <div className="h-8 bg-black flex justify-center items-center relative">
            <div className="w-32 h-6 bg-black rounded-full border border-gray-800 flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          {/* App Content - Scrollable */}
          <div className="flex-1 bg-white overflow-hidden overflow-y-auto overflow-x-hidden scroll-smooth w-full"
            style={{
              scrollBehavior: 'smooth',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {children}
          </div>

          {/* Home Indicator */}
          <div className="h-7 bg-black flex items-center justify-center">
            <div className="w-32 h-1 bg-gray-700 rounded-full"></div>
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClose}
          className="absolute -top-20 right-0 bg-white text-black p-4 rounded-full hover:bg-gray-200 transition-all shadow-lg"
        >
          <X size={24} strokeWidth={3} />
        </motion.button>

        {/* Info Panel */}
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 bg-gray-900 border border-gray-700 rounded-xl p-4 w-36 text-white text-xs space-y-3 shadow-xl">
          <div>
            <p className="text-gray-400 text-xs mb-1">Application</p>
            <p className="font-bold text-sm text-white truncate">{appName}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs mb-1">Battery</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${battery}%` }}
                ></div>
              </div>
              <span className="font-bold text-xs">{battery}%</span>
            </div>
          </div>
          <div className="text-gray-400 text-xs">
            <p>iPhone 16 Pro</p>
            <p>1179×2556px</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
