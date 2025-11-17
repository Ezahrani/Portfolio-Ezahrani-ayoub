'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import iPhone16ProEmulator from '@/components/iPhone16ProEmulator'
import UberEatsProApp from '@/components/apps/UberEatsProApp'
import InvoiceProApp from '@/components/apps/InvoiceProApp'
import SocialProApp from '@/components/apps/SocialProApp'
import EcommerceProApp from '@/components/apps/EcommerceProApp'
import { motion } from 'framer-motion'
import { Play, Smartphone } from 'lucide-react'

export default function EmulatorProPage() {
  const [selectedApp, setSelectedApp] = useState<string | null>(null)

  const apps = [
    {
      id: 'ubereats',
      title: '🍔 Uber Eats',
      description: 'Food delivery app with restaurant search, menus, and cart management',
      features: ['Search restaurants', 'Browse menus', 'Add to cart', 'Order tracking'],
      color: 'from-black to-gray-800',
      component: UberEatsProApp,
    },
    {
      id: 'invoice',
      title: '📊 Invoicing',
      description: 'Professional SaaS platform for invoice management and payment tracking',
      features: ['Dashboard', 'Invoice creation', 'Payment tracking', 'Reports'],
      color: 'from-blue-600 to-blue-800',
      component: InvoiceProApp,
    },
    {
      id: 'social',
      title: '👥 Instagram',
      description: 'Social network with feed, stories, messaging, and profile management',
      features: ['Feed', 'Stories', 'Direct messages', 'Explore'],
      color: 'from-purple-600 to-pink-600',
      component: SocialProApp,
    },
    {
      id: 'ecommerce',
      title: '🛍️ ShopHub',
      description: 'E-commerce platform with product catalog, favorites, and shopping cart',
      features: ['Product search', 'Favorites', 'Shopping cart', 'Checkout'],
      color: 'from-orange-500 to-red-600',
      component: EcommerceProApp,
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <Smartphone className="text-accent" size={40} />
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              iPhone 16 Pro <span className="text-accent">Emulator</span>
            </h1>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience 4 professional applications in a realistic iPhone 16 Pro emulator. Navigate, interact, and explore like on a real device.
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
                  <p className="text-gray-400 text-sm">{app.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {app.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-400 text-xs">
                        <span className="text-accent">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <button
                    onClick={() => setSelectedApp(app.id)}
                    className="w-full bg-accent text-dark-950 py-3 rounded-lg font-bold hover:bg-accent/80 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-accent/50"
                  >
                    <Play size={20} />
                    Launch App
                  </button>
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
              How It <span className="text-accent">Works</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dark-800 rounded-lg p-6 border border-accent/20">
                <div className="text-4xl mb-3">1️⃣</div>
                <h3 className="text-white font-bold mb-2">Select App</h3>
                <p className="text-gray-400 text-sm">Click "Launch App" to open the emulator with your chosen application</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-6 border border-accent/20">
                <div className="text-4xl mb-3">2️⃣</div>
                <h3 className="text-white font-bold mb-2">Navigate Freely</h3>
                <p className="text-gray-400 text-sm">Explore all pages and features like on a real iPhone 16 Pro device</p>
              </div>
              <div className="bg-dark-800 rounded-lg p-6 border border-accent/20">
                <div className="text-4xl mb-3">3️⃣</div>
                <h3 className="text-white font-bold mb-2">Test Interactions</h3>
                <p className="text-gray-400 text-sm">Click buttons, type text, scroll - everything works like a real app</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-dark-900/50 rounded-lg border border-accent/20 p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-400 text-sm">
              <div>
                <p className="text-accent font-bold mb-2">Device</p>
                <p>iPhone 16 Pro (1179×2556px)</p>
              </div>
              <div>
                <p className="text-accent font-bold mb-2">Display</p>
                <p>Super Retina XDR, 60 FPS animations</p>
              </div>
              <div>
                <p className="text-accent font-bold mb-2">Features</p>
                <p>Dynamic Island, Notch, Status Bar, Home Indicator</p>
              </div>
              <div>
                <p className="text-accent font-bold mb-2">Performance</p>
                <p>Optimized for smooth scrolling and interactions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Emulators */}
      {selectedApp === 'ubereats' && (
        <iPhone16ProEmulator
          appName="🍔 Uber Eats"
          isOpen={selectedApp === 'ubereats'}
          onClose={() => setSelectedApp(null)}
        >
          <UberEatsProApp />
        </iPhone16ProEmulator>
      )}

      {selectedApp === 'invoice' && (
        <iPhone16ProEmulator
          appName="📊 Invoicing"
          isOpen={selectedApp === 'invoice'}
          onClose={() => setSelectedApp(null)}
        >
          <InvoiceProApp />
        </iPhone16ProEmulator>
      )}

      {selectedApp === 'social' && (
        <iPhone16ProEmulator
          appName="👥 Instagram"
          isOpen={selectedApp === 'social'}
          onClose={() => setSelectedApp(null)}
        >
          <SocialProApp />
        </iPhone16ProEmulator>
      )}

      {selectedApp === 'ecommerce' && (
        <iPhone16ProEmulator
          appName="🛍️ ShopHub"
          isOpen={selectedApp === 'ecommerce'}
          onClose={() => setSelectedApp(null)}
        >
          <EcommerceProApp />
        </iPhone16ProEmulator>
      )}
    </main>
  )
}
