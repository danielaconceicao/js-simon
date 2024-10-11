//Visualizzare in pagina 5 numeri casuali.
const spaceCasualNumbers = document.querySelector('.number');
const numbers = [];
let spaceTime = document.querySelector('.space-time');
const btn = document.querySelector('.btn-timer');
const spaceForm = document.querySelector('.space-form');
const formEl = document.querySelector('.form');


/**
 *@param {number} max 
 *@param {number} min 
 *  */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


/**
 *@param {number} max 
 *@param {number} min 
 *  */
function getRandomNumber(min, max) {
    for (let i = 0; i < 5; i++) {
        numbers.push(getRndInteger(min, max))
    }
    return numbers
}

/** 
 * @param {Array} arr 
 */
function genereteNumbersMarkup(arr) {
    `<span>${arr[0]}</span>
     <span>${arr[1]}</span>
     <span>${arr[2]}</span>
     <span>${arr[3]}</span>
     <span>${arr[4]}</span>`
}

let generatedNumber = genereteNumbersMarkup(numbers);

spaceCasualNumbers.insertAdjacentHTML('beforeend', generatedNumber);
spaceCasualNumbers.innerHTML = getRandomNumber(1, 100);

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
            clearInterval(getTimer);
            hideNumber();
            spaceTime.textContent = "il tempo è scaduto, inserisci i numeri nell'input";
            showHideForm();
            btn.classList.toggle('d-none');
        }
    }, 1000)
});

//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll('.firstNumber, .secondNumber, .thirdNumber, .fourthNumber, .LastNumber');
    const userNumbers = [];

    for (let i = 0; i < inputs.length; i++) {
        userNumbers.push(Number(inputs[i].value));
    }

    const correctNumbers = [];
    const wrongNumbers = [];

    for (let i = 0; i < numbers.length; i++) {

        if (userNumbers[i] === numbers[i]) {
            correctNumbers.push(userNumbers[i]);
            
        }else{
            wrongNumbers.push(userNumbers[i]);
        } 
    }
    showHideForm();
    hideNumber();

    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati
    let number = correctNumbers.length <= 0 ? 'numero' : 'numeri';

    if (correctNumbers) {
        spaceTime.textContent = `Ti sei ricordato, ${correctNumbers.length} ${number} ${correctNumbers}`
    }
    //console.log(`numeros corretos`, correctNumbers);
    //console.log(`numeros incorretos`, wrongNumbers);
});




function hideNumber() {
    if (spaceCasualNumbers){
        document.querySelector('.number').innerHTML = '';
    }
}

function showHideForm() {
    if (spaceForm.classList.contains('d-none')) {
        spaceForm.classList.replace('d-none', 'd-block');
    }else {
        spaceForm.classList.replace('d-block', 'd-none');
    }
}





