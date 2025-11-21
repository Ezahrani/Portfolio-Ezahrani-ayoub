'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ExperienceBlock from '@/components/ExperienceBlock'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Match&Move',
    role: 'Cross-Platform Mobile Developer (Flutter)',
    period: 'August 2024 — Present',
    description:
      'Mobile developer specialized in Flutter, responsible for developing modern and high-performance Android & iOS applications.',
    technologies: [
      'Flutter',
      'Dart',
      'Firebase (Auth, Firestore, Cloud Functions)',
      'REST API',
      'OAuth2',
      'Git/GitHub',
      'CI/CD',
      'App Store Connect / Google Play',
      'Provider',
      'Bloc',
      'Riverpod',
      'MVC',
      'MVVM',
      'Clean Architecture',
    ],
    achievements: [
      'Lead developer on Match&Move: sports matchmaking, real-time chat, events, advanced filters, athlete profiles, and geolocation.',
      'UI/UX optimization with Flutter animations and responsive design.',
      'Integration of push notifications and a secure authentication system.',
      'Delivered five mobile projects as part of a squad.',
    ],
  },
  {
    company: 'EASYFLIGHT',
    role: 'Full-Stack & Mobile Developer (Flutter/Dart)',
    period: 'September 2023 — June 2024',
    description:
      'Full-stack and mobile developer in charge of a complete flight booking platform (website and mobile app).',
    technologies: [
      'Flutter',
      'Dart',
      'Flutter Web',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Node.js',
      'Express.js',
      'Firebase Functions',
      'PHP/Laravel',
      'MySQL',
      'PostgreSQL',
      'Firebase',
      'Git',
      'Docker',
      'Postman',
      'Figma',
    ],
    achievements: [
      'Developed the EASYFLIGHT mobile app (flight search, booking, tickets, payments, push notifications).',
      'Created the Flutter Web platform: responsive interface, admin dashboard, and high-performance search engine.',
      'Integrated airline APIs and deployed a secure payment system.',
      'Contributed to server architecture: REST endpoints, security, and optimization.',
      'Delivered 18 projects (mobile, web, backend, APIs).',
    ],
  },
  {
    company: 'LUXESHOP',
    role: 'Mobile Application Developer',
    period: 'September 2022 — August 2023',
    description:
      'Mobile developer responsible for creating LUXESHOP, a premium e-commerce application with a dynamic catalog and secure payments.',
    technologies: [
      'React Native (TypeScript/JavaScript)',
      'Redux Toolkit',
      'Stripe API',
      'REST API',
      'Firebase (Auth, Firestore)',
      'Git/GitHub',
      'Responsive UI & animations',
    ],
    achievements: [
      'Fully developed the LUXESHOP mobile app for Android and iOS.',
      'Integrated a secure Stripe payment system.',
      'Implemented product catalog, filters, advanced search, and favorites.',
      'Optimized performance and user experience.',
      'Designed a modern, minimalist interface for premium retail.',
      'Delivered the project with continuous maintenance and optimization.',
    ],
  },
  {
    company: 'Unity & C# Freelance',
    role: '2D/3D Video Game Developer',
    period: 'January 2019 — August 2022',
    description:
      'Freelance game developer specializing in 2D and 3D games with Unity, from concept to multi-platform publishing.',
    technologies: [
      'Unity Engine (2019–2022)',
      'C# (Architecture, Gameplay, AI, Systems)',
      'Blender',
      'Photoshop',
      'Illustrator',
      'Git/GitHub',
      'Unity Asset Store',
      'Unity UI/UX',
      'Animations',
      'VFX',
    ],
    achievements: [
      'Created more than 14 video games: runners, puzzles, casual RPGs, 3D shooters, and 2D platformers.',
      'Developed complete systems: player controls, enemy AI, level management, inventories, scoring, menus, and HUD.',
      'Optimized performance for Android/iOS and published white-label releases.',
      'Collaborated with 2D/3D artists to integrate assets, animations, and visual effects.',
      'Delivered full projects with technical documentation and post-launch support.',
    ],
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-950">
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Experiences Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-accent">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Professional journey and expertise developed over the years
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ExperienceBlock key={index} experience={exp} index={index} />
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 md:px-8 bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-accent">Skills</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Mobile Development',
                skills: [
                  'Flutter',
                  'Dart',
                  'React Native',
                  'TypeScript',
                  'JavaScript',
                  'Android (Flutter / RN)',
                  'iOS (Flutter / RN)',
                ],
              },
              {
                category: 'Web Development',
                skills: ['Flutter Web', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Web API integration'],
              },
              {
                category: 'Back-End & API Development',
                skills: [
                  'Node.js',
                  'Express.js',
                  'Firebase Cloud Functions',
                  'REST API',
                  'OAuth2 / Secure Authentication',
                  'PHP / Laravel (EASYFLIGHT)',
                ],
              },
              {
                category: 'Databases',
                skills: ['Firebase Firestore', 'Firebase Realtime Database', 'MySQL', 'PostgreSQL'],
              },
              {
                category: 'Payments & Security',
                skills: ['Stripe API', 'Payment security', 'Tokenization / Secure authentication'],
              },
              {
                category: 'Tools & Environments',
                skills: [
                  'Git / GitHub',
                  'Docker',
                  'Postman',
                  'Figma',
                  'CI/CD',
                  'App Store Connect',
                  'Google Play Console',
                ],
              },
              {
                category: 'Architectures & State Management',
                skills: ['Provider', 'Riverpod', 'Bloc', 'MVC', 'MVVM', 'Clean Architecture'],
              },
              {
                category: 'Advanced Features',
                skills: [
                  'Real-time chat',
                  'Geolocation',
                  'Push notifications',
                  'Matching & recommendation systems',
                  'Dynamic search systems',
                  'Advanced filtering',
                  'Event management',
                  'Booking / reservation systems',
                ],
              },
              {
                category: 'Mobile UI/UX',
                skills: [
                  'Modern mobile design',
                  'Flutter interface design',
                  'Animations & transitions',
                  'Performance-oriented UX',
                ],
              },
            ].map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-dark-800 border border-accent/20 hover:border-accent/50 transition-all"
              >
                <h3 className="text-xl font-bold text-accent mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-sm text-gray-300 hover:text-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-accent">Collaborate</span>?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Whether you have a project in mind or are looking for a talented developer, I would be happy to discuss it with you.
          </p>
          <button className="px-8 py-4 bg-accent text-dark-950 font-bold rounded-lg hover:bg-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
            Contact Me
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
