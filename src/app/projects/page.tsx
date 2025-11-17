'use client'

import Navigation from '@/components/Navigation'
import ProjectCard from '@/components/ProjectCard'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 'ubereats',
    title: 'UberEats Clone',
    description: 'Application de livraison de nourriture avec système de paiement intégré',
    technologies: ['React Native', 'Firebase', 'Stripe', 'Google Maps', 'Redux'],
    demoUrl: '/projects/ubereats',
  },
  {
    id: 'invoice',
    title: 'Facturation & Gestion',
    description: 'Plateforme de facturation pour freelancers et artisans',
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'PDF Generation', 'TypeScript'],
    demoUrl: '/projects/invoice',
  },
  {
    id: 'social',
    title: 'Réseau Social',
    description: 'Mini réseau social avec partage de photos, vidéos et chat en temps réel',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'AWS S3'],
    demoUrl: '/projects/social',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Temu-like',
    description: 'Plateforme e-commerce avec catalogue produits et système de commande',
    technologies: ['Flutter', 'Firebase', 'Stripe', 'Algolia', 'Redux'],
    demoUrl: '/projects/ecommerce',
  },
  {
    id: 'game-unity',
    title: 'Jeu Unity 3D',
    description: 'Jeu d\'aventure 3D avec système de progression et achievements',
    technologies: ['Unity', 'C#', 'Blender', 'Firebase', 'HLSL'],
    githubUrl: '#',
  },
  {
    id: 'web-app',
    title: 'Application Web SaaS',
    description: 'Plateforme SaaS complète avec authentification et gestion d\'équipe',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
    demoUrl: '#',
    githubUrl: '#',
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Mes <span className="text-accent">Projets</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus ambitieux et innovants en Web, Mobile et Game Development
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}
        </div>
      </section>

      {/* Mobile Apps Section */}
      <section className="py-20 px-4 md:px-8 bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Applications <span className="text-accent">Mobiles</span>
            </h2>
            <p className="text-gray-400">
              Découvrez mes applications mobiles complètes et fonctionnelles avec des démos interactives dans un émulateur.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              { title: '🍔 UberEats Clone', desc: 'Application de livraison avec recherche, panier et suivi' },
              { title: '📊 Facturation', desc: 'Plateforme SaaS pour gérer les factures et revenus' },
              { title: '👥 Réseau Social', desc: 'Mini réseau social avec feed, messages et tendances' },
              { title: '🛍️ E-Commerce', desc: 'Plateforme de shopping avec catalogue et panier' },
            ].map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-dark-800 rounded-lg p-6 border border-accent/20 hover:border-accent/50 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2">{app.title}</h3>
                <p className="text-gray-400 mb-4">{app.desc}</p>
                <button className="px-6 py-2 bg-accent/10 border border-accent/30 text-accent rounded hover:bg-accent/20 transition-all">
                  Voir la démo
                </button>
              </motion.div>
            ))}
          </div>

          {/* CTA to Apps Page */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <a
              href="/apps"
              className="inline-block px-8 py-4 bg-accent text-dark-950 font-bold rounded-lg hover:bg-accent/80 transition-all hover:shadow-lg hover:shadow-accent/50"
            >
              Voir toutes les applications interactives →
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
