const CACHE_NAME = 'offline';
const OFFLINE_URL = '/offline';

self.addEventListener('install', (event) => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
    })());
});

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        if ('navigationPreload' in self.registration) {
            await self.registration.navigationPreload.enable();
        }
    })());

    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith((async () => {
            try {
                const preloadResponse = await event.preloadResponse;
                return (preloadResponse) ? preloadResponse : await fetch(event.request);
            } catch (error) {
                const cache = await caches.open(CACHE_NAME);
                return await cache.match(OFFLINE_URL);
            }
        })());
    }
});