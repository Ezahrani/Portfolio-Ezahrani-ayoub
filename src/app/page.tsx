'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ExperienceBlock from '@/components/ExperienceBlock'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'EY',
    role: 'Consultant Finance',
    period: '2022 - 2023',
    description: 'Optimisation des processus financiers et mise en place de solutions SAP',
    technologies: ['SAP', 'Excel', 'Power BI', 'SQL'],
    achievements: [
      'Réduction des temps de traitement de 40%',
      'Formation de 50+ utilisateurs',
      'Implémentation de 3 modules SAP',
    ],
  },
  {
    company: 'Freelance',
    role: 'Développeur Web Full Stack',
    period: '2023 - Présent',
    description: 'Création d\'applications web modernes et responsives pour startups et PME',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    achievements: [
      '15+ projets livrés avec succès',
      'Satisfaction client: 98%',
      'Spécialisation en applications e-commerce',
    ],
  },
  {
    company: 'Développement Mobile',
    role: 'Développeur React Native & Flutter',
    period: '2023 - Présent',
    description: 'Création d\'applications mobiles cross-platform haute performance',
    technologies: ['React Native', 'Flutter', 'Firebase', 'Redux'],
    achievements: [
      '8 applications publiées sur App Store et Google Play',
      'Plus de 50k téléchargements cumulés',
      'Rating moyen: 4.7/5 étoiles',
    ],
  },
  {
    company: 'Développement Unity',
    role: 'Développeur C# / Game Developer',
    period: '2022 - Présent',
    description: 'Création de jeux et d\'expériences 3D interactives',
    technologies: ['Unity', 'C#', 'Blender', 'HLSL'],
    achievements: [
      '5 jeux publiés',
      'Plus de 100k joueurs actifs',
      'Intégration de systèmes de monétisation avancés',
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
              { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'] },
              { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'] },
              { category: 'Mobile', skills: ['React Native', 'Flutter', 'Expo', 'Native iOS/Android'] },
              { category: 'Game Dev', skills: ['Unity', 'C#', 'Unreal Engine', 'Blender', '3D Graphics'] },
              { category: 'DevOps', skills: ['Docker', 'GitHub Actions', 'Vercel', 'AWS', 'CI/CD'] },
              { category: 'Outils', skills: ['Git', 'Figma', 'VS Code', 'Postman', 'Jira'] },
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
