'use client'

import { useCallback, useEffect, useState } from 'react'
import { Camera, ChevronLeft, ChevronRight, X } from 'lucide-react'
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

// Pour chaque réalisation : une couverture de présentation, l'écran complet, puis deux vues de détail.
const photos = (slug: string) => [
  { src: asset(`/portfolio/${slug}-cover.webp`), label: 'Présentation' },
  { src: asset(`/portfolio/${slug}.webp`), label: 'Écran complet' },
  { src: asset(`/portfolio/${slug}-3.webp`), label: 'Zoom 1' },
  { src: asset(`/portfolio/${slug}-4.webp`), label: 'Zoom 2' },
]

export default function Gallery() {
  const [filter, setFilter] = useState<Category | 'tous'>('tous')
  const [open, setOpen] = useState<Realisation | null>(null)
  const [index, setIndex] = useState(0)

  const show = (r: Realisation, i = 0) => {
    setOpen(r)
    setIndex(i)
  }

  const step = useCallback(
    (d: number) => setIndex((i) => (i + d + 4) % 4),
    []
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, step])

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
        {items.map((r) => {
          const p = photos(r.slug)
          return (
            <article key={r.slug} className="group rounded-2xl border border-line bg-panel overflow-hidden flex flex-col">
              <button
                type="button"
                onClick={() => show(r)}
                className="block relative aspect-[16/10] overflow-hidden bg-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={`Voir les photos : ${r.title}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p[0].src}
                  alt={r.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 bottom-3 flex items-center gap-1.5 text-xs font-semibold text-white bg-black/60 backdrop-blur px-2.5 py-1 rounded-full">
                  <Camera size={14} /> {p.length} photos
                </span>
              </button>
              <div className="grid grid-cols-3 gap-1.5 px-1.5 pt-1.5">
                {p.slice(1).map((ph, i) => (
                  <button
                    key={ph.src}
                    type="button"
                    onClick={() => show(r, i + 1)}
                    className="aspect-[16/10] overflow-hidden rounded-md bg-ink border border-line hover:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    aria-label={`${ph.label} : ${r.title}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={ph.src} alt="" loading="lazy" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
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
          )
        })}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={open.title}
          onClick={() => setOpen(null)}
        >
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between gap-4 mb-3">
              <p className="text-white font-semibold truncate">
                {open.title}{' '}
                <span className="text-gray-400 font-normal">
                  · {photos(open.slug)[index].label} ({index + 1}/4)
                </span>
              </p>
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="shrink-0 flex items-center gap-1 text-sm text-white bg-white/10 border border-white/20 rounded-lg px-3 py-1.5 hover:bg-white/20"
              >
                <X size={16} /> Fermer
              </button>
            </div>
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photos(open.slug)[index].src}
                alt={`${open.title} : ${photos(open.slug)[index].label}`}
                className="w-full h-auto rounded-xl max-h-[72vh] object-contain bg-ink"
              />
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Photo précédente"
                className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 border border-white/20 text-white grid place-items-center hover:bg-black/80"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Photo suivante"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 border border-white/20 text-white grid place-items-center hover:bg-black/80"
              >
                <ChevronRight size={22} />
              </button>
            </div>
            <div className="mt-3 grid grid-cols-4 gap-2">
              {photos(open.slug).map((ph, i) => (
                <button
                  key={ph.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={ph.label}
                  className={`aspect-[16/10] overflow-hidden rounded-lg border-2 ${
                    i === index ? 'border-accent' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ph.src} alt="" className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
