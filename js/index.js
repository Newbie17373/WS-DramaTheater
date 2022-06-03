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

//popup starts

//popup__ends