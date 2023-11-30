// aggiungo funzione che crea casella della griglia

function createCell(num){
    let element = document.createElement("div");
    element.classList.add("square");
    element.innerText = num;
    return element;
}


// creo funzione per far si che la giglia compaia dopo aver cliccato il bobttone
let button = document.getElementById("button");


function play(btn){
    button.addEventListener("click", function(){

        let grid = document.getElementById("grid");
        grid.innerHTML = ""
        for( let i=1; i<=100; i++){
            let square = createCell(i);
            
            grid.appendChild(square);
            
            square.addEventListener("click", function(){
                this.classList.toggle("press");
                console.log(`Cella cliccata: ${i}`)
            })
        }
        
    })


}

play(button);

 