const C="mood-v2";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","manifest.json","icon-192.png","icon-512.png"])))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  const u=e.request.url;if(e.request.method!=="GET"||u.includes("firebaseio.com"))return;
  e.respondWith(fetch(e.request).then(r=>{if(r.ok&&(u.startsWith(self.location.origin)||u.includes("fonts.g"))){const c=r.clone();caches.open(C).then(x=>x.put(e.request,c))}return r}).catch(()=>caches.match(e.request).then(x=>x||caches.match("index.html"))))});
