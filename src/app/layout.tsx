import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Portfolio Interactif | Développeur Web & Mobile',
  description: 'Portfolio premium présentant mes projets en Web, Mobile et Unity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-dark-950">
        {children}
      </body>
    </html>
  )
}
