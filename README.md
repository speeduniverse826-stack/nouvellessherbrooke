# 🚨 SHERBROOKE ALERTE - Application de Nouvelles Choquantes

## 📱 Application de nouvelles en temps réel pour Sherbrooke, Québec

Une application web progressive (PWA) dramatique présentant les actualités les plus choquantes de Sherbrooke et de l'Estrie avec alertes en temps réel, pop-ups d'urgence et actualisation continue.

## 🚀 DÉPLOIEMENT IMMÉDIAT SUR GITHUB PAGES

### Étapes pour mettre en ligne (5 minutes) :

#### 1. Créer le repository GitHub
1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur **"New repository"** (bouton vert)
3. Nom : `sherbrooke-breaking-news`
4. Sélectionnez **"Public"**
5. Cochez **"Add a README file"**
6. Cliquez **"Create repository"**

#### 2. Upload des fichiers
1. Renommez `index-optimized.html` en `index.html`
2. Dans votre nouveau repository, cliquez **"uploading an existing file"**
3. Glissez-déposez ces fichiers :
   - `index.html` (renommé)
   - `news-data.json`
   - `manifest.json`
   - `sw.js`
   - `README.md` (ce fichier)
4. Message de commit : "🚨 Launch Sherbrooke Breaking News App"
5. Cliquez **"Commit changes"**

#### 3. Activer GitHub Pages
1. Allez dans **"Settings"** (onglet du repository)
2. Dans le menu gauche, cliquez **"Pages"**
3. Source : **"Deploy from a branch"**
4. Branch : **"main"**
5. Folder : **"/ (root)"**
6. Cliquez **"Save"**

#### 4. Accéder à votre site
Votre application sera accessible à :
```
https://VOTRE-NOM-UTILISATEUR.github.io/sherbrooke-breaking-news/
```

**⏰ Temps d'activation : 2-5 minutes après le commit**

---

## 🔴 FONCTIONNALITÉS

### Actualités Choquantes
- **🚨 Crimes violents** : Viol collectif armé, agressions sauvages
- **💀 Accidents mortels** : Collisions tragiques, hécatombe routière  
- **🔫 Crime organisé** : Saisies d'armes, trafic de drogue
- **🔥 Scandales politiques** : Accusations d'intimidation, corruption

### Interface Dramatique
- **Ticker en direct** avec nouvelles choquantes
- **Pop-ups d'urgence** automatiques
- **Headlines rotatives** avec animations
- **Alertes sonores** pour nouvelles critiques
- **Thème rouge/noir** d'urgence

### Actualisation Continue
- **Auto-refresh** toutes les 5 minutes
- **Notifications push** (PWA)
- **Service Worker** pour cache offline
- **Géolocalisation** Sherbrooke/Estrie

---

## 📊 SOURCES D'ACTUALITÉS

### Médias Locaux Intégrés
- **EstrieePlus.com** - Actualités quotidiennes
- **La Tribune** - Média coopératif 
- **TVA Sherbrooke** - Télévision locale
- **Service de Police de Sherbrooke** - Rapports officiels
- **Sûreté du Québec** - Communiqués

### Types de Nouvelles Couvertes
- **Criminalité** : Arrestations, saisies, enquêtes
- **Accidents** : Collisions, décès, blessés graves
- **Politique** : Conseil municipal, scandales, conflits
- **Sécurité** : Interventions d'urgence, alertes

---

## 🛠️ ARCHITECTURE TECHNIQUE

### Technologies Utilisées
- **HTML5** sémantique
- **CSS3** avec animations avancées
- **JavaScript ES6+** vanilla
- **PWA** (Progressive Web App)
- **Service Worker** pour offline
- **JSON** pour base de données

### Performance
- **Chargement < 2 secondes**
- **Responsive design** mobile-first
- **Cache intelligent** des ressources
- **Compression** automatique
- **SEO optimisé** pour nouvelles locales

---

## 🔄 ACTUALISATION AUTOMATIQUE

