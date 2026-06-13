const CACHE_NAME = 'mlkshk-pirate-radio-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/pirateradio-standalone.html',
  '/images/Pirate Radio/pirateradio.png',
  '/images/LOGO_SMALL.png'
];

// Install Event - Caching App Shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Caching app shell assets');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Removing old cache store:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Network first fallback strategy with live stream bypass
self.addEventListener('fetch', (event) => {
  // CRITICAL: Do not attempt to cache your infinite live mp3 stream link
  if (event.request.url.includes('stream.mp3')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // If successful network response found, duplicate it into storage cache
        if (networkResponse && networkResponse.status === 200) {
          const cacheCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, cacheCopy);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to local offline cache store if network is completely dropped
        return caches.match(event.request);
      })
  );
});
