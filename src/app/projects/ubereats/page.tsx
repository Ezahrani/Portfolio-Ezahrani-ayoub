'use client'

import Navigation from '@/components/Navigation'
import MobilePhoneMockup from '@/components/MobilePhoneMockup'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function UberEatsPage() {
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
            🍔 Application de <span className="text-accent">Livraison</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Une application mobile complète de livraison de nourriture avec géolocalisation en temps réel, système de paiement intégré et suivi des commandes.
          </p>
        </motion.div>
      </section>

      {/* Mobile Mockup */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <MobilePhoneMockup
            title="Démo Interactive"
            description="Explorez l'interface de l'application"
          >
            <div className="w-full h-full bg-gradient-to-b from-dark-800 to-dark-900 flex flex-col items-center justify-center p-4">
              <div className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <p className="text-gray-400">Interface de l'application</p>
                <p className="text-sm text-gray-500 mt-2">Écran d'accueil avec restaurants</p>
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
              Développement d'une plateforme mobile complète de livraison de nourriture, inspirée par les meilleures pratiques de l'industrie.
            </p>
            <p className="text-gray-400 mb-6">
              L'application offre une expérience utilisateur fluide avec recherche de restaurants, consultation de menus, gestion du panier et suivi des commandes en temps réel.
            </p>

            <h3 className="text-2xl font-bold text-accent mb-4">Mon Rôle</h3>
            <ul className="space-y-2 text-gray-400">
              <li>✓ Architecture et design de l'application</li>
              <li>✓ Développement frontend React Native</li>
              <li>✓ Intégration des APIs backend</li>
              <li>✓ Implémentation du système de paiement</li>
              <li>✓ Optimisation des performances</li>
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
                { title: 'Recherche Avancée', desc: 'Filtres par cuisine, prix, évaluation' },
                { title: 'Géolocalisation', desc: 'Localisation en temps réel des restaurants' },
                { title: 'Panier Intelligent', desc: 'Gestion du panier avec recommandations' },
                { title: 'Paiement Sécurisé', desc: 'Intégration Stripe pour les paiements' },
                { title: 'Suivi en Temps Réel', desc: 'Tracking GPS de la livraison' },
                { title: 'Évaluations', desc: 'Système de notation et avis' },
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
              'React Native',
              'Expo',
              'Firebase',
              'Stripe',
              'Google Maps API',
              'Redux',
              'TypeScript',
              'Node.js',
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
