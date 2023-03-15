const animations = [ 'asexual', 'biromantic', 'demigirl', 'nonbinary', 'panromantic', 'pride', 'queer', 'transgender' ]
let animation = ''
const title = document.querySelector('.title')

const animate = () => {
    if (animation != '') {
        return
    }

    animation = animations[Math.floor(Math.random() * animations.length)]

    title.classList.add('animating')
    title.style.backgroundImage = `url(/images/${animation}.svg)`
}

const titleAnimationEnd = () => {
    title.classList.remove('animating')
    title.style.backgroundImage = ''
    animation = ''
}

window.addEventListener('load', animate, { passive: true })
window.addEventListener('focus', animate, { passive: true })
title.addEventListener('mouseover', animate, { passive: true })
title.addEventListener('touchstart', animate, { passive: true })
title.addEventListener('animationend', titleAnimationEnd, { passive: true })
