'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'
import { asset } from '@/lib/basePath'
import { categories, realisations, type Category, type Realisation } from '@/lib/content'

const categoryColor: Record<Category, string> = {
  automatisation: 'text-mint',
  controle: 'text-amber',
  powerbi: 'text-accent',
}

const categoryLabel: Record<Category, string> = {
  automatisation: 'Automatisation & IA',
  controle: 'Contrôle de gestion',
  powerbi: 'Power BI',
}

export default function Gallery() {
  const [filter, setFilter] = useState<Category | 'tous'>('tous')
  const [open, setOpen] = useState<Realisation | null>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const items = filter === 'tous' ? realisations : realisations.filter((r) => r.category === filter)

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filtrer les réalisations">
        {categories.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={filter === c.id}
            onClick={() => setFilter(c.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
              filter === c.id
                ? 'bg-accent text-ink border-accent'
                : 'border-line text-gray-300 hover:border-accent/60 hover:text-white'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((r) => (
          <article
            key={r.slug}
            className="group rounded-2xl border border-line bg-panel overflow-hidden flex flex-col"
          >
            <button
              type="button"
              onClick={() => setOpen(r)}
              className="block relative aspect-[16/10] overflow-hidden bg-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label={`Agrandir : ${r.title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(`/portfolio/${r.slug}.webp`)}
                alt={r.title}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
            <div className="p-5 flex flex-col gap-3 flex-1">
              <span className={`text-xs font-semibold uppercase tracking-wider ${categoryColor[r.category]}`}>
                {categoryLabel[r.category]}
              </span>
              <h3 className="font-display text-lg font-bold text-white leading-snug">{r.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{r.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {r.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-md bg-ink border border-line text-gray-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute -top-11 right-0 flex items-center gap-1 text-sm text-white bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 hover:bg-white/20"
            >
              <X size={16} /> Fermer
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(`/portfolio/${open.slug}.webp`)} alt={open.title} className="w-full h-auto rounded-xl max-h-[80vh] object-contain" />
            <p className="mt-3 text-white font-semibold">{open.title}</p>
          </div>
        </div>
      )}
    </div>
  )
}
