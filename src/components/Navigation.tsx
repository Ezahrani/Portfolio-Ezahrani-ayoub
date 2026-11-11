'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Expertise', href: '/#expertise' },
  { label: 'Réalisations', href: '/#realisations' },
  { label: 'Tarifs', href: '/#offres' },
  { label: 'Missions réalisées', href: '/#missions' },
  { label: 'Références', href: '/#references' },
  { label: 'Certifications', href: '/#certifications' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/80 backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent to-coral grid place-items-center font-display font-extrabold text-white text-sm">
              CF
            </span>
            <span className="leading-tight">
              <span className="block font-display font-bold text-white">CodeFin</span>
              <span className="block text-[11px] text-gray-400">Conseil en contrôle de gestion & IA</span>
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-7">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-gray-300 hover:text-white whitespace-nowrap">
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="text-sm font-bold px-4 py-2 rounded-lg bg-accent text-ink hover:bg-white"
            >
              Nous contacter
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden text-white"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="xl:hidden pb-4">
            {[...navItems, { label: 'Nous contacter', href: '/#contact' }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
