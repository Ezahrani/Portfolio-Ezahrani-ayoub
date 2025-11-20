'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ExperienceBlock from '@/components/ExperienceBlock'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Match&Move',
    role: 'Développeur Mobile Cross-Platform (Flutter)',
    period: 'Août 2024 — Présent',
    description:
      "Développeur mobile spécialisé Flutter, responsable du développement d’applications Android & iOS modernes et performantes.",
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
      'Lead dev sur Match&Move : matchmaking sportif, chat temps réel, événements, filtres avancés, profils sportifs et géolocalisation.',
      'Optimisation UI/UX avec animations Flutter et design responsive.',
      'Intégration des notifications push et d’un système d’authentification sécurisée.',
      '5 projets mobiles livrés en équipe.',
    ],
  },
  {
    company: 'EASYFLIGHT',
    role: 'Développeur Full-Stack & Mobile (Flutter/Dart)',
    period: 'Septembre 2023 — Juin 2024',
    description:
      "Développeur full-stack et mobile en charge d’une plateforme complète de réservation de vols (site web + application mobile).",
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
      "Développement de l’app mobile EASYFLIGHT (recherche de vols, réservation, billets, paiements, notifications push).",
      'Création du site Flutter Web : interface responsive, tableau de bord admin, moteur de recherche performant.',
      'Intégration d’API aériennes et déploiement d’un système de paiement sécurisé.',
      'Participation à l’architecture serveur : endpoints REST, sécurité, optimisation.',
      '18 projets livrés (mobile, web, back-end, API).',
    ],
  },
  {
    company: 'LUXESHOP',
    role: 'Développeur Application Mobile',
    period: 'Septembre 2022 — Août 2023',
    description:
      "Développeur mobile en charge de la création de LUXESHOP, application e-commerce premium avec catalogue dynamique et paiement sécurisé.",
    technologies: [
      'React Native (TypeScript/JavaScript)',
      'Redux Toolkit',
      'Stripe API',
      'REST API',
      'Firebase (Auth, Firestore)',
      'Git/GitHub',
      'UI Responsive & animations',
    ],
    achievements: [
      "Développement complet de l’application mobile LUXESHOP (Android & iOS).",
      'Intégration d’un système de paiement Stripe sécurisé.',
      'Mise en place du catalogue produits, filtres, recherche avancée et favoris.',
      'Optimisation des performances et de l’expérience utilisateur.',
      'Création d’une interface moderne et minimaliste adaptée au haut de gamme.',
      'Livraison du projet avec maintenance et optimisation continue.',
    ],
  },
  {
    company: 'Unity & C# Freelance',
    role: 'Développeur Jeux Vidéo 2D / 3D',
    period: 'Janvier 2019 — Août 2022',
    description:
      'Développeur jeux vidéo freelance spécialisé dans la création de jeux 2D et 3D avec Unity, de la conception à la publication multi-plateformes.',
    technologies: [
      'Unity Engine (2019–2022)',
      'C# (Architecture, Gameplay, IA, Systèmes)',
      'Blender',
      'Photoshop',
      'Illustrator',
      'Git/GitHub',
      'Unity Asset Store',
      'UI/UX Unity Canvas',
      'Animations',
      'VFX',
    ],
    achievements: [
      'Création de plus de 14 jeux vidéo : runners, puzzles, RPG légers, jeux de tir 3D, plateformes 2D.',
      'Développement de systèmes complets : contrôles joueur, IA ennemies, gestion des niveaux, inventaires, scoring, menus et HUD.',
      'Optimisation des performances pour Android/iOS et publication en white label.',
      'Collaboration avec artistes 2D/3D pour intégrer assets, animations et effets.',
      'Livraison de projets complets avec documentation technique et maintenance.',
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
            Mes <span className="text-accent">Expériences</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Parcours professionnel et expertise développée au fil des années
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
              Mes <span className="text-accent">Compétences</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Développement Mobile',
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
                category: 'Développement Web',
                skills: ['Flutter Web', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Intégration API web'],
              },
              {
                category: 'Back-end & API',
                skills: [
                  'Node.js',
                  'Express.js',
                  'Firebase Cloud Functions',
                  'REST API',
                  'OAuth2 / Auth sécurisé',
                  'PHP / Laravel (EASYFLIGHT)',
                ],
              },
              {
                category: 'Bases de Données',
                skills: ['Firebase Firestore', 'Realtime Database', 'MySQL', 'PostgreSQL'],
              },
              {
                category: 'Paiement & Sécurité',
                skills: ['Stripe API', 'Sécurité des paiements', 'Tokenization / Auth sécurisée'],
              },
              {
                category: 'Outils & Environnements',
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
                category: 'Architectures & Gestion d’État',
                skills: ['Provider', 'Riverpod', 'Bloc', 'MVC', 'MVVM', 'Clean Architecture'],
              },
              {
                category: 'Fonctionnalités avancées',
                skills: [
                  'Chat en temps réel',
                  'Géolocalisation',
                  'Push Notifications',
                  'Matching / Recommandations',
                  'Systèmes de recherche dynamiques',
                  'Filtres avancés',
                  'Gestion d’événements',
                  'Systèmes de réservation',
                ],
              },
              {
                category: 'UI/UX Mobile',
                skills: [
                  'Design mobile moderne',
                  'Conception d’interfaces Flutter',
                  'Animations & transitions',
                  'UX orienté performance et fluidité',
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
            Prêt à <span className="text-accent">collaborer</span> ?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Que vous ayez un projet en tête ou que vous cherchiez un développeur talentueux, je serais ravi de discuter avec vous.
          </p>
          <button className="px-8 py-4 bg-accent text-dark-950 font-bold rounded-lg hover:bg-accent/80 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
            Me contacter
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
