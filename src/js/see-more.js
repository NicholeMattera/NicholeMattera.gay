const SEE_MORE_COLLAPSED_HEIGHT = 88

const seeMoreCollapse = (seeMore) => {
    const button = seeMore.querySelector(':scope > button')
    button.parentElement.classList.add('collapsed')
}
const seeMoreExpand = (seeMore, userInteraction) => {
    const button = seeMore.querySelector(':scope > button')
    button.parentElement.classList.remove('collapsed')

    if (userInteraction) {
        button.parentElement.dataset.expanded = true
    }
}

const seeMoreHeightCheck = () => {
    const seeMores = document.querySelectorAll('.see-more:not([data-expanded="true"])')
    seeMores.forEach(seeMore => {
        const contentHeight = seeMore.querySelector('.see-more-content').scrollHeight

        if (contentHeight < SEE_MORE_COLLAPSED_HEIGHT) {
            seeMoreExpand(seeMore, false)
        } else {
            seeMoreCollapse(seeMore)
        }
    })
}

seeMoreHeightCheck()
document.querySelectorAll('.see-more').forEach((seeMore) => {
    const button = seeMore.querySelector(':scope > button')
    button.addEventListener('click', () => seeMoreExpand(seeMore, true), { passive: true })
})
window.addEventListener('resize', seeMoreHeightCheck, { passive: true })
