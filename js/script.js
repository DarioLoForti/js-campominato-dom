// creo funzione che genera numeri random

function generaterandombomb (bombs){
    let checkBomb = false;
    let randomBomb ;

    while(!checkBomb){
        randomBomb = Math.floor(Math.random() * 100 + 1);

        if(!bombs.includes(randomBomb)){
            checkBomb = true
        }

    }

    return randomBomb;
}


// creo funzione per la generazione delle bombe

function createBombs(bombsNumber){
    let bombs = [];
}


// aggiungo funzione che crea casella della griglia

function createCell(num){
    let element = document.createElement("div");
    element.classList.add("square");
    element.innerText = num;
    return element;
}

// creo funzione per far iniziare la partita

function createGame(){

    let grid = document.getElementById("grid");
        grid.innerHTML = "";

        for( let i=1; i<=100; i++){
            let square = createCell(i);
            
            grid.appendChild(square);
            
            square.addEventListener("click", function(){
                this.classList.toggle("press");
                console.log(`Cella cliccata: ${i}`);
            })
        }
        
}

// creo funzione per far si che la giglia compaia dopo aver cliccato il bottone

let button = document.getElementById("button");
button.addEventListener("click", function(){
        createGame();
})
