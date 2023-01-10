const cacheName = "snakegame";

self.addEventListener('install', function(event){
  event.waitUntil(
    caches.open(cacheName).then(function(cache){
      cache.addAll([
        './',
        './pattern.png',
        './index.html',
        './manifest.webmanifest',
        './index.js'
      ]);
    })
  )
  return self.skipWaiting();
})

self.addEventListener('activate', ()=> {
  self.clients.claim()
});

self.addEventListener('fetch', async e => {
  const req = e.request;
  const url = new URL(req.url)

  if(url.login === location.origin){
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req){
  const cache = await caches.open(cacheName);
  const cached =  await cache.match(req);

  return cached || fetch(req);
}

async function networkAndCache(req){
  const cache = await caches.open(cacheName);
  try {
    const refresh = await fetch(req);
    await cache.put(req, refresh.clone())
    return refresh;
  } catch (error) {
    const cached = await cache.match(req);
    return cached;
  }

}