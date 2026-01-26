let numeroSecret;
let intentsMaxims;
let intentsFet = 0;
let numeroIntents;

function guardarIntents() {
    let numeroIntents = document.getElementById("nintents").value;
    if (numeroIntents > 0) {
        intentsMaxims = numeroIntents;
        numeroSecret = Math.floor(Math.random() * 100) + 1;
        document.getElementById("IntentsRestants").innerHTML = "Intents restants: " + intentsMaxims;
        intentsFet = 0;
    }
    else {
        alert("Introdueix un numero de 1 a 20");
    }

}
function jugar() {
    let INnum = document.getElementById("numeroIntroduit").value;
    if (INnum > 0 && INnum <= 100) {
        intentsFet++;
        let IntentsRestants = intentsMaxims - intentsFet;
        document.getElementById("IntentsRestants").innerHTML = "Intents restants: " + IntentsRestants;
        if (INnum == numeroSecret) {
            document.getElementById("missatge").innerHTML = "Correcte, Has endevinat el número";
            document.body.style.backgroundColor = "green";
        }
        else {
            if (IntentsRestants == 0) {
                document.getElementById("missatge").innerHTML = "Has perdut! El número era el " + numeroSecret;
                document.body.style.backgroundColor = "red";
            }
        }
        //console.log(numeroSecret);
    }
    else {
        if (INnum < 0) {

            document.getElementById("missatge").innerHTML = "El número secret és més PETIT";
        }
        else {
            document.getElementById("missatge").innerHTML = "El número secret és més GRAN";


        }
    }
}
