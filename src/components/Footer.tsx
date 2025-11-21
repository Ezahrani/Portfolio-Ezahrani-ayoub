'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-dark-900/50 border-t border-accent/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-2xl font-bold text-accent">CodeFin</h3>
            <p className="text-gray-400">Custom web & mobile solutions from Colombes, Île-de-France.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-1 text-gray-300"
          >
            <p className="font-semibold text-white">Contact</p>
            <a href="mailto:ezahraniayoub@gmail.com" className="hover:text-accent transition-colors">
              ezahraniayoub@gmail.com
            </a>
            <a href="tel:+33744394339" className="hover:text-accent transition-colors">
              +33 7 44 39 43 39
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400"
          >
            <p>CodeFin • Colombes, Île-de-France</p>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 mt-8 border-t border-accent/10 text-center text-gray-500"
        >
          <p>© 2024 CodeFin. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
