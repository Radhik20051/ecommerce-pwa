self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('shop-cache').then(cache => {
      return cache.addAll([
        './index.html',
        './css/styles.css',
        './js/script.js',
        './images/appleicon.png',
        './images/bird.png',
        './images/smartphone.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
