# 💻 Commandes Utiles - Portfolio Interactif

## 🚀 Commandes de Développement

### Démarrer le serveur de développement
```bash
npm run dev
```
Lance le serveur sur `http://localhost:3000`

### Arrêter le serveur
```bash
Ctrl + C
```

### Utiliser un port différent
```bash
npm run dev -- -p 3001
```

---

## 🏗️ Commandes de Build

### Build pour la production
```bash
npm run build
```
Crée une version optimisée dans `.next/`

### Lancer le serveur de production
```bash
npm start
```
Lance le serveur de production

### Build et lancer
```bash
npm run build && npm start
```

---

## 🔍 Commandes de Vérification

### Vérifier les types TypeScript
```bash
npm run type-check
```

### Vérifier le code avec ESLint
```bash
npm run lint
```

### Formater le code avec Prettier
```bash
npm run format
```

### Vérifier le formatage sans modifier
```bash
npm run format:check
```

---

## 📦 Commandes npm

### Installer les dépendances
```bash
npm install
```

### Installer une nouvelle dépendance
```bash
npm install nom-du-package
```

### Installer une dépendance de développement
```bash
npm install --save-dev nom-du-package
```

### Mettre à jour les dépendances
```bash
npm update
```

### Vérifier les dépendances obsolètes
```bash
npm outdated
```

### Vérifier les vulnérabilités
```bash
npm audit
```

### Corriger les vulnérabilités
```bash
npm audit fix
```

---

## 🌐 Commandes de Déploiement

### Déployer sur Vercel
```bash
npm install -g vercel
vercel
```

### Déployer sur Netlify
```bash
npm run build
# Puis déployez le dossier .next
```

### Déployer sur un serveur personnel
```bash
npm run build
npm start
```

---

## 🔧 Commandes Git

### Initialiser un repository Git
```bash
git init
```

### Ajouter tous les fichiers
```bash
git add .
```

### Commiter les changements
```bash
git commit -m "Votre message"
```

### Pousser vers GitHub
```bash
git push origin main
```

### Voir l'historique
```bash
git log
```

### Créer une branche
```bash
git checkout -b nom-de-la-branche
```

---

## 🧹 Commandes de Nettoyage

### Supprimer le dossier .next
```bash
rm -rf .next
```

### Supprimer node_modules
```bash
rm -rf node_modules
```

### Réinstaller les dépendances
```bash
rm -rf node_modules package-lock.json
npm install
```

### Vider le cache npm
```bash
npm cache clean --force
```

---

## 📊 Commandes d'Analyse

### Analyser la taille du bundle
```bash
npm run build
# Vérifiez le dossier .next
```

### Voir les dépendances
```bash
npm list
```

### Voir les dépendances de développement
```bash
npm list --save-dev
```

---

## 🐛 Commandes de Débogage

### Lancer avec logs détaillés
```bash
DEBUG=* npm run dev
```

### Vérifier la configuration Next.js
```bash
npm run build -- --debug
```

### Vérifier les erreurs TypeScript
```bash
npm run type-check -- --pretty
```

---

## 📱 Commandes de Test

### Tester sur mobile (local)
```bash
# Trouvez votre IP
ipconfig (Windows)
ifconfig (Mac/Linux)

# Ouvrez sur votre téléphone
http://[votre-ip]:3000
```

### Tester sur différents ports
```bash
npm run dev -- -p 3000
npm run dev -- -p 3001
npm run dev -- -p 3002
```

---

## 🔐 Commandes de Sécurité

### Vérifier les vulnérabilités
```bash
npm audit
```

### Corriger les vulnérabilités
```bash
npm audit fix
```

### Corriger les vulnérabilités forcément
```bash
npm audit fix --force
```

---

## 📚 Commandes d'Information

### Voir la version de Node.js
```bash
node --version
```

### Voir la version de npm
```bash
npm --version
```

### Voir les scripts disponibles
```bash
npm run
```

### Voir la configuration npm
```bash
npm config list
```

---

## 🎯 Workflows Courants

### Workflow de Développement
```bash
# 1. Démarrer le serveur
npm run dev

# 2. Faire des modifications
# (Éditez les fichiers)

# 3. Vérifier le code
npm run lint
npm run type-check

# 4. Formater le code
npm run format

# 5. Commiter les changements
git add .
git commit -m "Description des changements"
git push origin main
```

### Workflow de Déploiement
```bash
# 1. Vérifier le code
npm run type-check
npm run lint

# 2. Build pour la production
npm run build

# 3. Tester la production localement
npm start

# 4. Déployer
# Option 1 : Vercel
vercel

# Option 2 : Netlify
npm run build
# Déployez le dossier .next

# Option 3 : Serveur personnel
npm run build
npm start
```

### Workflow de Mise à Jour
```bash
# 1. Vérifier les dépendances obsolètes
npm outdated

# 2. Mettre à jour les dépendances
npm update

# 3. Vérifier les vulnérabilités
npm audit

# 4. Corriger les vulnérabilités
npm audit fix

# 5. Tester
npm run dev

# 6. Commiter les changements
git add .
git commit -m "Mise à jour des dépendances"
git push origin main
```

---

## 💡 Conseils

1. **Utilisez `npm run`** pour voir tous les scripts disponibles
2. **Vérifiez régulièrement** les vulnérabilités avec `npm audit`
3. **Mettez à jour** les dépendances régulièrement
4. **Testez** avant de déployer
5. **Utilisez Git** pour versionner votre code

---

## 🆘 Dépannage

### Le serveur ne démarre pas
```bash
# Vérifiez que le port est libre
# Ou utilisez un autre port
npm run dev -- -p 3001
```

### Les dépendances ne s'installent pas
```bash
# Videz le cache npm
npm cache clean --force

# Réinstallez
npm install
```

### Erreurs TypeScript
```bash
# Vérifiez les types
npm run type-check

# Vérifiez les erreurs détaillées
npm run type-check -- --pretty
```

### Erreurs de build
```bash
# Nettoyez et reconstruisez
rm -rf .next
npm run build
```

---

## 📖 Ressources

- [Documentation npm](https://docs.npmjs.com/)
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Git](https://git-scm.com/doc)

---

**Dernière mise à jour : 17 novembre 2024**
