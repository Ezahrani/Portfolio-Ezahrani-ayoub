import {
  ArrowLeftRight,
  BarChart3,
  Building2,
  Calculator,
  Check,
  FileSpreadsheet,
  Package,
  RefreshCw,
  Wallet,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  intro: string
  tasks: string[]
}

const services: Service[] = [
  {
    icon: Calculator,
    title: 'Contrôle de gestion',
    intro: 'Externalisé, à temps partagé ou en renfort de votre équipe.',
    tasks: [
      'Budget annuel, forecasts et reprévisions',
      'Analyse des écarts réel / budget / N-1 et commentaires',
      'Clôtures mensuelles, provisions et cut-off',
      'Calcul des coûts de revient et des marges',
      'Rentabilité par client, produit, activité ou chantier',
      'Suivi des CAPEX et des OPEX',
      'Contrôle de gestion sociale : masse salariale, effectifs',
      'Préparation des comités de direction',
    ],
  },
  {
    icon: Package,
    title: 'Gestion des stocks',
    intro: 'Un suivi simple sous Excel ou entièrement automatisé.',
    tasks: [
      'Valorisation des stocks (CUMP, FIFO)',
      'Inventaires et analyse des écarts',
      'Rotation, couverture et stock dormant',
      'Seuils de réapprovisionnement et alertes',
      'Tableau de bord des stocks relié à votre ERP',
    ],
  },
  {
    icon: BarChart3,
    title: 'Reporting et tableaux de bord',
    intro: 'Des chiffres fiables, à jour, lisibles par la direction.',
    tasks: [
      'Flash mensuel réel / budget / N-1',
      'Reporting de direction et de comité',
      'Indicateurs par activité, site ou filiale',
      'Tableaux de bord Power BI',
      'Reporting groupe et consolidation',
      'Actualisation automatique des données',
    ],
  },
  {
    icon: Wallet,
    title: 'Trésorerie et BFR',
    intro: 'Voir venir le cash et réduire le besoin en fonds de roulement.',
    tasks: [
      'Plan de trésorerie à 13 semaines et à 12 mois',
      'Balance âgée et priorités de relance',
      'Suivi du DSO, du DPO et des stocks',
      'Scénarios de prévision de cash',
    ],
  },
  {
    icon: Building2,
    title: 'Accompagnement des repreneurs',
    intro: 'Vous reprenez une TPE ou une PME : sécuriser les chiffres avant de faire une offre.',
    tasks: [
      'Crash-test financier des dossiers de cession',
      'EBE retraité, free cash-flow et BFR réels',
      'Valorisation indicative de la cible',
      'Capacité d’emprunt et montage via une holding',
      'Plan de financement : apport, banque, prêts d’honneur, Bpifrance',
      'Synthèse « go / no go » et modèle Excel réutilisable',
      'Appui sur la due diligence financière',
    ],
  },
  {
    icon: RefreshCw,
    title: 'Transformation de la fonction finance',
    intro: 'Moins de saisie, plus d’analyse.',
    tasks: [
      'Diagnostic des processus finance',
      'Accélération de la clôture mensuelle',
      'Automatisation des tâches répétitives et agents IA',
      'Choix et mise en place des outils',
      'Formation des équipes et documentation',
    ],
  },
  {
    icon: ArrowLeftRight,
    title: 'Migration et projets ERP',
    intro: 'Sage vers SAP, montée de version SAP ou autre ERP : le volet Finance du projet.',
    tasks: [
      'Expression des besoins Finance',
      'Cartographie des données et du plan de comptes',
      'Reprise et contrôle des données',
      'Recette et tests des processus FI/CO',
      'Formation des utilisateurs et support après la bascule',
    ],
  },
  {
    icon: Wrench,
    title: 'Création d’outils internes',
    intro: 'L’outil qui manque à votre équipe, fait sur mesure.',
    tasks: [
      'Outils de suivi sur mesure (Excel, Power BI, application web)',
      'Agents IA connectés à vos données',
      'Automatisations Python, SQL et Power Query',
      'Connexion de vos sources : ERP, banques, fichiers',
    ],
  },
  {
    icon: FileSpreadsheet,
    title: 'Montage de fichiers et modèles Excel',
    intro: 'Des fichiers propres, fiables et faciles à reprendre.',
    tasks: [
      'Modèles budgétaires et business plans',
      'Fichiers de suivi qui se mettent à jour seuls',
      'Reprise et fiabilisation de vos fichiers existants',
      'Contrôles automatiques et alertes d’incohérence',
    ],
  },
]

export default function Services() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s) => (
        <article key={s.title} className="rounded-2xl border border-line bg-panel p-6 flex flex-col">
          <span className="w-11 h-11 rounded-xl bg-accent/15 text-accent grid place-items-center">
            <s.icon size={22} />
          </span>
          <h3 className="font-display text-lg font-bold text-white mt-4 leading-snug">{s.title}</h3>
          <p className="text-sm text-gray-400 mt-1 leading-relaxed">{s.intro}</p>
          <ul className="mt-4 space-y-2">
            {s.tasks.map((t) => (
              <li key={t} className="flex gap-2 text-sm text-gray-300 leading-snug">
                <Check size={15} className="text-mint shrink-0 mt-0.5" />
                {t}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
