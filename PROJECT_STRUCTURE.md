# 📁 Structure du Projet - Portfolio Interactif

## Vue d'ensemble

```
portfolio-interactif/
├── src/
│   ├── app/                    # Pages Next.js App Router
│   │   ├── page.tsx            # Page d'accueil
│   │   ├── layout.tsx          # Layout principal
│   │   ├── globals.css         # Styles globaux
│   │   ├── projects/
│   │   │   ├── page.tsx        # Page des projets
│   │   │   ├── ubereats/
│   │   │   │   └── page.tsx    # Page du projet UberEats
│   │   │   ├── invoice/
│   │   │   │   └── page.tsx    # Page du projet Facturation
│   │   │   ├── social/
│   │   │   │   └── page.tsx    # Page du projet Réseau Social
│   │   │   └── ecommerce/
│   │   │       └── page.tsx    # Page du projet E-Commerce
│   │   └── contact/
│   │       └── page.tsx        # Page de contact
│   ├── components/             # Composants React réutilisables
│   │   ├── Navigation.tsx      # Barre de navigation
│   │   ├── Hero.tsx            # Section héro
│   │   ├── ExperienceBlock.tsx # Bloc d'expérience
│   │   ├── ProjectCard.tsx     # Carte de projet
│   │   ├── MobilePhoneMockup.tsx # Mockup téléphone
│   │   └── Footer.tsx          # Pied de page
│   └── lib/                    # Utilitaires et configurations
│       └── metadata.ts         # Métadonnées SEO
├── public/                     # Fichiers statiques
│   ├── robots.txt             # Robots.txt pour SEO
│   └── sitemap.xml            # Sitemap pour SEO
├── .env.example               # Exemple de variables d'environnement
├── .eslintrc.json             # Configuration ESLint
├── .prettierrc                 # Configuration Prettier
├── .gitignore                 # Fichiers à ignorer par Git
├── package.json               # Dépendances et scripts
├── tsconfig.json              # Configuration TypeScript
├── tailwind.config.js         # Configuration Tailwind CSS
├── postcss.config.js          # Configuration PostCSS
├── next.config.js             # Configuration Next.js
├── README.md                  # Documentation principale
├── QUICK_START.md             # Guide de démarrage rapide
├── CUSTOMIZATION.md           # Guide de personnalisation
├── DEPLOYMENT.md              # Guide de déploiement
└── PROJECT_STRUCTURE.md       # Ce fichier
```

---

## 📄 Description des Fichiers Clés

### `src/app/`
Contient toutes les pages et le layout principal de l'application.

- **page.tsx** : Page d'accueil avec présentation et expériences
- **layout.tsx** : Layout global appliqué à toutes les pages
- **globals.css** : Styles CSS globaux

### `src/components/`
Composants React réutilisables utilisés dans les pages.

- **Navigation.tsx** : Barre de navigation responsive
- **Hero.tsx** : Section héro avec animation
- **ExperienceBlock.tsx** : Bloc d'expérience en style code
- **ProjectCard.tsx** : Carte de projet animée
- **MobilePhoneMockup.tsx** : Mockup de téléphone pour les démos
- **Footer.tsx** : Pied de page avec liens sociaux

### `src/lib/`
Utilitaires et configurations réutilisables.

- **metadata.ts** : Métadonnées SEO centralisées

### `public/`
Fichiers statiques servis directement par Next.js.

- **robots.txt** : Fichier pour les moteurs de recherche
- **sitemap.xml** : Plan du site pour le SEO

### Configuration
- **tailwind.config.js** : Thème et configuration Tailwind CSS
- **tsconfig.json** : Configuration TypeScript
- **next.config.js** : Configuration Next.js
- **postcss.config.js** : Configuration PostCSS

---

## 🔄 Flux de Données

```
┌─────────────────────────────────────────────┐
│         Page (page.tsx)                     │
│  - Récupère les données                     │
│  - Rend les composants                      │
└──────────────┬──────────────────────────────┘
               │
               ├─────────────────────────────────────┐
               │                                     │
        ┌──────▼──────┐                      ┌──────▼──────┐
        │ Navigation  │                      │ Hero        │
        └─────────────┘                      └─────────────┘
               │                                     │
        ┌──────▼──────┐                      ┌──────▼──────┐
        │ ExperienceBlock                    │ ProjectCard │
        └─────────────┘                      └─────────────┘
               │                                     │
        ┌──────▼──────┐                      ┌──────▼──────┐
        │ MobilePhoneMockup                  │ Footer      │
        └─────────────┘                      └─────────────┘
```

---

## 🎨 Styles et Thème

### Hiérarchie des Styles

1. **globals.css** : Styles globaux (scrollbar, code blocks, etc.)
2. **Tailwind CSS** : Classes utilitaires (tailwind.config.js)
3. **Composants** : Styles spécifiques aux composants

### Couleurs Principales

- **Accent** : `#00d9ff` (cyan)
- **Dark 950** : `#030712` (arrière-plan)
- **Dark 900** : `#111827` (sections)
- **Dark 800** : `#1f2937` (cartes)

---

## 🔐 Variables d'Environnement

Créez un fichier `.env.local` basé sur `.env.example` :

```
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_GITHUB_URL=https://github.com/votre-username
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/votre-profil
NEXT_PUBLIC_EMAIL=contact@example.com
```

---

## 📦 Dépendances Principales

- **Next.js 14** : Framework React
- **React 18** : Bibliothèque UI
- **Tailwind CSS** : Styling utilitaire
- **Framer Motion** : Animations
- **Lucide React** : Icônes
- **TypeScript** : Typage statique

---

## 🚀 Scripts Disponibles

```bash
npm run dev          # Lancer le serveur de développement
npm run build        # Build pour la production
npm start            # Lancer le serveur de production
npm run lint         # Vérifier le code avec ESLint
npm run type-check   # Vérifier les types TypeScript
npm run format       # Formater le code avec Prettier
npm run format:check # Vérifier le formatage
```

---

## 📱 Responsive Design

Le projet utilise Tailwind CSS avec les breakpoints suivants :

- **sm** : 640px (petits téléphones)
- **md** : 768px (tablettes)
- **lg** : 1024px (petits écrans)
- **xl** : 1280px (écrans normaux)
- **2xl** : 1536px (grands écrans)

---

## 🔍 SEO et Performance

### SEO
- Métadonnées dynamiques
- Sitemap XML
- Robots.txt
- Open Graph
- Twitter Cards

### Performance
- Code splitting automatique
- Optimisation des images
- Minification CSS/JS
- Lazy loading des composants

---

## 🧪 Testing

Pour tester le projet :

```bash
# Vérifier les types
npm run type-check

# Vérifier le code
npm run lint

# Vérifier le formatage
npm run format:check
```

---

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Framer Motion](https://www.framer.com/motion/)
- [Documentation Lucide React](https://lucide.dev)

---

## 🤝 Contribution

Pour contribuer au projet :

1. Créez une branche (`git checkout -b feature/ma-feature`)
2. Commitez vos changements (`git commit -m 'Ajout de ma feature'`)
3. Poussez vers la branche (`git push origin feature/ma-feature`)
4. Ouvrez une Pull Request

---

**Dernière mise à jour : 17 novembre 2024**
