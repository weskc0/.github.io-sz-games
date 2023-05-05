

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.NetworkFirst()
);

const cacheName = 'Sz-Games';
// List the files to precache
const precacheResources = ['/', '/index.html', '/games/game.html'];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));

  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return fetch('/henry-airship/')
        .then(response => response.text())
        .then(html => {
          const doc = new DOMParser().parseFromString(html, 'text/html');
          const files = Array.from(doc.querySelectorAll('a'))
            .map(link => link.getAttribute('href'))
            .filter(href => /\.js$|\.css$|\.png$|\.jpg$|\.gif$/.test(href));

          return Promise.all(files.map(file => {
            return fetch('/henry-airship/' + file)
              .then(response => cache.put(response.url, response))
          }));
        });
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});



self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
    );
  });