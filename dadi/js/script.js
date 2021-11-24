const rollDice = document.querySelector('.play');
const numbers = document.querySelector('.numbers');
const result = document.querySelector('.result');

// avvio il lancio dei dadi cliccaando sul bottone
rollDice.addEventListener("click", function(){
    // Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    let numbUser = Math.floor(Math.random() * 6) + 1;
    // console.log(numbUser);
    let numbPc = Math.floor(Math.random() * 6) + 1;
    // console.log(numbPc);

    numbers.innerHTML = 'il tuo numero è ' + numbUser + ' - ' + 'il numero del pc è ' + numbPc;

    // Stabilire il vincitore, in base a chi fa il punteggio più alto.
    if (numbUser > numbPc){
        // console.log("Hai vinto, che fortuna!");
        result.innerHTML = "Hai vinto, che fortuna!";
    } else if (numbPc > numbUser){
        // console.log(" Hai perso, peccato!");
        result.innerHTML = "Hai perso, peccato!";
    } else {
        // console.log("Pareggio");
        result.innerHTML = "Pareggio";
    }
})