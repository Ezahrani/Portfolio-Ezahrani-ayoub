export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row gap-4 justify-between text-sm text-gray-500">
        <div>
          <p className="font-display font-bold text-white">Ayoub Ezahrani · CodeFin</p>
          <p>Contrôle de gestion freelance, automatisation et agents IA · Colombes, Île-de-France</p>
        </div>
        <div className="md:text-right">
          <a href="mailto:ezahraniayoub@gmail.com" className="text-gray-300 hover:text-white">
            ezahraniayoub@gmail.com
          </a>
          <p>© {new Date().getFullYear()} · Cas d&apos;étude construits sur des données fictives</p>
        </div>
      </div>
    </footer>
  )
}
