// Bump this string on every deploy. The fetch handler below is cache-first,
// so it never re-checks the network for the app shell on its own — a new
// CACHE name is what makes the browser notice a new sw.js, install it,
// and pull fresh files. Forgetting this step means installed devices
// silently stay on the old cached version, even after you push new HTML.
const CACHE='bfl-v4';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./favicon-32.png'];
self.addEventListener('install',function(e){
  e.waitUntil((async function(){
    const c=await caches.open(CACHE);
    await Promise.allSettled(SHELL.map(function(u){return c.add(u);}));
    self.skipWaiting();
  })());
});
self.addEventListener('activate',function(e){
  e.waitUntil((async function(){
    const keys=await caches.keys();
    await Promise.all(keys.filter(function(k){return k!==CACHE;}).map(function(k){return caches.delete(k);}));
    self.clients.claim();
  })());
});
self.addEventListener('fetch',function(e){
  const req=e.request;
  if(req.method!=='GET')return;
  e.respondWith(
    caches.match(req).then(function(hit){
      return hit || fetch(req).then(function(res){
        try{
          const url=new URL(req.url);
          if(url.origin===location.origin){const copy=res.clone();caches.open(CACHE).then(function(c){c.put(req,copy);});}
        }catch(_){}
        return res;
      }).catch(function(){return caches.match('./index.html');});
    })
  );
});
