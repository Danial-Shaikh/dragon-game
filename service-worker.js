/* Dragon Pet Game - Service Worker
 * Handles offline caching and notification scheduling
 */

const CACHE_VERSION = 'dragon-game-v1.0.0';
const CACHE_NAME = `dragon-${CACHE_VERSION}`;

const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './sprites/nf_idle.webp',
  './sprites/nf_alt_idle.webp',
  './sprites/nf_happy.webp',
  './sprites/nf_eating.webp',
  './sprites/nf_sleep.webp',
  './sprites/nf_fire.webp',
  './sprites/nf_backflip.webp',
  './sprites/nf_flying.webp',
  './sprites/nf_angry.webp',
  './sprites/nf_bath.webp',
  './sprites/nf_wave.webp',
  './sprites/nf_sad.webp',
  './sprites/lf_idle.webp',
  './sprites/lf_sleep.webp',
  './sprites/lf_bath.webp',
  './sprites/lf_flying.webp',
  './sprites/lf_fire.webp',
  './sprites/lf_angry.webp',
  './sprites/lf_sad.webp',
  './sprites/lf_eating.webp',
  './sprites/lf_wave.webp',
  './sprites/lf_backflip.webp',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/logo.png',
  './icons/apple-touch-icon.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS).catch(()=>{}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if(event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      if(cached) return cached;
      return fetch(event.request).then(response => {
        // Cache successful GET responses (sprites, etc.)
        if(response && response.status === 200 && response.type === 'basic'){
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => caches.match('./index.html'));
    })
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      for(const client of clientList){
        if('focus' in client) return client.focus();
      }
      if(clients.openWindow) return clients.openWindow('./');
    })
  );
});

// Listen for push events (would require backend setup)
self.addEventListener('push', event => {
  const data = event.data ? event.data.json() : {
    title: 'Your dragon misses you!',
    body: 'come back and check on them',
  };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: './icons/icon-192.png',
      badge: './icons/icon-192.png',
      tag: 'dragon-reminder',
    })
  );
});
