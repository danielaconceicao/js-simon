/* Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

const casualNumbers = document.querySelector('.number');
const numbers = [];


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomNumber(min, max) {
    for (let i = 0; i < 5; i++) {
        numbers.push(getRndInteger(min, max))
    }
    return numbers
}

function genereteNumbersMarkup(arr) {
    `<span>${arr[0]}</span>
     <span>${arr[1]}</span>
     <span>${arr[2]}</span>
     <span>${arr[3]}</span>
     <span>${arr[4]}</span>`
}

let generatedNumber = genereteNumbersMarkup(numbers);
console.log(generatedNumber);

casualNumbers.insertAdjacentHTML('beforeend', generatedNumber);

casualNumbers.innerHTML = getRandomNumber(1, 50);