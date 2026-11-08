export type Category = 'automatisation' | 'controle' | 'powerbi'

export interface Realisation {
  slug: string
  title: string
  description: string
  category: Category
  tags: string[]
}

export const categories: { id: Category | 'tous'; label: string }[] = [
  { id: 'tous', label: 'Tout voir' },
  { id: 'automatisation', label: 'Automatisation & IA' },
  { id: 'controle', label: 'Contrôle de gestion' },
  { id: 'powerbi', label: 'Power BI' },
]

export const realisations: Realisation[] = [
  {
    slug: 'agent-ia-ecarts',
    title: "Agent IA d'analyse des écarts",
    description:
      'Un agent IA lit le réel et le budget, repère les écarts significatifs et rédige le commentaire mensuel pour la direction : 1,5 jour de travail ramené à 20 minutes.',
    category: 'automatisation',
    tags: ['Agent IA', 'Clôture', 'Commentaires de gestion'],
  },
  {
    slug: 'automatisation-reporting',
    title: "Automatisation d'un reporting multi-filiales",
    description:
      "De l'extraction SAP et Excel jusqu'à l'envoi au DAF : Power Query, Python, contrôles automatiques, Power BI et agent IA. Reporting produit en 2 h au lieu de 3 jours.",
    category: 'automatisation',
    tags: ['Power Query', 'Python', 'SAP', 'Power BI'],
  },
  {
    slug: 'cloture-j4',
    title: 'Clôture mensuelle : de J+10 à J+4',
    description:
      'Refonte du processus de clôture : extractions et rapprochements automatisés, provisions validées par le contrôleur de gestion, reporting et commentaires préparés automatiquement.',
    category: 'automatisation',
    tags: ['Clôture', 'Process', 'Automatisation'],
  },
  {
    slug: 'orana-budget-2027',
    title: 'ORANA Agro : budget 2027',
    description:
      "Budget 2027 d'un industriel agroalimentaire : CA 360 M MAD, EBE 53,6 M. Passage d'EBE, mix produits, trésorerie, marges par article et saturation des lignes.",
    category: 'controle',
    tags: ['Budget', 'Scénarios', 'Trésorerie'],
  },
  {
    slug: 'excel-budget-scenarios',
    title: 'Modèle budgétaire Excel par scénario',
    description:
      'Un clic sur Prudent, Central ou Ambitieux recalcule le compte de résultat, la trésorerie mensuelle et 15 contrôles automatiques OK / alerte / bloquant.',
    category: 'controle',
    tags: ['Excel avancé', 'Contrôles', 'Scénarios'],
  },
  {
    slug: 'nova-pl-groupe',
    title: 'NOVA Groupe : P&L consolidé, réel vs budget',
    description:
      "Pilotage d'un groupe de 5 filiales : réel vs budget vs N-1, cascade des écarts d'EBE par filiale et atterrissage du CA 2026 à 196 M€.",
    category: 'controle',
    tags: ['Consolidation', 'Écarts', 'Atterrissage'],
  },
  {
    slug: 'excel-flash-mensuel',
    title: 'Flash mensuel Excel automatisé',
    description:
      'Choix de la filiale et du mois dans des listes déroulantes : indicateurs, tableau des filiales, écarts au budget et à N-1 et graphique se recalculent seuls.',
    category: 'controle',
    tags: ['Excel', 'Reporting', 'Automatisation'],
  },
  {
    slug: 'nova-ecarts-standards',
    title: 'NOVA Industrie : écarts sur coûts standards',
    description:
      'Du coût standard au coût réel : écarts matières, main-d’œuvre et frais généraux, suivi du taux de rebut et articles les plus pénalisants.',
    category: 'controle',
    tags: ['Coûts de revient', 'Industrie', 'Analytique'],
  },
  {
    slug: 'nova-bfr',
    title: 'NOVA Groupe : BFR et trésorerie',
    description:
      "Pilotage du cash : 22,2 M€ d'encours clients, balance âgée, DSO 76 j, stocks dormants et taux de service fournisseurs, avec plan d'action.",
    category: 'controle',
    tags: ['BFR', 'Balance âgée', 'Cash'],
  },
  {
    slug: 'helios-energie',
    title: 'HELIOS Énergie : pilotage commercial',
    description:
      "Fournisseur gaz et électricité B2B : volumes vs budget et température, flux d'approvisionnement en Sankey, profil de charge horaire, top clients et couverture prix.",
    category: 'powerbi',
    tags: ['Énergie', 'Sankey', 'Heatmap'],
  },
  {
    slug: 'aura-retail',
    title: 'AURA Retail : performance omnicanale',
    description:
      'CA par canal, tunnel de conversion web, treemap des catégories, magasins positionnés en CA au m² vs marge et top produits avec couverture de stock.',
    category: 'powerbi',
    tags: ['Retail', 'Entonnoir', 'Treemap'],
  },
  {
    slug: 'orion-logistique',
    title: 'ORION Logistique : coûts de transport',
    description:
      'Cascade du coût budgété au coût réel au km, gazole vs coût, radar qualité par hub, rentabilité des lignes et causes de retard.',
    category: 'powerbi',
    tags: ['Transport', 'Cascade', 'Radar'],
  },
  {
    slug: 'nexa-saas',
    title: 'NEXA : tableau de bord SaaS pour le board',
    description:
      "Pont d'ARR, rétention par cohorte en heatmap, efficacité CAC vs LTV par canal, croissance de l'ARR et motifs de churn.",
    category: 'powerbi',
    tags: ['SaaS', 'Cohortes', 'ARR'],
  },
  {
    slug: 'nova-saas',
    title: 'NOVA Digital : métriques SaaS',
    description:
      'MRR 1,96 M€ (+22 %), churn 2,4 %, NRR 89 %. Mouvements de MRR, rétention par cohorte et CA par offre.',
    category: 'powerbi',
    tags: ['MRR', 'Churn', 'DAX'],
  },
  {
    slug: 'modele-donnees',
    title: 'Modèle de données Power BI en étoile',
    description:
      "Schéma en étoile pour un groupe multi-filiales : une table de faits, quatre dimensions, conversion de devises et bibliothèque de mesures DAX (écarts, cumuls, taux d'EBE).",
    category: 'powerbi',
    tags: ['Modélisation', 'DAX', 'Power BI'],
  },
]

