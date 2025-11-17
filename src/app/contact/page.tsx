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
            Travaillons <span className="text-accent">ensemble</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Vous avez un projet en tête ? Je serais ravi de discuter avec vous et de transformer vos idées en réalité.
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
              <label className="block text-white font-medium mb-2">Votre nom</label>
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
              <label className="block text-white font-medium mb-2">Sujet</label>
              <input
                type="text"
                placeholder="Développement d'une application web"
                className="w-full px-4 py-3 bg-dark-800 border border-accent/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-white font-medium mb-2">Message</label>
              <textarea
                placeholder="Décrivez votre projet..."
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

      {/* Social Links */}
      <section className="py-20 px-4 md:px-8 bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Retrouvez-moi sur les <span className="text-accent">réseaux</span>
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: Mail, label: 'Email', href: 'mailto:contact@example.com' },
              { icon: Linkedin, label: 'LinkedIn', href: '#' },
              { icon: Github, label: 'GitHub', href: '#' },
              { icon: Twitter, label: 'Twitter', href: '#' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 px-6 py-3 bg-dark-800 border border-accent/20 rounded-lg hover:border-accent/50 hover:bg-accent/10 transition-all group"
              >
                <social.icon className="text-accent group-hover:scale-110 transition-transform" size={24} />
                <span className="text-white font-medium">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
