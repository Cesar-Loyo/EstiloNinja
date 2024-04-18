let jugador = ""
let enemigo = ""
let nombre =""
let compugana = " pierde, computador gana 😭"
let vidaJugador = 0
let vidaEnemigo = 0
let empate = 0
let resultadoCombate

function iniciarJuego() {
    let botonAtaqueJugador = document.getElementById('boton-ataque')
    botonAtaqueJugador.addEventListener('click', ataqueJugador)
    let sectionAtaques = document.getElementById("areacombate")
    sectionAtaques.style.display = "none"

}
function alazar (min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function ataqueJugador(){
    let inputPiedra = document.getElementById("piedra")
    let inputPapel = document.getElementById("papel")
    let inputTijera = document.getElementById("tijera")
    let spanJugador = document.getElementById("mascota-jugador")
    let spanResultado = document.getElementById("batalla-resultado")
    spanResultado.innerHTML = "VS"
    
    if(inputPiedra.checked){
        //alert( "Elegiste a: "+"Piedra"); 
        spanJugador.innerHTML = '<img src="./Juego1imgs/piedranin.png" alt=""><p>"Piedra"</p>';
        jugador = "Piedra";
        }else if(inputPapel.checked){
         //alert( "Elegiste a: "+"Papel"); 
         spanJugador.innerHTML = '<img src="./Juego1imgs/papelnin.png" alt=""><p>"Papel"</p>';
         jugador = "Papel"; 
        }else if(inputTijera.checked){
         //alert( "Elegiste a: "+"Tijera"); 
         spanJugador.innerHTML = '<img src="./Juego1imgs/tijeranin.png" alt=""><p>"Tijera"</p>'; 
         jugador = "Tijera";
        }else{    
        alert('No Seleccionaste Ataque')
        }; 
        if(jugador != ""){ataqueEnemigo()}
    }
function ataqueEnemigo() {
    let azarEnemigo = alazar(1,30)
    let spanEnemigo = document.getElementById("mascota-enemigo")
    let sectionAtaques = document.getElementById("areacombate")

    if(azarEnemigo<11){
        enemigo = "Piedra"; spanEnemigo.innerHTML = '<img src="./Juego1imgs/piedranin.png" alt=""><p>"Piedra"</p>';
    }else if(azarEnemigo<21){
        enemigo = "Papel"; spanEnemigo.innerHTML = '<img src="./Juego1imgs/papelnin.png" alt=""><p>"Papel"</p>';
    }else{
        enemigo = "Tijera"; spanEnemigo.innerHTML = '<img src="./Juego1imgs/tijeranin.png" alt=""><p>"Tijera"</p>';
    };
    //alert ("Enemigo elige: " + enemigo);
    sectionAtaques.style.display = ""
    setTimeout (combate,3000)
}   
function combate(){
   // while (triunfo<3&&perdida<3)
    let spanResultado = document.getElementById("batalla-resultado")
            if (jugador==enemigo) {
            //alert ("Empate"); 
            resultadoCombate = "Empate"
        }else if (jugador=="Piedra"&&enemigo=="Papel"){
            //alert ("Perdiste"); 
            resultadoCombate = "Derrota"
        }else if (jugador=="Papel"&&enemigo=="Tijera"){
            //alert ("Perdiste"); 
            resultadoCombate = "Derrota"
        }else if (jugador=="Tijera"&&enemigo=="Piedra"){
            //alert ("Perdiste"); 
            resultadoCombate = "Derrota"
        }else (//alert ("Ganaste"), 
        resultadoCombate = "Victoria");
    spanResultado.innerHTML = resultadoCombate;
    score();
    
}
function score(){
    let spanVidaJugador = document.getElementById("triunfo-jugador")
    let spanVidaEnemigo = document.getElementById("triunfo-enemigo")
    if (resultadoCombate == "Victoria"){vidaJugador ++ ; spanVidaJugador.innerHTML = vidaJugador
    }else if(resultadoCombate == "Derrota"){vidaEnemigo ++ ; spanVidaEnemigo.innerHTML = vidaEnemigo
    }else {};
}

window.addEventListener('load', iniciarJuego)  
    


