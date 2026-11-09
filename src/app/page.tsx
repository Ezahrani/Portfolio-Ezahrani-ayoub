import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import { missions, offres, parcours } from '@/lib/content'
import { asset } from '@/lib/basePath'
import { ArrowRight, Bot, Check, Linkedin, Mail, MapPin, Smartphone, TrendingUp } from 'lucide-react'

const chiffres = [
  { value: '6 ans', label: 'en contrôle de gestion, industrie, énergie, banque et services' },
  { value: '23 sites', label: 'couverts comme référent Finance sur une migration SAP FI/CO' },
  { value: '600+', label: 'comptes clients enrichis automatiquement via API' },
  { value: '20+', label: 'entreprises accompagnées en France et au Maroc' },
]

const references = ['GRDF', 'SNOP · groupe FSD', 'CAPS AUTO', 'Dealt', 'LEONI', 'Crédit Agricole du Maroc']

const controle = [
  'Budget, forecast et reprévisions par scénario',
  'Analyse des écarts réel / budget / N-1, commentaires de gestion',
  'Clôtures mensuelles, provisions, rentabilité par client, produit ou activité',
  'Tableaux de bord Power BI et reportings pour la direction',
  'Coûts de revient, BFR et trésorerie',
  'Référent Finance sur les projets SAP FI/CO (besoins, recette, formation)',
]

const automatisation = [
  'Reportings qui se mettent à jour seuls : Power Query, SQL, Python',
  "Agents IA intégrés aux process finance : commentaires d'écarts, questions budgétaires, documents",
  'Rapprochements, consolidations et contrôles automatiques',
  'Enrichissement et fiabilisation de données via API',
  'Audit de vos tâches répétitives et chiffrage du temps gagné',
  'Livraison par étapes, documentée, pour que votre équipe garde la main',
]

const methode = [
  { when: 'Semaine 1', title: 'Cadrage', text: 'Les décisions à éclairer, les indicateurs utiles, les exports disponibles.' },
  { when: 'Semaines 1 à 2', title: 'Données', text: 'Extraction, nettoyage, rapprochement avec la balance. Les anomalies sont listées, jamais masquées.' },
  { when: 'Semaines 2 à 4', title: 'Construction', text: 'Modèle, formules, automatisations, tableaux de bord. Une version intermédiaire chaque semaine.' },
  { when: 'Dernière semaine', title: 'Passation', text: "Mode d'emploi, prise en main, première clôture faite ensemble." },
]

