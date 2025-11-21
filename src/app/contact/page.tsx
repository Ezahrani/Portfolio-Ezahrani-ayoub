'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let’s <span className="text-accent">Work Together</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Do you have a project in mind? I’d be happy to discuss it with you and help turn your ideas into reality.
          </p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label className="block text-white font-medium mb-2">Your Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-dark-800 border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-dark-800 border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-white font-medium mb-2">Subject</label>
              <input
                type="text"
                placeholder="Web Application Development"
                className="w-full px-4 py-3 bg-dark-800 border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-white font-medium mb-2">Message</label>
              <textarea
                placeholder="Describe your project..."
                rows={6}
                className="w-full px-4 py-3 bg-dark-800 border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-3 bg-accent text-dark-950 font-bold rounded-lg hover:bg-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
            >
              Envoyer le message
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
