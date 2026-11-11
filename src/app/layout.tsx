import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://codefin.fr'),
  title: 'CodeFin | Cabinet de contrôle de gestion & automatisation IA',
  description:
    "CodeFin, cabinet de conseil en contrôle de gestion en Île-de-France : budget, clôtures, analyse des écarts, tableaux de bord Power BI, automatisation et agents IA pour la fonction finance.",
  keywords: ['cabinet contrôle de gestion', 'contrôleur de gestion externalisé', 'Power BI', 'automatisation finance', 'agents IA', 'budget', 'reporting', 'SAP FI/CO', 'Paris'],
  authors: [{ name: 'Ayoub Ezahrani', url: 'https://codefin.fr' }],
  applicationName: 'CodeFin',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://codefin.fr',
    siteName: 'CodeFin',
    title: 'CodeFin | Contrôle de gestion & automatisation IA',
    description: 'Des chiffres fiables et des reportings qui se font seuls : contrôle de gestion, Power BI, automatisation et agents IA.',
    images: [{ url: '/portfolio/agent-ia-ecarts.webp', width: 1600, height: 900, alt: 'Agent IA d’analyse des écarts' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&display=swap"
        />
      </head>
      <body className="bg-ink">
        {children}
      </body>
    </html>
  )
}
