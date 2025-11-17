# 🚀 Démarrage Rapide - Portfolio Interactif

Bienvenue ! Ce guide vous aidera à démarrer en moins de 5 minutes.

## ⚡ Installation Rapide

### 1. Cloner le projet
```bash
git clone <votre-repository>
cd portfolio-interactif
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Lancer le serveur de développement
```bash
npm run dev
```

### 4. Ouvrir dans le navigateur
Allez à `http://localhost:3000`

---

## 📝 Modifications Essentielles

### 1. Changer votre nom et titre

Éditez `src/app/page.tsx` (ligne ~43) :

```typescript
<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
  <span className="text-white">Votre Nom </span>
  <span className="text-accent">Votre Titre</span>
</h1>
```

### 2. Ajouter vos expériences

Éditez `src/app/page.tsx` (ligne ~49) :

```typescript
const experiences = [
  {
    company: 'Votre Entreprise',
    role: 'Votre Rôle',
    period: '2023 - 2024',
    description: 'Votre description',
    technologies: ['Tech1', 'Tech2'],
    achievements: ['Réussite 1', 'Réussite 2'],
  },
]
```

### 3. Ajouter vos projets

Éditez `src/app/projects/page.tsx` (ligne ~7) :

```typescript
const projects = [
  {
    id: 'mon-projet',
    title: 'Titre du Projet',
    description: 'Description courte',
    technologies: ['React', 'Node.js'],
    demoUrl: 'https://demo.example.com',
  },
]
```

### 4. Ajouter vos liens sociaux

Éditez `src/components/Footer.tsx` (ligne ~60) :

```typescript
<a href="https://linkedin.com/in/votre-profil">LinkedIn</a>
<a href="https://github.com/votre-username">GitHub</a>
```

---

## 🎨 Personnaliser les Couleurs

Éditez `tailwind.config.js` (ligne ~13) :

```javascript
colors: {
  accent: '#00d9ff',      // Changez cette couleur
  accentDark: '#0099cc',
}
```

**Suggestions de couleurs :**
- Bleu : `#3b82f6`
- Rose : `#ec4899`
- Vert : `#10b981`
- Orange : `#f97316`

---

## 📦 Build pour la Production

```bash
npm run build
npm start
```

---

## 🌐 Déployer sur Vercel (Gratuit)

1. Poussez votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Cliquez "New Project"
4. Sélectionnez votre repository
5. Cliquez "Deploy"

C'est tout ! Votre site est en ligne ! 🎉

---

## 📚 Documentation Complète

- **Personnalisation avancée** : Consultez `CUSTOMIZATION.md`
- **Déploiement** : Consultez `DEPLOYMENT.md`
- **Structure du projet** : Consultez `README.md`

---

## 🆘 Problèmes Courants

### Le serveur ne démarre pas
```bash
# Vérifiez que le port 3000 est libre
# Sinon, utilisez un autre port
npm run dev -- -p 3001
```

### Les styles ne s'appliquent pas
```bash
# Videz le cache et reconstruisez
rm -rf .next
npm run build
```

### Erreurs TypeScript
```bash
# Vérifiez les types
npm run type-check
```

---

## 💡 Conseils

1. **Testez sur mobile** : Ouvrez `http://[votre-ip]:3000` sur votre téléphone
2. **Utilisez les devtools** : Appuyez sur F12 pour voir les erreurs
3. **Consultez les logs** : Regardez la console lors du démarrage

---

## 🎯 Prochaines Étapes

1. ✅ Personnalisez le contenu
2. ✅ Testez sur mobile
3. ✅ Déployez sur Vercel
4. ✅ Partagez votre portfolio !

---

**Besoin d'aide ? Consultez la documentation complète ou les guides détaillés.**

**Bonne chance ! 🚀**
