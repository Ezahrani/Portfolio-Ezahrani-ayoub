import type { Metadata } from 'next'
import './globals.css'

const blueCFavicon = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><rect width='64' height='64' rx='14' fill='%230099ff'/><text x='32' y='44' font-size='36' font-family='Inter, Arial, sans-serif' text-anchor='middle' fill='white'>C</text></svg>"

export const metadata: Metadata = {
  title: 'CodeFin Portfolio | Mobile & Full-Stack Developer',
  description: 'Showcasing high-impact mobile, web, and Unity projects crafted by CodeFin.',
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
      <body className="bg-dark-950">
        {children}
      </body>
    </html>
  )
}
