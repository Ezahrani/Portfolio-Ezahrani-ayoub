# Guide de Déploiement - Portfolio Interactif

Ce guide vous aidera à déployer votre portfolio sur différentes plateformes.

## 🚀 Déploiement sur Vercel (Recommandé)

Vercel est la plateforme officielle pour Next.js et offre un déploiement gratuit et facile.

### Étapes :

1. **Créer un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Inscrivez-vous avec votre compte GitHub

2. **Connecter votre repository**
   - Cliquez sur "New Project"
   - Sélectionnez votre repository GitHub
   - Vercel détectera automatiquement que c'est un projet Next.js

3. **Configurer les variables d'environnement**
   - Allez dans "Settings" → "Environment Variables"
   - Ajoutez vos variables depuis `.env.local`

4. **Déployer**
   - Cliquez sur "Deploy"
   - Votre site sera en ligne en quelques secondes !

### URL de déploiement
Votre site sera accessible à : `https://[nom-du-projet].vercel.app`

---

## 🌐 Déploiement sur Netlify

### Étapes :

1. **Créer un compte Netlify**
   - Allez sur [netlify.com](https://netlify.com)
   - Inscrivez-vous avec GitHub

2. **Connecter votre repository**
   - Cliquez sur "Add new site" → "Import an existing project"
   - Sélectionnez GitHub et votre repository

3. **Configurer le build**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Ajouter les variables d'environnement**
   - Allez dans "Site settings" → "Build & deploy" → "Environment"
   - Ajoutez vos variables

5. **Déployer**
   - Cliquez sur "Deploy site"

---

## 🏠 Déploiement sur votre propre serveur

### Prérequis
- Node.js 16+
- npm ou yarn
- Un serveur (VPS, Heroku, etc.)

### Étapes :

1. **Cloner le repository**
```bash
git clone <votre-repository>
cd portfolio-interactif
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Build pour la production**
```bash
npm run build
```

4. **Lancer le serveur**
```bash
npm start
```

Le site sera accessible à `http://localhost:3000`

### Utiliser PM2 pour maintenir le serveur actif

```bash
# Installer PM2 globalement
npm install -g pm2

# Démarrer l'application
pm2 start npm --name "portfolio" -- start

# Sauvegarder la configuration
pm2 save

# Démarrer au boot du serveur
pm2 startup
```

---

## 🔒 Configuration SSL/HTTPS

### Avec Vercel
- Vercel configure automatiquement SSL pour vous

### Avec Netlify
- Netlify configure automatiquement SSL pour vous

### Avec votre propre serveur
- Utilisez Let's Encrypt avec Certbot
- Configurez un reverse proxy (Nginx)

---

## 📊 Optimisations Recommandées

### 1. Ajouter un sitemap
```bash
npm install next-sitemap
```

### 2. Ajouter des métadonnées
- Modifiez `src/app/layout.tsx` pour ajouter les métadonnées

### 3. Ajouter Google Analytics
```bash
npm install @react-google-analytics/core
```

### 4. Optimiser les images
- Utilisez Next.js Image component
- Compressez les images avant upload

---

## 🐛 Dépannage

### Le site ne charge pas
- Vérifiez que le serveur est en cours d'exécution
- Vérifiez les logs pour les erreurs
- Assurez-vous que le port 3000 est disponible

### Les styles ne s'appliquent pas
- Videz le cache du navigateur
- Reconstruisez le projet : `npm run build`

### Les images ne s'affichent pas
- Vérifiez les chemins des images
- Assurez-vous que les fichiers existent

---

## 📞 Support

Pour plus d'aide :
- Consultez la [documentation Next.js](https://nextjs.org/docs)
- Consultez la [documentation Vercel](https://vercel.com/docs)
- Consultez la [documentation Netlify](https://docs.netlify.com)

---

**Bon déploiement ! 🎉**
