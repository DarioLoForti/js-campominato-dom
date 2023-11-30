// creo funzione che genera numeri random

function generateRandomBomb (arrayBombs, cellTot){
    let checkBomb = false;
    let randomBomb ;

    while(!checkBomb){
        randomBomb = Math.floor(Math.random() * cellTot + 1);

        if(!arrayBombs.includes(randomBomb)){
            checkBomb = true
        }
    }
    return randomBomb;
}


// creo funzione per la generazione delle bombe

function createBombs(bombsNumber, cellTot){
    let bombs = [];

    for(let i=0; i<bombsNumber; i++){
        bombs.push(generateRandomBomb(bombs, cellTot));
    }
    return bombs;
}


// aggiungo funzione che crea casella della griglia

function createCell(num, cellsRow){
    let element = document.createElement("div");
    element.classList.add("square");
    element.innerText = num;

    element.style.width = `calc(100% / ${cellsRow})`;
    element.style.height = element.style.width;

    return element;
}

// creo funzione per far iniziare la partita

function createGame(){

    let grid = document.getElementById("grid");
    grid.innerHTML = "";

    let difficolta = document.getElementById("difficoltà");
    let livello = parseInt(difficolta.value);

    let numberOfBombs = 16;
    let punti = 0;
    
    let numberCells;
    let cellsRow;

    let finish = false;

    switch(livello){
        case 1 :
            numberCells = 100;
            break;
        case 2 :
            numberCells = 81;
            break;   
        case 3 :
            numberCells = 49;
            break;
        default:
            alert("seleziona un livello di difficolta per iniziare la partita");
            break;
    }

    cellsRow = Math.sqrt(numberCells);

    let bombs = createBombs(numberOfBombs, numberCells);
    console.log(bombs);
        
        for( let i=1; i<=numberCells; i++){
            let square = createCell(i, cellsRow);
            
            square.addEventListener("click", function(){
                if(!finish){
                    if(!bombs.includes(i)){
                        this.classList.add("press");
                        punti++;
    
                        document.getElementById("punteggio").innerText = `il tuo punteggio è: ${punti} punti`;
                    }
                    else{
                        this.classList.add("danger");
                        finish = true;
                    }
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
