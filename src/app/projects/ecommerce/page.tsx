'use client'

import Navigation from '@/components/Navigation'
import MobilePhoneMockup from '@/components/MobilePhoneMockup'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            🛍️ Plateforme <span className="text-accent">E-Commerce</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Application e-commerce complète avec catalogue de produits, panier intelligent et système de paiement intégré. Inspirée par les meilleures pratiques du marché.
          </p>
        </motion.div>
      </section>

      {/* Mobile Mockup */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <MobilePhoneMockup
            title="Démo Interactive"
            description="Interface de la plateforme e-commerce"
          >
            <div className="w-full h-full bg-gradient-to-b from-dark-800 to-dark-900 flex flex-col items-center justify-center p-4">
              <div className="text-center">
                <div className="text-6xl mb-4">🛒</div>
                <p className="text-gray-400">Catalogue de produits</p>
                <p className="text-sm text-gray-500 mt-2">Parcourez et achetez des produits</p>
              </div>
            </div>
          </MobilePhoneMockup>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-4 md:px-8 bg-dark-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Contexte du Projet</h2>
            <p className="text-gray-400 mb-4">
              Développement d'une plateforme e-commerce mobile complète avec catalogue de produits, système de recherche avancée et paiement sécurisé.
            </p>
            <p className="text-gray-400 mb-6">
              L'application offre une expérience d'achat fluide avec recommandations personnalisées, gestion du panier et suivi des commandes.
            </p>

            <h3 className="text-2xl font-bold text-accent mb-4">Mon Rôle</h3>
            <ul className="space-y-2 text-gray-400">
              <li>✓ Design et architecture de l'app</li>
              <li>✓ Développement Flutter</li>
              <li>✓ Intégration Firebase</li>
              <li>✓ Système de recherche avec Algolia</li>
              <li>✓ Gestion d'état avec Redux</li>
            </ul>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Fonctionnalités</h2>
            <div className="space-y-4">
              {[
                { title: 'Catalogue Produits', desc: 'Milliers de produits avec images' },
                { title: 'Recherche Avancée', desc: 'Filtres et recherche par Algolia' },
                { title: 'Panier Intelligent', desc: 'Gestion du panier avec suggestions' },
                { title: 'Paiement Sécurisé', desc: 'Intégration Stripe' },
                { title: 'Historique Commandes', desc: 'Suivi des achats passés' },
                { title: 'Avis Produits', desc: 'Système de notation et commentaires' },
              ].map((feature, index) => (
                <div key={index} className="p-4 bg-dark-800 rounded-lg border border-accent/20">
                  <h4 className="text-accent font-bold mb-1">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies <span className="text-accent">Utilisées</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Flutter',
              'Dart',
              'Firebase',
              'Stripe',
              'Algolia',
              'Redux',
              'GetX',
              'Provider',
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-4 bg-dark-800 border border-accent/20 rounded-lg text-center hover:border-accent/50 transition-all"
              >
                <p className="text-accent font-bold">{tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-8 bg-dark-900/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            Intéressé par ce <span className="text-accent">projet</span> ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-8 py-3 bg-accent text-dark-950 font-bold rounded-lg hover:bg-accent/80 transition-all flex items-center justify-center gap-2"
            >
              <ExternalLink size={20} />
              Voir la démo
            </a>
            <a
              href="#"
              className="px-8 py-3 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all flex items-center justify-center gap-2"
            >
              <Github size={20} />
              Code Source
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
