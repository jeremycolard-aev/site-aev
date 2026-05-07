# Aix en Vue — Site web

Site de l'association **Aix en Vue** (www.aixenvue.fr), dédiée à l'inclusion et aux activités pour les personnes déficientes visuelles à Aix-en-Provence.

## Stack

- HTML5 / CSS3 / JavaScript vanilla (ES6+) — aucun framework, aucun outil de build
- Hébergement : GitHub Pages (CNAME → www.aixenvue.fr)
- CDN médias : Cloudinary
- Backend léger : Google Apps Script (newsletter, actualités)
- Apps embarquées : AppSheet (planning bénévoles)
- PWA : `manifest.json` + `sw.js`

## Structure des fichiers

```
index.html          # Page d'accueil
annonce.html        # Actualités (données via Google Apps Script)
missions.html       # Nos missions
signalement.html    # Formulaire de signalement multi-étapes
activite.json       # Agenda (mis à jour automatiquement chaque jour)
shared.css          # CSS commun : variables, reset, nav, footer
shared.js           # JS commun : hamburger menu, ombre nav au scroll
sw.js               # Service Worker PWA
manifest.json       # Manifeste PWA
CNAME               # Domaine GitHub Pages
```

## Fichiers partagés

Toute modification de la **navigation**, du **footer**, des **variables CSS** ou du **menu hamburger** se fait uniquement dans :
- `shared.css` — styles communs à toutes les pages
- `shared.js` — comportements communs à toutes les pages

Ces fichiers sont chargés par les 4 pages HTML via `<link>` et `<script src>`.

## Palette de couleurs (variables CSS)

| Variable         | Valeur    | Usage                   |
|------------------|-----------|-------------------------|
| `--noir`         | `#111111` | Texte principal         |
| `--papier`       | `#F4F2EB` | Fond de page            |
| `--papier-fonce` | `#E8E4D9` | Fond alternatif         |
| `--rouge`        | `#D80000` | Couleur signature       |
| `--ocre`         | `#C8860A` | Accent chaud            |
| `--ocre-clair`   | `#F0C060` | Accent sur fond sombre  |
| `--bleu`         | `#1A3A5C` | Accent froid            |
| `--vert`         | `#5C7A5C` | Accent nature           |
| `--gris`         | `#222222` | Texte secondaire        |
| `--creme`        | `#FBF8F0` | Fond clair              |

## Intégrations externes

- **Google Tag Manager** : GTM-M638S445
- **Google Analytics 4** : G-T1DFJJD9ZV
- **Google Apps Script** : actualités et newsletter
- **Cloudinary** : images et vidéo hero
- **AppSheet** : planning activités (iframe/lien externe)
- **HelloAsso** : dons et formulaires adhésion

## Déploiement

Push sur `main` → déploiement automatique via GitHub Pages. Aucun build nécessaire.

Le fichier `activite.json` est mis à jour automatiquement chaque jour par une GitHub Action alimentée par Google Sheets.
