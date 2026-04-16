self.addEventListener('install', (e) => {
  console.log('Service Worker installé');
  // Force le nouveau Service Worker à s'activer immédiatement
  self.skipWaiting(); 
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker activé');
  // Permet au Service Worker de prendre le contrôle de la page immédiatement
  e.waitUntil(clients.claim()); 
});

self.addEventListener('fetch', (e) => {
  const url = e.request.url;

  // 1. EXCLUSION CRUCIALE : On ignore les appels API vers Google
  // Le "return" fait que le Service Worker lâche l'affaire et laisse le navigateur gérer la requête tout seul.
  if (url.includes('script.google.com') || url.includes('script.googleusercontent.com')) {
    return; 
  }

  // 2. Comportement par défaut pour le reste du site (nécessaire pour la PWA)
  e.respondWith(fetch(e.request));
});
