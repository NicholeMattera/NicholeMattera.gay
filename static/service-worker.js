const cacheName = 'NicholeMattera-v1'

const files = [
    '/',
    '/static/images/background.jpg',
    '/static/images/backgroundOverlay.png',
    '/static/main.css',
    '/static/main.js',
    '/static/manifest.json',
    '/static/Resume.pdf',
]

const prideFiles = [
    '/',
    '/static/images/backgroundOverlay.png',
    '/static/images/bi.svg',
    '/static/images/lesbian.svg',
    '/static/images/pan.svg',
    '/static/images/pride.svg',
    '/static/images/prideBackground.jpg',
    '/static/images/trans.svg',
    '/static/main.css',
    '/static/main.js',
    '/static/manifest.json',
    '/static/pride.js',
    '/static/pride.css',
    '/static/Resume.pdf',
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(
                (self.location.hostname.endsWith('lgbt') || self.location.hostname.endsWith('gay')) ? prideFiles : files
            )
        })
    )
})

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== cacheName) {
                        return caches.delete(key)
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.response).then((response) => {
                return caches.open(cacheName).then((cache) => {
                    cache.put(event.request, response.clone())
                    return response
                })
            })
        })
    )
})
