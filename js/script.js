// creo funzione che genera numeri random

function generateRandomBomb (arrayBombs){
    let checkBomb = false;
    let randomBomb ;

    while(!checkBomb){
        randomBomb = Math.floor(Math.random() * 100 + 1);

        if(!arrayBombs.includes(randomBomb)){
            checkBomb = true
        }

    }

    return randomBomb;
}


// creo funzione per la generazione delle bombe

function createBombs(bombsNumber){
    let bombs = [];

    for(let i=0; i<bombsNumber; i++){
        bombs.push(generateRandomBomb(bombs));
    }
    return bombs;
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
    let numberOfBombs = 16;
    grid.innerHTML = "";
    let bombs = createBombs(numberOfBombs);
    console.log(bombs);
    let punti = 0;
        

        for( let i=1; i<=100; i++){
            let square = createCell(i);
            
            square.addEventListener("click", function(){

                if(!bombs.includes(i)){
                    this.classList.add("press");
                    punti++;

                    document.getElementById("punteggio").innerText = `il tuo punteggio è: ${punti} punti`;
                }
                else{
                    this.classList.add("danger");
                }
            })

            grid.appendChild(square);
        }    
}

// creo funzione per far si che la giglia compaia dopo aver cliccato il bottone

let button = document.getElementById("button");
button.addEventListener("click", function(){
        createGame();
})
