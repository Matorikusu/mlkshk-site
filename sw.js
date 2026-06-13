const CACHE_NAME = 'mlkshk-pirate-radio-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        'pirateradio-standalone.html',
        'images/Pirate Radio/pirateradio.png',
        'images/LOGO_SMALL.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
