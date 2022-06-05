//module starts

let slider = document.querySelector('.slider')
slider.innerHTML = `<div class="slider__inside">
<div class="slider__tape">
    <div class="slider__tape-item"><img src="./img/about/crop_фойе_театра_60-70-е__1_.jpg" alt="" class="slider__img">
    </div>
    <div class="slider__tape-item"><img src="./img/about/crop_img888.jpg" alt="" class="slider__img">
    </div>
    <div class="slider__tape-item"><img src="./img/about/crop_4_Театр_70-е.jpg" alt="" class="slider__img">
    </div>
    <div class="slider__tape-item"><img src="./img/about/first.jpg" alt="" class="slider__img">
    </div>
</div>
</div>
<div class="slider__buttons">
<button class="slider__button slider__button_prev"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 40 8 24 24 8 26.1 10.1 13.7 22.5H40V25.5H13.7L26.1 37.9Z"/></svg></button>
<span class="slider__button-desc"></span>
<button class="slider__button slider__button_next"><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 40 21.9 37.85 34.25 25.5H8V22.5H34.25L21.9 10.15L24 8L40 24Z"/></svg></button>
</div>`

//module ends

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