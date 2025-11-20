'use client'

import Navigation from '@/components/Navigation'
import VideoCard from '@/components/VideoCard'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const videoDemos = [
  {
    id: 'demo1',
    title: 'Match&Move — Développeur Mobile Flutter',
    description:
      'Développement de Match&Move, app de rencontre sportive & e-sportive : interfaces, matchmaking, géolocalisation et chat temps réel.',
    videoUrl: '/videos/demo1.mov',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase Auth',
      'Firestore',
      'Cloud Functions',
      'REST API',
      'Provider',
      'Riverpod',
      'Git',
      'App Store Connect',
      'Google Play Console',
    ],
  },
  {
    id: 'demo2',
    title: 'EASYFLIGHT — Développeur Full-Stack & Mobile',
    description:
      'Site web + app mobile EASYFLIGHT : moteur de recherche, réservations, paiements sécurisés et dashboard administrateur.',
    videoUrl: '/videos/demo2.mov',
    technologies: [
      'Flutter (mobile & web)',
      'Dart',
      'Node.js',
      'Express.js',
      'Firebase',
      'MySQL',
      'Stripe API',
      'Git',
      'Docker',
      'Postman',
    ],
  },
  {
    id: 'demo3',
    title: 'LUXESHOP — Développeur Mobile (E-commerce)',
    description:
      'Application e-commerce LUXESHOP : catalogue produits, filtres, favoris et paiement intégré avec interface mobile optimisée.',
    videoUrl: '/videos/demo3.mov',
    technologies: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'Stripe',
      'Firebase Auth',
      'Firestore',
      'GitHub',
      'REST API',
    ],
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navigation />

      <section className="pt-32 pb-20 px-4 md:px-8 bg-dark-900/40">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Projets <span className="text-accent">en vidéo</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Visualisez mes applications en action grâce à des walkthroughs complets enregistrés depuis l’iPhone 16 Pro.
            </p>
          </motion.div>

          <div className="space-y-12">
            {videoDemos.map((video, index) => (
              <VideoCard
                key={video.id}
                {...video}
                index={index}
                mediaPosition={index % 2 === 0 ? 'left' : 'right'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
