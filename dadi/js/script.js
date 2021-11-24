// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
let numbUser = Math.floor(Math.random() * 6) + 1;
console.log(numbUser);
let numbPc = Math.floor(Math.random() * 6) + 1;
console.log(numbPc);

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (numbUser > numbPc){
    console.log("l'utente ha vinto");
} else if (numbPc > numbUser){
    console.log(" il computer ha vinto");
} else {
    console.log("Pareggio");
}