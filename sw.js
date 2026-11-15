const C="mood-v1",F=["./","index.html","manifest.json","icon-192.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(C).then(c=>c.addAll(F))));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET"||e.request.url.includes("firebaseio"))return;e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});
