# Guide de Personnalisation - Portfolio Interactif

Ce guide vous aidera à personnaliser votre portfolio selon vos besoins.

## 🎨 Personnaliser les Couleurs

### Modifier la couleur principale (accent)

Éditez `tailwind.config.js` :

```javascript
colors: {
  accent: '#00d9ff',        // Couleur principale (cyan par défaut)
  accentDark: '#0099cc',    // Couleur sombre
  // ... autres couleurs
}
```

### Exemples de palettes de couleurs

**Bleu Moderne**
```javascript
accent: '#3b82f6',
accentDark: '#1e40af',
```

**Rose Vibrant**
```javascript
accent: '#ec4899',
accentDark: '#be185d',
```

**Vert Naturel**
```javascript
accent: '#10b981',
accentDark: '#065f46',
```

**Orange Chaud**
```javascript
accent: '#f97316',
accentDark: '#c2410c',
```

---

## 📝 Modifier le Contenu

### 1. Changer le Titre et la Description

Éditez `src/app/layout.tsx` :

```typescript
export const metadata: Metadata = {
  title: 'Votre Nom | Développeur Web',
  description: 'Votre description personnelle',
}
```

### 2. Modifier les Expériences

Éditez `src/app/page.tsx` et modifiez le tableau `experiences` :

```typescript
const experiences = [
  {
    company: 'Votre Entreprise',
    role: 'Votre Rôle',
    period: '2023 - 2024',
    description: 'Description de votre expérience',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    achievements: [
      'Réussite 1',
      'Réussite 2',
      'Réussite 3',
    ],
  },
  // Ajoutez plus d'expériences...
]
```

### 3. Modifier les Compétences

Toujours dans `src/app/page.tsx`, modifiez la section "Mes Compétences" :

```typescript
{
  category: 'Frontend',
  skills: ['React', 'Vue.js', 'Angular', 'TypeScript']
}
```

### 4. Modifier les Projets

Éditez `src/app/projects/page.tsx` et modifiez le tableau `projects` :

```typescript
const projects = [
  {
    id: 'mon-projet',
    title: 'Titre du Projet',
    description: 'Description courte',
    technologies: ['React', 'Node.js'],
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/username/project',
  },
]
```

---

## 🔗 Ajouter vos Liens Sociaux

### Modifier les Liens dans le Footer

Éditez `src/components/Footer.tsx` et mettez à jour les URLs :

```typescript
<a href="https://linkedin.com/in/votre-profil" className="...">
  <Linkedin size={20} />
</a>
```

### Ajouter des Réseaux Sociaux Supplémentaires

Importez les icônes de Lucide React :

```typescript
import { Instagram, YouTube, Dribbble } from 'lucide-react'

// Puis ajoutez-les dans le tableau des réseaux sociaux
```

---

## 🖼️ Ajouter des Images

### Ajouter une Image de Profil

1. Placez votre image dans `public/images/`
2. Modifiez le composant Hero ou créez une section dédiée

```typescript
<img 
  src="/images/profile.jpg" 
  alt="Votre Nom"
  className="w-32 h-32 rounded-full"
/>
```

### Ajouter des Images de Projets

1. Placez les images dans `public/images/projects/`
2. Modifiez le ProjectCard pour afficher les images

---

## 🎯 Personnaliser les Pages de Projets

### Modifier une Page de Projet

Éditez `src/app/projects/[id]/page.tsx` :

```typescript
// Modifier le titre
<h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
  🎨 Titre de Votre <span className="text-accent">Projet</span>
</h1>

// Modifier la description
<p className="text-gray-400 text-lg max-w-2xl">
  Votre description du projet
</p>

// Modifier les fonctionnalités
{[
  { title: 'Fonctionnalité 1', desc: 'Description' },
  { title: 'Fonctionnalité 2', desc: 'Description' },
].map((feature, index) => (
  // ...
))}
```

---

## 📧 Configurer le Formulaire de Contact

### Ajouter une Intégration Email

1. Installez une bibliothèque d'email :
```bash
npm install nodemailer
```

2. Créez une route API `src/app/api/contact/route.ts` :

```typescript
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  await transporter.sendMail({
    from: email,
    to: process.env.NEXT_PUBLIC_EMAIL,
    subject,
    text: message,
  })

  return Response.json({ success: true })
}
```

3. Mettez à jour le formulaire pour envoyer les données

---

## 🎬 Ajouter des Animations Personnalisées

### Modifier les Animations Framer Motion

Éditez les variantes dans vos composants :

```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}
```

---

## 🌍 Changer la Langue

### Ajouter le Support du Multilingue

1. Installez `next-i18next` :
```bash
npm install next-i18next
```

2. Créez les fichiers de traduction dans `public/locales/`

3. Configurez `next-i18next.config.js`

---

## 📱 Optimiser pour Mobile

### Tester sur Mobile

```bash
# Lancer le serveur de développement
npm run dev

# Accédez à http://[votre-ip]:3000 depuis votre téléphone
```

### Modifier les Breakpoints

Éditez `tailwind.config.js` pour ajouter des breakpoints personnalisés :

```javascript
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

---

## 🚀 Ajouter de Nouvelles Sections

### Créer une Nouvelle Section

1. Créez un nouveau composant dans `src/components/`
2. Importez-le dans la page appropriée
3. Ajoutez le contenu et les styles

Exemple :

```typescript
// src/components/Testimonials.tsx
export default function Testimonials() {
  return (
    <section className="py-20 px-4 md:px-8">
      {/* Contenu */}
    </section>
  )
}
```

---

## 💾 Sauvegarder vos Modifications

```bash
# Commitez vos changements
git add .
git commit -m "Personnalisation du portfolio"

# Poussez vers GitHub
git push origin main
```

---

## 🆘 Besoin d'Aide ?

- Consultez la [documentation Next.js](https://nextjs.org/docs)
- Consultez la [documentation Tailwind CSS](https://tailwindcss.com/docs)
- Consultez la [documentation Framer Motion](https://www.framer.com/motion/)

---

**Amusez-vous à personnaliser votre portfolio ! 🎉**
