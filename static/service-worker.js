const CACHE_NAME = 'offline'

const BACKGROUND_URL = '/static/images/background.jpg'
const BACKGROUND_OVERLAY_URL = '/static/images/backgroundOverlay.png'
const CSS_URL = '/static/main.css'
const HOME_URL = '/?offline=1'
const JS_URL = '/static/main.js'
const MANIFEST_URL = '/static/manifest.json'
const PRIDE_BACKGROUND_URL = '/static/images/prideBackground.jpg'
const PRIDE_BI_URL = '/static/images/bi.svg'
const PRIDE_CSS_URL = '/static/pride.css'
const PRIDE_JS_URL = '/static/pride.js'
const PRIDE_LESBIAN_URL = '/static/images/lesbian.svg'
const PRIDE_PAN_URL = '/static/images/pan.svg'
const PRIDE_PRIDE_URL = '/static/images/pride.svg'
const PRIDE_TRANS_URL = '/static/images/trans.svg'
const RESUME_URL = '/static/Resume.pdf'

self.addEventListener('install', (event) => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME)

        if (location.hostname.endsWith('lgbt') || location.hostname.endsWith('gay')) {
            await Promise.all([
                cache.add(new Request(BACKGROUND_OVERLAY_URL, {cache: 'reload'})),
                cache.add(new Request(CSS_URL, {cache: 'reload'})),
                cache.add(new Request(HOME_URL, {cache: 'reload'})),
                cache.add(new Request(JS_URL, {cache: 'reload'})),
                cache.add(new Request(MANIFEST_URL, {cache: 'reload'})),
                cache.add(new Request(PRIDE_BACKGROUND_URL, {cache: 'reload'})),
                cache.add(new Request(PRIDE_BI_URL, {cache: 'reload'})),
                cache.add(new Request(PRIDE_CSS_URL, {cache: 'reload'})),
                cache.add(new Request(PRIDE_JS_URL, {cache: 'reload'})),
                cache.add(new Request(PRIDE_LESBIAN_URL, {cache: 'reload'})),
                cache.add(new Request(PRIDE_PAN_URL, {cache: 'reload'})),
                cache.add(new Request(PRIDE_PRIDE_URL, {cache: 'reload'})),
                cache.add(new Request(PRIDE_TRANS_URL, {cache: 'reload'})),
                cache.add(new Request(RESUME_URL, {cache: 'reload'})),
            ])
        } else {
            await Promise.all([
                cache.add(new Request(BACKGROUND_URL, {cache: 'reload'})),
                cache.add(new Request(BACKGROUND_OVERLAY_URL, {cache: 'reload'})),
                cache.add(new Request(CSS_URL, {cache: 'reload'})),
                cache.add(new Request(HOME_URL, {cache: 'reload'})),
                cache.add(new Request(JS_URL, {cache: 'reload'})),
                cache.add(new Request(MANIFEST_URL, {cache: 'reload'})),
                cache.add(new Request(RESUME_URL, {cache: 'reload'})),
            ])
        }
    })())
})

self.addEventListener('activate', (event) => {
    event.waitUntil((async () => {
        if ('navigationPreload' in self.registration) {
            await self.registration.navigationPreload.enable()
        }
    })())

    self.clients.claim()
})

self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith((async () => {
            try {
                const preloadResponse = await event.preloadResponse
                return (preloadResponse) ? preloadResponse : await fetch(event.request)
            } catch (error) {
                if (request.mode !== 'GET') {
                    return undefined;
                }

                const requestedURL = new URL(event.request.url)
                const cache = await caches.open(CACHE_NAME)

                if (requestedURL.pathname === '/') {
                    return await cache.match(HOME_URL)
                }

                return await cache.match(requestedURL.pathname)
            }
        })())
    }
})