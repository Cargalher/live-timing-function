//live coding 2--> Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
/*
var timer = 10;
var intervallo = setInterval (function(){

    if(timer === 0){
        alert('Buon Ano!');
        clearInterval(intervallo);

    }else{
        timer--;
    }
    document.getElementById('secondi').innerHTML = timer;


},1000);
*/

// live coding 3-->
// Cliccando su un pulsante, viene avviato un cronometro. 
// Per fermare il cronometro, bisogna cliccare su un secondo pulsante.

var inizioEl = document.getElementById('start');
var fineEl = document.getElementById('stop');
var secondiEl = document.getElementById('secondi');
var intervallo;
inizioEl.addEventListener("click", function () {
    // logica per avviare il cronometro
    var tempo = 0;
    intervallo = setInterval(function(){
        tempo++
        console.log(tempo);
        secondiEl.innerHTML = tempo;
    },1000)
    
});
fineEl.addEventListener("click", function () {
    // logica per stoppare il cronometro
    clearInterval(intervallo);
});



