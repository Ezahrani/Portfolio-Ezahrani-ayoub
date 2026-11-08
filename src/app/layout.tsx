import type { Metadata } from 'next'
import './globals.css'

const blueCFavicon = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%230099ff'/><text x='32' y='44' font-size='36' font-family='Inter, Arial, sans-serif' text-anchor='middle' fill='white'>C</text></svg>"

export const metadata: Metadata = {
  title: 'Ayoub Ezahrani | Contrôleur de gestion freelance & automatisation IA',
  description:
    "Contrôleur de gestion freelance à Paris : budget, clôtures, analyse des écarts, tableaux de bord Power BI, automatisation et agents IA pour la fonction finance.",
  keywords: ['contrôleur de gestion freelance', 'Power BI', 'automatisation finance', 'agents IA', 'budget', 'reporting', 'SAP FI/CO', 'Paris'],
  authors: [{ name: 'Ayoub Ezahrani' }],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    title: 'Ayoub Ezahrani | Contrôle de gestion & automatisation IA',
    description: 'Des chiffres fiables et des reportings qui se font seuls : contrôle de gestion, Power BI, automatisation et agents IA.',
    images: [{ url: '/portfolio/agent-ia-ecarts.webp', width: 1600, height: 900, alt: 'Agent IA d’analyse des écarts' }],
  },
  icons: {
    icon: blueCFavicon,
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
