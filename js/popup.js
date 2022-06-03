//popup starts
let perfomanceBtn = document.querySelector('.perfomance__button ')
let formClose = document.querySelector('.form__close')
let formArea = document.querySelector('.form__area')
let popup = document.querySelector('.ticket') 

formClose.addEventListener('click', () => {
body.classList.toggle('lock')
popup.classList.toggle('active')
})


perfomanceBtn.addEventListener('click', () => {
    body.classList.toggle('lock')
    popup.classList.toggle('active')
    })

    
formArea.addEventListener('click', () => {
        body.classList.toggle('lock')
        popup.classList.toggle('active')
        })
        

//popup end