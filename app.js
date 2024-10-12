const spaceCasualNumbers = document.querySelector('.display-random-number');
const spaceForm = document.querySelector('.space-form');
const formEl = document.querySelector('form');
const randNumbers = [];


//Visualizzare in pagina 5 numeri casuali.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function gerateRandNumbers(min, max) {
    for (let i = 0; i < 5; i++) {
        randNumbers.push(getRndInteger(min, max));
    }
    console.log(randNumbers);
    return randNumbers
}

spaceCasualNumbers.insertAdjacentHTML('beforeend', gerateRandNumbers);
spaceCasualNumbers.innerHTML = gerateRandNumbers(1, 100);


//Da lì parte un timer di 30 secondi.
setTimeout(() => {
    document.querySelector('.display-random-number').innerHTML = '';
    spaceForm.classList.remove('d-none');
        
}, 4000);


//Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputs = document.querySelectorAll('.firstNumber, .secondNumber, .thirdNumber, .fourthNumber, .LastNumber');
    const userNumbers = [];

    for (let i = 0; i < inputs.length; i++) {
        userNumbers.push(Number(inputs[i].value));
    }

    const correctNumbers = [];
    for (let i = 0; i < randNumbers.length; i++) {
        randN = randNumbers[i]
        if (userNumbers[i] === randN ) {
            correctNumbers.push(userNumbers[i]);
        } 
    }

    spaceForm.classList.add('d-none');
    return spaceCasualNumbers.innerHTML = `score:${correctNumbers.length} | You found: ${correctNumbers}`;
    
    
});