/* Kütüphanem Pro Max - Service Worker */
const CACHE = 'kutuphanem-pro-max-v2026-3-1';

const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './assets/styles.css',
  './assets/idb.js',
  './assets/app.js',
  './assets/scanner.js',
  './libs/zxing-umd.min.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    try { await c.addAll(APP_SHELL); } catch (err) { /* ignore */ }
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k !== CACHE ? caches.delete(k) : null)));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const fresh = await fetch(req);
      const c = await caches.open(CACHE);
      if (req.method === 'GET') c.put(req, fresh.clone());
      return fresh;
    } catch (e) {
      return cached || new Response('', { status: 503, statusText: 'Offline' });
    }
  })());
});
