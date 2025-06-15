self.addEventListener("install", function(event) {
  console.log("Service Worker installed");
  self.skipWaiting();
});

self.addEventListener("fetch", function(event) {
  event.respondWith(fetch(event.request));
});
