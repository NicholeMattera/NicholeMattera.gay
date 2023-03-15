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

window.addEventListener('load', animate)
window.addEventListener('focus', animate)
title.addEventListener('mouseover', animate)
title.addEventListener('touchstart', animate)
title.addEventListener('animationend', titleAnimationEnd)