const outils = ['Power BI · DAX', 'Excel avancé', 'Power Query', 'SQL', 'Python', 'SAP FI/CO', 'SAP BW', 'Agents IA (Claude, ChatGPT, Copilot)', 'API']

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight text-balance">{title}</h2>
      {text && <p className="text-gray-400 text-lg mt-4 leading-relaxed">{text}</p>}
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-ink text-gray-200 overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section id="accueil" className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="pointer-events-none absolute -top-40 -left-40 w-[620px] h-[620px] rounded-full bg-accent/25 blur-[140px]" />
        <div className="pointer-events-none absolute top-40 -right-40 w-[520px] h-[520px] rounded-full bg-mint/15 blur-[140px]" />
        <div className="relative max-w-6xl mx-auto">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-mint border border-mint/30 bg-mint/10 rounded-full px-3 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-mint" /> Disponible pour de nouvelles missions
          </p>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.02] tracking-tight max-w-5xl text-balance">
            Des chiffres fiables. <span className="text-gradient">Des reportings qui se font seuls.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            Je suis Ayoub Ezahrani, contrôleur de gestion freelance et développeur. Je pilote votre performance financière
            (budget, clôtures, analyse des écarts, Power BI) et j&apos;automatise ce qui peut l&apos;être, jusqu&apos;aux agents IA.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-ink font-bold hover:bg-white"
            >
              Parler de votre besoin <ArrowRight size={18} />
            </a>
            <a
              href="#realisations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-line text-white font-semibold hover:border-accent"
            >
              Voir les réalisations
            </a>
          </div>

          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {chiffres.map((c) => (
              <div key={c.value} className="rounded-2xl border border-line bg-panel/80 p-5">
                <p className="font-display text-3xl md:text-4xl font-extrabold text-white">{c.value}</p>
                <p className="text-sm text-gray-400 mt-1 leading-snug">{c.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-500">
            <span className="uppercase tracking-widest text-xs">Ils m&apos;ont fait confiance</span>
            {references.map((r) => (
              <span key={r} className="font-semibold text-gray-300">
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Expertise"
            title="Deux métiers rarement réunis chez la même personne"
            text="Je comprends vos enjeux financiers et je construis les outils qui font le travail répétitif à la place de vos équipes."
          />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-line bg-panel p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-11 h-11 rounded-xl bg-amber/15 text-amber grid place-items-center">
                  <TrendingUp size={22} />
                </span>
                <h3 className="font-display text-2xl font-bold text-white">Contrôle de gestion</h3>
              </div>
              <ul className="space-y-3">
                {controle.map((i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <Check size={18} className="text-amber shrink-0 mt-1" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/15 to-panel p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-11 h-11 rounded-xl bg-accent/20 text-accent grid place-items-center">
                  <Bot size={22} />
                </span>
                <h3 className="font-display text-2xl font-bold text-white">Automatisation & agents IA</h3>
              </div>
              <ul className="space-y-3">
                {automatisation.map((i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <Check size={18} className="text-accent shrink-0 mt-1" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Réalisations */}
      <section id="realisations" className="py-20 px-4 md:px-8 bg-panel/40 border-y border-line">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Réalisations"
            title="Ce que je livre, sur des cas d'entreprise"
            text="Agents IA, automatisations, modèles budgétaires et rapports Power BI. Les cas d'étude reposent sur des entreprises et des données fictives, construites pour être cohérentes de bout en bout."
          />
          <Gallery />
        </div>
      </section>

      {/* Offres */}
      <section id="offres" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Missions"
            title="Des forfaits clairs, un livrable à chaque fois"
            text="Prix indicatifs hors taxes : le prix varie en fonction de la mission."
          />
          <div className="mb-8 rounded-2xl border border-amber/40 bg-amber/10 px-5 py-4 text-sm text-gray-200 leading-relaxed">
            <span className="font-bold text-amber">Le prix varie en fonction de la mission :</span> périmètre, taille de
            l&apos;entreprise, état des données, niveau d&apos;automatisation attendu et délai. Après un premier échange
            gratuit de 30 minutes, vous recevez un devis précis et sans surprise.
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offres.map((o) => (
              <div key={o.title} className="rounded-2xl border border-line bg-panel p-6 flex flex-col">
                <h3 className="font-display text-lg font-bold text-white">{o.title}</h3>
                <p className="font-display text-2xl font-extrabold text-accent mt-3">{o.price}</p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed flex-1">{o.text}</p>
                <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-line">{o.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section id="methode" className="py-20 px-4 md:px-8 bg-panel/40 border-y border-line">
        <div className="max-w-6xl mx-auto">
          <SectionTitle eyebrow="Méthode" title="Quatre étapes, un outil que vos équipes savent faire vivre" />
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {methode.map((m, i) => (
              <li key={m.title} className="rounded-2xl border border-line bg-ink p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{m.when}</p>
                <p className="font-display text-xl font-bold text-white mt-2">
                  <span className="text-accent">{i + 1}.</span> {m.title}
                </p>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{m.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 flex flex-wrap gap-2">
            {outils.map((o) => (
              <span key={o} className="px-3 py-1.5 rounded-lg border border-line bg-ink text-sm text-gray-300">
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Entreprises accompagnées */}
      <section id="accompagnement" className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl border border-accent/40 bg-gradient-to-r from-accent/20 via-panel to-coral/10 p-8 md:p-12 grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <div>
            <p className="font-display text-7xl md:text-8xl font-extrabold text-white leading-none">20+</p>
            <p className="text-accent font-semibold mt-2">entreprises accompagnées</p>
          </div>
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white text-balance">
              Grands groupes, ETI et PME, en France et au Maroc
            </h2>
            <p className="text-gray-300 mt-3 leading-relaxed">
              Énergie, industrie automobile, services, banque, conseil : des directions financières de groupes de 23 sites
              aux dirigeants de PME qui pilotaient jusque-là à partir de leur relevé bancaire.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Énergie', 'Industrie automobile', 'Industrie', 'Services', 'Banque', 'Conseil aux PME'].map((s) => (
                <span key={s} className="px-3 py-1 rounded-full text-sm border border-white/20 bg-white/5 text-gray-200">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Missions réalisées */}
      <section id="missions" className="py-20 px-4 md:px-8 bg-panel/40 border-y border-line">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Missions réalisées"
            title="Mes principales missions"
            text="Le contexte, ce que j'ai fait et le résultat, pour quelques-unes des entreprises accompagnées."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {missions.map((m) => (
              <article key={m.slug} className="rounded-2xl border border-line bg-ink overflow-hidden flex flex-col">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(`/portfolio/${m.slug}.webp`)}
                  alt={`${m.client} : ${m.title}`}
                  loading="lazy"
                  className="w-full aspect-[16/10] object-cover"
                />
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                    {m.sector} · {m.client}
                  </p>
                  <h3 className="font-display text-xl font-bold text-white leading-snug">{m.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{m.context}</p>
                  <ul className="space-y-1.5">
                    {m.actions.map((a) => (
                      <li key={a} className="flex gap-2 text-sm text-gray-300">
                        <Check size={16} className="text-mint shrink-0 mt-0.5" />
                        {a}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-4 border-t border-line text-sm font-semibold text-white">{m.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section id="parcours" className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-10">
          <div>
            <SectionTitle eyebrow="Parcours" title="Énergie, industrie, banque, services" />
            <div className="rounded-2xl border border-line bg-panel p-6 text-sm text-gray-300 space-y-3">
              <p className="font-semibold text-white">Formation</p>
              <p>
                Master Contrôle de gestion & Systèmes d&apos;information
                <br />
                <span className="text-gray-500">Brest Business School</span>
              </p>
              <p>
                Master Gestion financière et comptable
                <br />
                <span className="text-gray-500">ENCG Settat</span>
              </p>
            </div>
          </div>
          <ol className="relative border-l border-line ml-2 space-y-8">
            {parcours.map((p) => (
              <li key={p.company + p.period} className="pl-7 relative">
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-ink" />
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{p.period}</p>
                <p className="font-display text-xl font-bold text-white mt-1">{p.company}</p>
                <p className="text-accent text-sm font-semibold">{p.role}</p>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Développement */}
      <section id="developpement" className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto rounded-3xl border border-line bg-gradient-to-r from-panel to-ink p-8 md:p-10 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
          <span className="w-14 h-14 rounded-2xl bg-mint/15 text-mint grid place-items-center">
            <Smartphone size={28} />
          </span>
          <div>
            <h2 className="font-display text-2xl font-bold text-white">Aussi développeur d&apos;applications</h2>
            <p className="text-gray-400 mt-2 leading-relaxed">
              Créateur de Match&amp;Move, application de mise en relation sportive disponible sur iOS et Android
              (Flutter, Firebase). C&apos;est ce qui me permet de construire moi-même vos automatisations et vos agents IA.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-line text-white font-semibold hover:border-mint whitespace-nowrap"
          >
            Projets mobiles <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-3">Contact</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight text-balance">
            Un budget à monter, un reporting à automatiser ?
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Envoyez-moi deux lignes sur votre contexte : taille, outils, échéance. Je vous réponds sous 24 h avec une
            proposition de cadrage et un prix.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            <a
              href="mailto:contact@codefin.fr"
              className="rounded-2xl border border-accent/60 bg-panel p-5 hover:border-accent"
            >
              <Mail className="text-accent" size={22} />
              <p className="text-white font-semibold mt-3">Email CodeFin</p>
              <p className="text-gray-400 text-sm break-all select-all">contact@codefin.fr</p>
            </a>
            <a
              href="mailto:ezahraniayoub@gmail.com"
              className="rounded-2xl border border-line bg-panel p-5 hover:border-accent"
            >
              <Mail className="text-accent" size={22} />
              <p className="text-white font-semibold mt-3">Email direct</p>
              <p className="text-gray-400 text-sm break-all select-all">ezahraniayoub@gmail.com</p>
            </a>
            <a
              href="https://www.linkedin.com/in/ayoub-ezahrani-0a0861224/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-line bg-panel p-5 hover:border-accent"
            >
              <Linkedin className="text-accent" size={22} />
              <p className="text-white font-semibold mt-3">LinkedIn</p>
              <p className="text-gray-400 text-sm">Ayoub Ezahrani</p>
            </a>
            <div className="rounded-2xl border border-line bg-panel p-5">
              <MapPin className="text-accent" size={22} />
              <p className="text-white font-semibold mt-3">Basé à Colombes</p>
              <p className="text-gray-400 text-sm">Île-de-France · sur site, hybride ou à distance</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
