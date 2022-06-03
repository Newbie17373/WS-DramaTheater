//cashbox starts
let ticketBtn = document.querySelector('.ticket__button')
let place = document.querySelector('#place')
let row = document.querySelector('#row')
ticketBtn.addEventListener('click', () => {
alert(`Поздравляем, вы купили билет на спектакль, ваш ряд: ${row.value}, ваше место ${place.value}, билеты отправлены на почту`)
})
//cashbox end