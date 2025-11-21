'use client'

import Navigation from '@/components/Navigation'
import VideoCard from '@/components/VideoCard'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const videoDemos = [
  {
    id: 'demo1',
    title: 'PROJECT #1 — Match&Move',
    description:
      'Flutter Mobile Developer — Development of Match&Move, a sports & e-sports matchmaking application featuring modern interfaces, smart matchmaking, geolocation, and real-time chat.',
    videoUrl: '/demo1.mp4',
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
    title: 'PROJECT #2 — EASYFLIGHT',
    description:
      'Full-Stack & Mobile Developer — Complete development of the EASYFLIGHT website and mobile application: search engine, flight booking system, secure payments, and an admin dashboard.',
    videoUrl: '/demo2.mp4',
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
    title: 'PROJECT #3 — LUXESHOP',
    description:
      'Mobile Developer (E-commerce) — Development of LUXESHOP, a premium e-commerce mobile application including product catalog, filters, favorites, and integrated payments with optimized mobile UI.',
    videoUrl: '/demo3.mp4',
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
              🎥 Video <span className="text-accent">Projects</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore my applications in action through full walkthroughs recorded on an iPhone 16 Pro.
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
