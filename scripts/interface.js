document.addEventListener('DOMContentLoaded', ()=>{

    let btReset = document.getElementById("bt-reset");
    btReset.addEventListener("click", resetGame);

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event){
    
    let square = event.target;
    let position = square.id;

    let simboloMensagem = '';

    if (handleMove(position)){

        setTimeout(()=>{
            if(playerTime == 0){
                 simboloMensagem = '☕';
                alert("O jogo acabou! O vencedor foi " + simboloMensagem);
            } else {
                 simboloMensagem = '🍩';
                alert("O jogo acabou! O vencedor foi " + simboloMensagem);

            }
            
        }, 10) 
        } else if(chequeDraw()){
            setTimeout(()=>{
                alert("Empatou!")
            }, 10)
        }
    updateSquare(position);
    
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`


}

function restart(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = " ";
        
        square.innerHTML = `<div class='${symbol}'></div>`
    });
}

