const CACHE_NAME = 'omarcodeplay-v1.3';
const urlsToCache = [
  '/',
  '/index.html',
  '/articles.html',
  '/Games.html',
  '/feature.html',
  '/How%20to%20start.html',
  '/pro1.html',
  '/pro2.html',
  '/pro3.html',
  '/pro4.html',
  '/pro5.html',
  '/images/MY LOGO.png',
  '/images/resource.webp',
  '/images/recorder.webp',
  '/images/logo.webp',
  '/images/CP/Logo.jpg',
  '/images/Untitled design_20251021_155417_0000.png',
  '/images/ores.png',
  '/images/item.png',
  '/images/item_down.png',
  '/images/wool.png',
  '/images/ingame.png',
  '/images/Rcube.png',
  '/images/Chess.png',
  '/images/crossroad.png',
  '/images/X_O.png',
  '/images/memory.png',
  '/images/connect.png',
  '/images/IQ.png',
  '/images/recorderH.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
