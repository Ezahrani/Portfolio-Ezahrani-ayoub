'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import AdvancedMobileEmulator from '@/components/AdvancedMobileEmulator'
import UberEatsApp from '@/components/apps/UberEatsApp'
import InvoiceApp from '@/components/apps/InvoiceApp'
import SocialApp from '@/components/apps/SocialApp'
import EcommerceApp from '@/components/apps/EcommerceApp'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function EmulatorPage() {
  const [selectedApp, setSelectedApp] = useState<string | null>(null)

  const apps = [
    {
      id: 'ubereats',
      title: '🍔 UberEats Clone',
      description: 'Application de livraison de nourriture avec recherche, menus et gestion du panier',
      color: 'from-red-600 to-orange-600',
      component: UberEatsApp,
    },
    {
      id: 'invoice',
      title: '📊 Facturation',
      description: 'Plateforme SaaS de facturation avec dashboard et suivi des paiements',
      color: 'from-blue-600 to-cyan-600',
      component: InvoiceApp,
    },
    {
      id: 'social',
      title: '👥 Réseau Social',
      description: 'Mini réseau social avec feed, posts, likes et messages directs',
      color: 'from-purple-600 to-pink-600',
      component: SocialApp,
    },
    {
      id: 'ecommerce',
      title: '🛍️ E-Commerce',
      description: 'Plateforme e-commerce avec catalogue, favoris et gestion du panier',
      color: 'from-amber-600 to-orange-600',
      component: EcommerceApp,
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
            Émulateur Mobile <span className="text-accent">Interactif</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explorez mes applications complètes et fonctionnelles dans un vrai émulateur mobile. Naviguez, testez et découvrez toutes les fonctionnalités.
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
                  <h3 className="text-2xl font-bold text-white">{app.title}</h3>
                </div>

                {/* App Content */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-400">{app.description}</p>

                  {/* Action */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => setSelectedApp(app.id)}
                      className="flex-1 bg-accent text-dark-950 py-3 rounded-lg font-bold hover:bg-accent/80 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-accent/50"
                    >
                      <Play size={20} />
                      Lancer l'app
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
                <p className="text-gray-400 text-sm">Cliquez sur "Lancer l'app" pour ouvrir l'émulateur mobile</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-6 border border-accent/20">
                <div className="text-4xl mb-3">2️⃣</div>
                <h3 className="text-white font-bold mb-2">Naviguez librement</h3>
                <p className="text-gray-400 text-sm">Explorez toutes les pages et fonctionnalités comme sur un vrai téléphone</p>
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

      {/* Emulators */}
      {selectedApp === 'ubereats' && (
        <AdvancedMobileEmulator
          appName="🍔 UberEats Clone"
          isOpen={selectedApp === 'ubereats'}
          onClose={() => setSelectedApp(null)}
        >
          <UberEatsApp />
        </AdvancedMobileEmulator>
      )}

      {selectedApp === 'invoice' && (
        <AdvancedMobileEmulator
          appName="📊 Facturation"
          isOpen={selectedApp === 'invoice'}
          onClose={() => setSelectedApp(null)}
        >
          <InvoiceApp />
        </AdvancedMobileEmulator>
      )}

      {selectedApp === 'social' && (
        <AdvancedMobileEmulator
          appName="👥 Réseau Social"
          isOpen={selectedApp === 'social'}
          onClose={() => setSelectedApp(null)}
        >
          <SocialApp />
        </AdvancedMobileEmulator>
      )}

      {selectedApp === 'ecommerce' && (
        <AdvancedMobileEmulator
          appName="🛍️ E-Commerce"
          isOpen={selectedApp === 'ecommerce'}
          onClose={() => setSelectedApp(null)}
        >
          <EcommerceApp />
        </AdvancedMobileEmulator>
      )}
    </main>
  )
}
