//slider

let position = 0
let container = document.querySelector('.slider__inside')
let btnPrev = document.querySelector('.slider__button_prev')
let btnNext = document.querySelector('.slider__button_next')
let slidesToShow = 1
let slidesToScroll = 1
let tape = document.querySelector('.slider__tape')
let items = document.querySelectorAll('.slider__tape-item')
let desc = document.querySelector('.slider__button-desc')
let itemsCount = items.length
let itemWidth = container.clientWidth / slidesToShow
let movePosition = slidesToScroll * itemWidth
let countsOfClick = itemsCount / slidesToScroll
let currentNumOFClick = 0;

items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`
})

btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth
    position -= itemsLeft >= slidesToScroll ? movePosition : itemWidth * itemsLeft
    setPosition()
    checkBtn()
    setCountOfClick()
})

btnPrev.addEventListener('click', () => {
const itemsLeft = Math.abs(position) / itemWidth
position += itemsLeft >= slidesToScroll ? movePosition : itemWidth * itemsLeft
setPosition()
checkBtn()
setCountOfClick()
})

let setPosition = () => {
tape.style.transform = `translateX(${position}px)`
}

let setCountOfClick = () => {
const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth
currentNumOFClick = itemsCount - itemsLeft
desc.innerHTML = `${currentNumOFClick}/${countsOfClick}`
} 

function checkBtn() {
btnPrev.disabled = position === 0
btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth
}
checkBtn()
setCountOfClick()

function timeFunc() {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth
    position -= itemsLeft >= slidesToScroll ? movePosition : itemWidth * itemsLeft
    if(itemsLeft < slidesToScroll) position = 0
    setPosition()
    checkBtn()
    setCountOfClick()
}

setInterval(timeFunc, 5500)

// end of slider

//burger starts

let burger = document.querySelector('.header__burger')
let navBar = document.querySelector('.header__nav')
let body = document.querySelector('body')
burger.addEventListener('click', () => {
burger.classList.toggle('active')
body.classList.toggle('lock')
navBar.classList.toggle('active')
})

//burger ends