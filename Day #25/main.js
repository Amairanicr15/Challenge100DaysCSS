const card = document.querySelector('.card')
const mark = document.querySelector('.mark-map')
const frame = document.querySelector('.frame')

card.addEventListener('click', () => {
    frame.classList.toggle('active')
    frame.classList.toggle('inactive')
})
mark.addEventListener('click', () => {
    frame.classList.toggle('active')
    frame.classList.toggle('inactive')
})