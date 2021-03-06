const container = document.querySelector('.container');
const div = document.createElement('div');
const emailList = ["thomas@boolean.it", "chiara@boolean.it", "elisabetta@boolean.it", "fabio.giannitrapani@gmail.com"];

// Chiedi all’utente la sua email, 
const button = document.getElementById('check');
button.addEventListener("click", function () {
    const email = document.getElementById('email').value;
    document.getElementById('email').value = '';
    let find = false;

    for (let i = 0; i < emailList.length; i++) {
        const element = emailList[i];
        if (element.toLowerCase() == email.toLowerCase()){
            find = true;
        }
    }
        // controlla che sia nella lista di chi può accedere,
        // stampa un messaggio appropriato sull’esito del controllo.
        if (find == true) {
            container.append(div);
            div.innerHTML = "la tua email è nella lista, puoi proseguire";
        } else {
            container.append(div);
            div.innerHTML = "la tua email non è nella lista, riprova";
        }
})