'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AppEmulator from '@/components/AppEmulator'
import { motion } from 'framer-motion'
import { Play, Code, ExternalLink } from 'lucide-react'

export default function AppsPage() {
  const [selectedApp, setSelectedApp] = useState<string | null>(null)

  const apps = [
    {
      id: 'ubereats',
      title: '🍔 UberEats Clone',
      description: 'Application de livraison de nourriture complète avec recherche de restaurants, panier et suivi des commandes en temps réel.',
      icon: '🍕',
      color: 'from-red-600 to-orange-600',
      features: [
        'Recherche de restaurants',
        'Consultation des menus',
        'Gestion du panier',
        'Suivi des commandes',
        'Système de paiement',
      ],
      url: '/apps/ubereats-demo',
      tech: ['React', 'Framer Motion', 'TailwindCSS', 'TypeScript'],
    },
    {
      id: 'invoice',
      title: '📊 Facturation & Gestion',
      description: 'Plateforme SaaS de facturation pour freelancers avec génération de PDF, suivi des paiements et statistiques détaillées.',
      icon: '💰',
      color: 'from-blue-600 to-cyan-600',
      features: [
        'Création de factures',
        'Gestion des clients',
        'Suivi des paiements',
        'Rapports financiers',
        'Export PDF',
      ],
      url: '/apps/invoice-demo',
      tech: ['Next.js', 'TypeScript', 'Framer Motion', 'TailwindCSS'],
    },
    {
      id: 'social',
      title: '👥 Réseau Social',
      description: 'Mini réseau social avec feed, messages directs, système de likes et découverte de tendances.',
      icon: '📱',
      color: 'from-purple-600 to-pink-600',
      features: [
        'Feed social',
        'Création de posts',
        'Messages directs',
        'Système de likes',
        'Découverte de tendances',
      ],
      url: '/apps/social-demo',
      tech: ['React', 'Socket.io', 'Framer Motion', 'TailwindCSS'],
    },
    {
      id: 'ecommerce',
      title: '🛍️ E-Commerce',
      description: 'Plateforme e-commerce complète avec catalogue de produits, filtrage, favoris et système de panier avancé.',
      icon: '🛒',
      color: 'from-amber-600 to-orange-600',
      features: [
        'Catalogue de produits',
        'Recherche et filtrage',
        'Système de favoris',
        'Gestion du panier',
        'Calcul des taxes',
      ],
      url: '/apps/ecommerce-demo',
      tech: ['React', 'TypeScript', 'Framer Motion', 'TailwindCSS'],
    },
  ]

  return (
    <main className="min-h-screen bg-dark-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Applications <span className="text-accent">Interactives</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explorez mes applications complètes et fonctionnelles. Cliquez sur "Tester l'app" pour naviguer dans un émulateur mobile réaliste.
          </p>
        </motion.div>
      </section>

      {/* Apps Grid */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.map((app, idx) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-900/50 rounded-lg border border-accent/20 overflow-hidden hover:border-accent/50 transition-all group"
              >
                {/* App Header */}
                <div className={`bg-gradient-to-r ${app.color} p-6 text-center`}>
                  <div className="text-6xl mb-3">{app.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{app.title}</h3>
                </div>

                {/* App Content */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-400">{app.description}</p>

                  {/* Features */}
                  <div>
                    <h4 className="text-accent font-bold mb-2">Fonctionnalités</h4>
                    <ul className="space-y-1">
                      {app.features.map((feature, i) => (
                        <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                          <span className="text-accent">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-accent font-bold mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => setSelectedApp(app.id)}
                      className="flex-1 bg-accent text-dark-950 py-3 rounded-lg font-bold hover:bg-accent/80 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-accent/50"
                    >
                      <Play size={20} />
                      Tester l'app
                    </button>
                    <button className="flex-1 border-2 border-accent text-accent py-3 rounded-lg font-bold hover:bg-accent/10 transition-all flex items-center justify-center gap-2">
                      <Code size={20} />
                      Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 px-4 md:px-8 bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Comment <span className="text-accent">Ça Marche</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-800 rounded-lg p-6 border border-accent/20">
                <div className="text-4xl mb-3">1️⃣</div>
                <h3 className="text-white font-bold mb-2">Sélectionnez une app</h3>
                <p className="text-gray-400 text-sm">Cliquez sur "Tester l'app" pour ouvrir l'émulateur mobile</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-6 border border-accent/20">
                <div className="text-4xl mb-3">2️⃣</div>
                <h3 className="text-white font-bold mb-2">Naviguez librement</h3>
                <p className="text-gray-400 text-sm">Explorez toutes les fonctionnalités comme sur un vrai téléphone</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-6 border border-accent/20">
                <div className="text-4xl mb-3">3️⃣</div>
                <h3 className="text-white font-bold mb-2">Testez les interactions</h3>
                <p className="text-gray-400 text-sm">Cliquez, tapez, naviguez - tout fonctionne comme prévu</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* App Emulators */}
      {selectedApp === 'ubereats' && (
        <AppEmulator
          appUrl="/apps/ubereats-demo"
          appName="🍔 UberEats Clone"
          isOpen={selectedApp === 'ubereats'}
          onClose={() => setSelectedApp(null)}
        />
      )}
      {selectedApp === 'invoice' && (
        <AppEmulator
          appUrl="/apps/invoice-demo"
          appName="📊 Facturation"
          isOpen={selectedApp === 'invoice'}
          onClose={() => setSelectedApp(null)}
        />
      )}
      {selectedApp === 'social' && (
        <AppEmulator
          appUrl="/apps/social-demo"
          appName="👥 Réseau Social"
          isOpen={selectedApp === 'social'}
          onClose={() => setSelectedApp(null)}
        />
      )}
      {selectedApp === 'ecommerce' && (
        <AppEmulator
          appUrl="/apps/ecommerce-demo"
          appName="🛍️ E-Commerce"
          isOpen={selectedApp === 'ecommerce'}
          onClose={() => setSelectedApp(null)}
        />
      )}
    </main>
  )
}
