import './pride.scss'

const animations = [ 'bi', 'lesbian', 'pan', 'pride', 'trans' ]
const animation = ''
const title = document.querySelector('h1')
const subtitle = document.querySelector('h2')

const animate = () => {
    if (animation != '') {
        return
    }

    animation = animations[Math.floor(Math.random() * animations.length)]

    title.classList.add('animating')
    title.classList.add(animation)
}

const titleAnimationEnd = () => {
    title.classList.remove('animating')
    title.classList.remove(animation)
    subtitle.classList.add('animating')
    subtitle.classList.add(animation)
}

const subtitleAnimationEnd = () => {
    subtitle.classList.remove('animating')
    subtitle.classList.remove(animation)
    animation = ''
}

window.addEventListener('load', animate)
title.addEventListener('mouseover', animate)
title.addEventListener('touchstart', animate)
title.addEventListener('animationend', titleAnimationEnd)
subtitle.addEventListener('mouseover', animate)
subtitle.addEventListener('touchstart', animate)
subtitle.addEventListener('animationend', subtitleAnimationEnd)