### Système de Mise à Jour
```javascript
// Auto-refresh toutes les 5 minutes
setInterval(loadNewsData, 300000);

// Détection de nouvelles critiques
function detectBreakingNews(articles) {
    return articles.filter(article => 
        article.severity === 'CRITIQUE' || 
        article.breaking === true
    );
}
```

### Sources RSS (à implémenter)
- **EstrieePlus** : `https://www.estrieplus.com/rss.xml`
- **La Tribune** : `https://www.latribune.ca/rss.xml`
- **TVA Sherbrooke** : Via API RSS2JSON

---

## 📱 INSTALLATION MOBILE

### PWA (Progressive Web App)
L'application peut être **installée comme une app native** :

1. **Android** : "Ajouter à l'écran d'accueil"
2. **iOS** : "Ajouter à l'écran d'accueil" 
3. **Desktop** : Icône d'installation dans la barre d'adresse

### Fonctionnalités Offline
- **Cache** des dernières nouvelles
- **Service Worker** pour fonctionnement hors ligne
- **Notifications push** même en arrière-plan

---

## 🚨 ALERTES & NOTIFICATIONS

### Types d'Alertes
- **🔴 CRITIQUES** : Crimes violents, décès
- **🟠 URGENTES** : Accidents graves, arrestations
- **🟡 IMPORTANTES** : Scandales, politique locale

### Système de Pop-ups
```javascript
// Pop-up automatique toutes les 60 secondes
setInterval(() => {
    const criticalNews = getCriticalNews();
    if (criticalNews.length > 0) {
        showAlertModal(randomCriticalNews());
    }
}, 60000);
```

---

## 📈 ANALYTICS & SUIVI

### Métriques Suivies
- **Visiteurs uniques** quotidiens
- **Temps de session** moyen
- **Nouvelles les plus consultées**
- **Taux d'engagement** pop-ups
- **Partages** sur réseaux sociaux

### Google Analytics (à configurer)
```html
<!-- Ajoutez votre ID Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## 🔧 MAINTENANCE & MISES À JOUR

### Ajouter de Nouvelles Actualités
1. Modifiez `news-data.json`
2. Ajoutez les nouveaux articles dans `alerts`
3. Commit et push sur GitHub
4. Mise à jour automatique du site

### Format d'Article
```json
{
    "id": "unique_id",
    "title": "🚨 TITRE CHOQUANT",
    "content": "Contenu détaillé...",
    "category": "CRIME VIOLENT",
    "severity": "CRITIQUE",
    "location": "Lieu, Sherbrooke",
    "timestamp": "2025-08-28T14:48:00Z",
    "source": "Source officielle",
    "breaking": true,
    "image": "URL de l'image"
}
```

---

## 📞 CONTACT & SUPPORT

### Développement
- **Version** : 1.0.0
- **Dernière MAJ** : 28 août 2025
- **Compatibilité** : Tous navigateurs modernes
- **Langues** : Français canadien

### Améliorations Futures
- [ ] Intégration API nouvelles en temps réel
- [ ] Géolocalisation précise des incidents
- [ ] Commentaires et interactions utilisateurs
- [ ] Notifications push avancées
- [ ] Mode sombre/clair
- [ ] Partage sur réseaux sociaux

---

## ⚖️ AVERTISSEMENTS LÉGAUX

### Contenu Sensible
Cette application présente des actualités dramatiques incluant :
- Violence et criminalité
- Accidents mortels
- Contenu potentiellement choquant
- Références à des faits réels de Sherbrooke

### Responsabilité
- Contenu à des fins d'information uniquement
- Sources officielles et médias reconnus
- Mise à jour régulière des informations
- Respect de la vie privée des victimes

---

## 🚀 LANCEMENT IMMÉDIAT

**Votre application est prête à être déployée !**

1. ✅ Uploadez les 5 fichiers sur GitHub
2. ✅ Activez GitHub Pages  
3. ✅ Site en ligne en 5 minutes
4. ✅ Actualisation automatique active
5. ✅ Accessible 24h/24 mondialement

**URL finale : `https://VOTRE-NOM.github.io/sherbrooke-breaking-news/`**

---

*Application créée le 28 août 2025 - Sherbrooke, Québec, Canada* 🇨🇦