'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900/50 border-t border-accent/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-accent mb-2">{'<Dev />'}</h3>
            <p className="text-gray-400">
              Développeur Web & Mobile passionné par la création d'expériences numériques innovantes.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-accent transition-colors">Accueil</a></li>
              <li><a href="/projects" className="hover:text-accent transition-colors">Projets</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4">Réseaux Sociaux</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-accent/10 text-center text-gray-500"
        >
          <p>© 2024 Portfolio Interactif. Tous droits réservés. | Créé avec ❤️ par un développeur passionné</p>
        </motion.div>
      </div>
    </footer>
  )
}
