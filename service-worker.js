

importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.2/workbox-sw.js');

workbox.routing.registerRoute(
    ({request}) => request.destination === 'image',
    new workbox.strategies.NetworkFirst()
);

const cacheName = 'Sz-Games';
// List the files to precache
const precacheResources = ['/',
 '/index.html',
 '/games/game.html',
 '/games/tunnel-rush/',
 '/games/tunnel-rush/index.html',

 '/games/tunnel-rush/style/fullscreen.png',
 '/games/tunnel-rush/style/progressEmpty.Dark.png',
 '/games/tunnel-rush/style/progressEmpty.Light.png',
 '/games/tunnel-rush/style/progressFull.Dark.png',
 '/games/tunnel-rush/style/progressFull.Light.png',
 '/games/tunnel-rush/style/progressLogo.Dark.png',
 '/games/tunnel-rush/style/progressLogo.Light.png',
 '/games/tunnel-rush/style/style.css',
 '/games/tunnel-rush/style/webgl-logo.png',
 '/games/tunnel-rush/UnityLoader.js',
 '/games/tunnel-rush/UnityProgeass.js',
 '/games/tunnel-rush/build.json',
 '/games/tunnel-rush/nohack_tunnel_rush_v9wasmframework.unityweb',
 '/games/tunnel-rush/tunnel_rush_v9code.unityweb',
 '/games/tunnel-rush/tunnel_rush_v9data.unityweb',
 '/games/tunnel-rush/tunnel_rush_v9framework.unityweb',
 '/games/tunnel-rush/tunnel_rush_v9memory.unityweb',
 '/games/tunnel-rush/tunnel_rush_v9wasmcode.unityweb',
 '/games/tunnel-rush/tunnel_rush_v9wasmframework.unityweb',
];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));

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