import './main.scss'

const _paq = window._paq = window._paq || []
_paq.push(['trackPageView'])
_paq.push(['enableLinkTracking'])

window.WebFontConfig = {
    google: { families: [ 'Raleway:700', 'Source+Sans+Pro:400' ] }
}

const url = '//matomo.nicholemattera.com/'
_paq.push(['setTrackerUrl', url + 'matomo.php'])
_paq.push(['setSiteId', '1'])

const m = document.createElement('script')
m.async = true
m.src = url + 'matomo.js'
m.type = 'text/javascript'
document.body.appendChild(m)

const wf = document.createElement('script')
wf.async = true
wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
wf.type = 'text/javascript'
document.body.appendChild(wf)
