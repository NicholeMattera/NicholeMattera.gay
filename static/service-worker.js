const CACHE_NAME = 'offline'

const BACKGROUND_URL = '/static/images/background.jpg'
const BACKGROUND_OVERLAY_URL = '/static/images/backgroundOverlay.png'
const CSS_URL = '/static/main.css'
const HOME_URL = '/'
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
            cache.addAll([
                BACKGROUND_OVERLAY_URL,
                CSS_URL,
                HOME_URL,
                JS_URL,
                MANIFEST_URL,
                PRIDE_BACKGROUND_URL,
                PRIDE_BI_URL,
                PRIDE_CSS_URL,
                PRIDE_JS_URL,
                PRIDE_LESBIAN_URL,
                PRIDE_PAN_URL,
                PRIDE_PRIDE_URL,
                PRIDE_TRANS_URL,
                RESUME_URL,
            ])
        } else {
            cache.addAll([
                BACKGROUND_URL,
                BACKGROUND_OVERLAY_URL,
                CSS_URL,
                HOME_URL,
                JS_URL,
                MANIFEST_URL,
                RESUME_URL,
            ])
        }
    })())
})

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim())
})

self.addEventListener('fetch', async (event) => {
    const response = await caches.match(event.request)
    event.respondWith(response || fetch(event.request))
})
