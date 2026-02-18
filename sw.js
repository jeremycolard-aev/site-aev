self.addEventListener('install', (e) => {
  console.log('Service Worker installé');
});

self.addEventListener('fetch', (e) => {
  // Nécessaire pour que le navigateur considère le site comme PWA
  e.respondWith(fetch(e.request));
});
