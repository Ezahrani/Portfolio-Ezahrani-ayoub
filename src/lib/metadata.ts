import { Metadata } from 'next'

export const baseMetadata: Metadata = {
  title: 'Portfolio Interactif | Développeur Web & Mobile',
  description: 'Portfolio premium présentant mes projets en Web, Mobile et Unity. Découvrez mes compétences en React, Next.js, Flutter et bien plus.',
  keywords: ['développeur', 'web', 'mobile', 'portfolio', 'react', 'next.js', 'flutter', 'unity'],
  authors: [{ name: 'Développeur Web' }],
  creator: 'Développeur Web',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://portfolio.example.com',
    title: 'Portfolio Interactif | Développeur Web & Mobile',
    description: 'Portfolio premium présentant mes projets en Web, Mobile et Unity',
    images: [
      {
        url: 'https://portfolio.example.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Interactif',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio Interactif | Développeur Web & Mobile',
    description: 'Portfolio premium présentant mes projets en Web, Mobile et Unity',
    images: ['https://portfolio.example.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export const projectMetadata = (title: string, description: string): Metadata => ({
  title: `${title} | Portfolio Interactif`,
  description,
  openGraph: {
    title: `${title} | Portfolio Interactif`,
    description,
    type: 'website',
  },
})
