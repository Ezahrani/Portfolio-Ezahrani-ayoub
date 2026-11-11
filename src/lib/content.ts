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
    slug: 'nova-ecarts-standards',
    title: 'NOVA Industrie : écarts sur coûts standards',
    description:
      'Du coût standard au coût réel : écarts matières, main-d’œuvre et frais généraux, suivi du taux de rebut et articles les plus pénalisants.',
    category: 'controle',
    tags: ['Coûts de revient', 'Industrie', 'Analytique'],
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

export interface Mission {
  slug: string
  client: string
  sector: string
  title: string
  context: string
  actions: string[]
  result: string
}

export const missions: Mission[] = [
  {
    slug: 'mission-grdf',
    client: 'GRDF',
    sector: 'Énergie',
    title: 'Pilotage data des Grands Comptes',
    context: 'Appui aux Responsables Grands Comptes sur le suivi des consommations et la qualité des données clients.',
    actions: [
      'Tableaux de bord Power BI de suivi des consommations',
      'Analyses SQL et plans de comptes',
      'Enrichissement automatisé des comptes via les API Sirene',
    ],
    result: 'Plus de 600 comptes clients fiabilisés et enrichis automatiquement.',
  },
  {
    slug: 'mission-snop',
    client: 'SNOP, groupe FSD',
    sector: 'Industrie automobile',
    title: 'Référent Finance sur la migration SAP FI/CO',
    context: 'Groupe industriel de 23 sites en migration de version SAP, avec un reporting groupe à maintenir.',
    actions: [
      'Recueil des besoins Finance et cahier de recette FI, CO et BW',
      'Tests, suivi des anomalies et formation des utilisateurs',
      'Reporting réel / budget, calculs de coûts et clôtures',
    ],
    result: 'Bascule SAP accompagnée côté Finance sur les 23 sites du groupe.',
  },
  {
    slug: 'mission-caps-auto',
    client: 'CAPS AUTO',
    sector: 'Services automobile',
    title: 'Budget, rentabilité client et tableaux de bord direction',
    context: 'Direction qui voulait piloter son activité par client et par activité, avec un budget suivi chaque mois.',
    actions: [
      'Construction du budget et des reprévisions',
      'Analyse mensuelle des écarts réel / budget',
      'Rentabilité par activité et par client, tableaux de bord Power BI',
    ],
    result: 'Un pilotage mensuel partagé avec la direction, écarts expliqués et actions suivies.',
  },
  {
    slug: 'mission-dealt',
    client: 'Dealt',
    sector: 'Services',
    title: 'Reporting financier automatisé depuis SAP',
    context: 'Reportings financiers produits à la main à partir d’exports SAP, avec des clôtures sous pression.',
    actions: [
      'Reportings Power BI alimentés directement depuis SAP',
      'Participation aux clôtures mensuelles',
      'Suivi du chiffre d’affaires et de la rentabilité',
    ],
    result: 'Des reportings qui se mettent à jour sans copier-coller.',
  },
  {
    slug: 'mission-leoni',
    client: 'LEONI',
    sector: 'Industrie',
    title: 'Contrôle de gestion industriel et performance de production',
    context: 'Usine de câblage automobile avec des enjeux d’efficience par projet client.',
    actions: [
      'Indicateurs de performance industrielle et efficience par projet',
      'Analyse des coûts de production',
      'Contrôle de gestion sociale et reportings SAP',
    ],
    result: 'Une lecture de la performance de production projet par projet.',
  },
  {
    slug: 'mission-pme',
    client: 'Missions de conseil',
    sector: 'PME et ETI',
    title: 'Tableaux de bord et pilotage pour PME',
    context: 'Dirigeants de PME sans contrôleur de gestion, qui pilotaient à partir du relevé bancaire.',
    actions: [
      'Mise en place de reportings et de tableaux de bord',
      'Budgets simples et suivi de trésorerie',
      'Accompagnement des équipes dans la prise en main',
    ],
    result: 'Plus de 20 entreprises accompagnées dans leur pilotage financier.',
  },
]