export const offres = [
  {
    title: 'Diagnostic et tableau de bord de pilotage',
    price: '1 500 – 3 000 €',
    duration: '2 à 3 semaines',
    text: 'Audit des chiffres disponibles, choix de 10 à 15 indicateurs, premier tableau de bord Excel ou Power BI.',
  },
  {
    title: 'Budget annuel et plan de trésorerie',
    price: '2 500 – 6 000 €',
    duration: '3 à 5 semaines',
    text: 'Hypothèses par scénario, budget mensuel, compte de résultat, trésorerie et BFR, contrôles de cohérence.',
  },
  {
    title: 'Reporting mensuel automatisé',
    price: '3 000 – 8 000 €',
    duration: 'Maintenance : 300 – 600 € / mois',
    text: 'Connexion aux exports comptables, Power Query, modèle Power BI, flash mensuel réel / budget / N-1.',
  },
  {
    title: 'Automatisation et agents IA finance',
    price: 'à partir de 1 500 €',
    duration: 'Sur devis après cadrage',
    text: 'Rapprochements, relances clients, préparation des commentaires de gestion : les tâches répétitives passent en automatique.',
  },
  {
    title: 'Contrôleur de gestion à temps partagé',
    price: '1 200 – 2 800 € / mois',
    duration: 'Engagement de 3 mois, puis au mois',
    text: "2 à 4 jours par mois : clôture et reporting, suivi budgétaire, analyse des écarts, préparation des comités. Sans recrutement ni période d'essai.",
  },
  {
    title: 'Mission en régie',
    price: 'à partir de 550 € / jour',
    duration: 'Renfort ou remplacement',
    text: "Renfort ou remplacement d'un contrôleur de gestion, sur site, en hybride ou à distance, opérationnel dès la première semaine.",
  },
]

export const parcours = [
  {
    period: '2026',
    company: 'GRDF',
    role: 'Analyste Data & Performance, support Grands Comptes',
    text: 'Tableaux de bord Power BI de suivi des consommations, analyses SQL, enrichissement automatisé de plus de 600 comptes clients via les API Sirene.',
  },
  {
    period: '2025 – 2026',
    company: 'CAPS AUTO',
    role: 'Contrôleur de gestion & Business Analyst',
    text: 'Budget et reprévisions, analyse des écarts, rentabilité par activité et par client, tableaux de bord Power BI pour la direction.',
  },
  {
    period: '2025',
    company: 'Dealt',
    role: 'Contrôleur de gestion, reporting financier',
    text: 'Reportings financiers automatisés sous Power BI à partir de SAP, clôtures mensuelles, suivi du CA et de la rentabilité.',
  },
  {
    period: '2023 – 2025',
    company: 'SNOP, groupe FSD',
    role: 'Contrôleur de gestion central & SI, référent Finance migration SAP',
    text: 'Groupe industriel de 23 sites : référent Finance sur la migration SAP FI/CO (recette, tests, formation), reporting réel / budget, calculs de coûts, clôtures.',
  },
  {
    period: '2022 – 2023',
    company: 'JEB Consulting',
    role: 'Consultant contrôle de gestion & pilotage',
    text: 'Mise en place de reportings et de tableaux de bord pour des PME clientes, pilotage de projets de transformation.',
  },
  {
    period: '2021 – 2022',
    company: 'LEONI',
    role: 'Contrôleur de gestion industriel',
    text: 'Indicateurs de performance industrielle, efficience de production par projet, contrôle de gestion sociale, reportings SAP.',
  },
  {
    period: '2021',
    company: 'Crédit Agricole du Maroc',
    role: 'Contrôleur de gestion',
    text: 'Clôtures mensuelles, analyse des écarts réel / budget, suivi des CAPEX, des OPEX et des coûts de personnel.',
  },
]
