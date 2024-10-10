/*

Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

//Visualizzare in pagina 5 numeri casuali.
const casualNumbers = document.querySelector('.number');
const numbers = [];
let spaceTime = document.querySelector('.space-time');
const btn = document.querySelector('.btn-timer');
const spaceForm = document.querySelector('.space-form');


/**
 * 
 *@param {number} max 
 *@param {number} min 
 *
 *  */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


/**
 * 
 *@param {number} max 
 *@param {number} min 
 *
 *  */
function getRandomNumber(min, max) {
    for (let i = 0; i < 5; i++) {
        numbers.push(getRndInteger(min, max))
    }
    return numbers
}

/** 
 * 
 * @param {Array} arr 
 * 
 */
function genereteNumbersMarkup(arr) {
    `<span>${arr[0]}</span>
     <span>${arr[1]}</span>
     <span>${arr[2]}</span>
     <span>${arr[3]}</span>
     <span>${arr[4]}</span>`
}

let generatedNumber = genereteNumbersMarkup(numbers);

casualNumbers.insertAdjacentHTML('beforeend', generatedNumber);
casualNumbers.innerHTML = getRandomNumber(1, 100);

//Da lì parte un timer di 30 secondi.
btn.addEventListener('click', () => {
    let seconds = '00:00';
    let clockCounter = 0;
    let getTimer = setInterval(() => {
        seconds = '00:' + clockCounter.toString().padStart(2, '0');
        console.log(seconds)
        spaceTime.textContent = seconds;
        ++clockCounter;
        if (clockCounter > 2 + 1) {
            hideNumber();
            showForm();
            spaceTime.textContent = 'Tempo esgotado';
            clearInterval(getTimer);
        }
    }, 1000)
});

function hideNumber() {
    return casualNumbers.classList.toggle('d-none');
}

function showForm(){
    return spaceForm.classList.toggle('d-block')
}



