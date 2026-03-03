// MLKSHK Pirate Radio Service Worker
self.addEventListener('install', (event) => {
  console.log('MLKSHK Pirate Radio Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('MLKSHK Pirate Radio Service Worker activated');
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  if (url.href.includes('radio.mlkshkdigital.com/stream.mp3')) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response('Offline – stream requires internet', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      })
    );
    return;
  }

  event.respondWith(
    fetch(event.request).then((networkResponse) => {
      if (networkResponse && networkResponse.status === 200) {
        const responseToCache = networkResponse.clone();
        caches.open('mlkshk-pirate-radio-v1').then((cache) => {
          cache.put(event.request, responseToCache);
        });
      }
      return networkResponse;
    }).catch(() => {
      return caches.match(event.request);
    })
  );
});
