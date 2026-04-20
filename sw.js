const CACHE_NAME = 'dado-pwa-v2';
const assets = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './dados.mp3',
  './assets/icon-192.png'
];

// 1. Instalación: Guarda los archivos en el caché del móvil
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Instalando caché de archivos...');
      return cache.addAll(assets);
    })
  );
});

// 2. Activación: Limpia cachés antiguos si cambias el nombre (v1 a v2)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});

// 3. Estrategia de respuesta: Primero busca en caché, si no, va a internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
