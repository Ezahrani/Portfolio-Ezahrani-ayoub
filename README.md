# 📚 Portfolio Interactif – Développeur Web & Mobile

Portfolio premium interactif avec design dark mode, animations fluides, responsive design et **4 applications mobiles complètes et fonctionnelles avec émulateur interactif**. Conçu pour présenter de manière élégante et interactive votre parcours, vos compétences et vos projets développés en Web, Mobile et Unity.

## 🎨 Caractéristiques

- **Design Dark Mode Premium** : Thème sombre élégant, minimaliste et futuriste
- **Animations Fluides** : Transitions, hover effects, parallaxe et reveal-on-scroll avec Framer Motion
- **Responsive Design** : Optimisé pour PC, tablette et smartphone
- **Performances Optimisées** : Rendu rapide et propre
- **Sections Interactives** :
  - Page d'accueil avec présentation et expériences en style code
  - Galerie de projets avec cartes animées
  - Mockups téléphone interactifs pour les applications mobiles
  - Page de contact avec formulaire
  - Liens vers les réseaux sociaux

## 🚀 Démarrage Rapide

### Prérequis

- Node.js 16+ 
- npm ou yarn

### Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible à `http://localhost:3000`

### Build pour la production

```bash
npm run build
npm start
```

## 📁 Structure du Projet

```
src/
├── app/
│   ├── page.tsx              # Page d'accueil
│   ├── projects/
│   │   └── page.tsx          # Page des projets
│   ├── contact/
│   │   └── page.tsx          # Page de contact
│   ├── layout.tsx            # Layout principal
│   └── globals.css           # Styles globaux
├── components/
│   ├── Navigation.tsx        # Barre de navigation
│   ├── Hero.tsx              # Section héro
│   ├── ExperienceBlock.tsx   # Bloc d'expérience
│   ├── ProjectCard.tsx       # Carte de projet
│   └── MobilePhoneMockup.tsx # Mockup téléphone
└── ...
```

## 🛠️ Technologies Utilisées

- **Next.js 14** - Framework React
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling utilitaire
- **Framer Motion** - Animations
- **Lucide React** - Icônes
- **PostCSS** - Traitement CSS

## 📝 Personnalisation

### Modifier les expériences

Éditez le tableau `experiences` dans `src/app/page.tsx` :

```typescript
const experiences = [
  {
    company: "Votre Entreprise",
    role: "Votre Rôle",
    period: "2023 - 2024",
    description: "Description de votre expérience",
    technologies: ["Tech1", "Tech2"],
    achievements: ["Réussite 1", "Réussite 2"],
  },
  // ...
]
```

### Modifier les projets

Éditez le tableau `projects` dans `src/app/projects/page.tsx` :

```typescript
const projects = [
  {
    id: "project-id",
    title: "Titre du Projet",
    description: "Description courte",
    technologies: ["React", "Node.js"],
    demoUrl: "https://...",
    githubUrl: "https://...",
  },
  // ...
]
```

### Modifier les couleurs

Éditez `tailwind.config.js` pour personnaliser les couleurs :

```javascript
colors: {
  accent: '#00d9ff', // Couleur principale
  accentDark: '#0099cc',
  // ...
}
```

## 🎯 Sections Principales

### 1. Page d'Accueil
- Présentation impactante
- Section expériences en style code
- Section compétences
- CTA pour collaborer

### 2. Page Projets
- Grille de projets avec cartes animées
- Démonstration des applications mobiles
- Liens vers les démos et GitHub

### 3. Page Contact
- Formulaire de contact
- Liens vers les réseaux sociaux
- Informations de contact

## 📱 Applications Mobiles Démontrées

Le portfolio inclut des mockups interactifs pour :
1. **UberEats Clone** - Application de livraison de nourriture
2. **Facturation & Gestion** - Plateforme pour freelancers
3. **Réseau Social** - Partage de photos et chat
4. **E-Commerce** - Plateforme de vente en ligne

## 🌐 Déploiement

### Déployer sur Vercel

```bash
npm install -g vercel
vercel
```

### Déployer sur Netlify

```bash
npm run build
# Déployer le dossier .next
```

## 📄 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

## 🤝 Support

Pour toute question ou suggestion, n'hésitez pas à me contacter.

---

**Créé avec ❤️ pour les développeurs ambitieux**
