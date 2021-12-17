import './main.scss'

window.WebFontConfig = {
    google: { families: [ 'Raleway:700', 'Source+Sans+Pro:400' ] }
}

const wf = document.createElement('script')
wf.async = true
wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js'
wf.type = 'text/javascript'
document.body.appendChild(wf)
