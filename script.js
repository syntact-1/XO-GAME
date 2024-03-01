let title = document.querySelector(".title");
let turn = 'x';
let squares = [];
let reset = document.getElementById("reset")

reset.onclick = function(){
    for(let i  = 1 ; 1 < 10 ; i++ ){
        squares[i] = document.getElementById("item"+i).innerHTML = '';
        turn = 'x';
        title.innerHTML = 'X'
        document.getElementById("item"+i).style.background = 'rgb(213, 213, 213)'
    }
}


function winner(){
    for(let i = 1 ; i < 10 ; i++){
        squares[i] = document.getElementById("item"+i).innerHTML;
        }
        if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] !== ''){
            title.innerHTML = squares[1]+" is winner";
            document.getElementById("item1").style.background = 'yellow'
            document.getElementById("item2").style.background = 'yellow'
            document.getElementById("item3").style.background = 'yellow'
        }
        else if(squares[4] == squares[5] &&squares[5] == squares[6] && squares[4] !== ''){
            title.innerHTML = squares[4]+" is winner";
            document.getElementById("item4").style.background = 'yellow'
            document.getElementById("item5").style.background = 'yellow'
            document.getElementById("item6").style.background = 'yellow'
        }
        else if(squares[7] == squares[8] &&squares[8] == squares[9] && squares[7] !== ''){
            title.innerHTML = squares[7]+" is winner";
            document.getElementById("item7").style.background = 'yellow'
            document.getElementById("item8").style.background = 'yellow'
            document.getElementById("item9").style.background = 'yellow'
        }
        else if(squares[2] == squares[5] &&squares[5] == squares[8] && squares[2] !== ''){
            title.innerHTML = squares[2]+" is winner";
            document.getElementById("item2").style.background = 'yellow'
            document.getElementById("item5").style.background = 'yellow'
            document.getElementById("item8").style.background = 'yellow'
        }
        else if(squares[1] == squares[4] &&squares[4] == squares[7] && squares[1] !== ''){
            title.innerHTML = squares[1]+" is winner";
            document.getElementById("item1").style.background = 'yellow'
            document.getElementById("item4").style.background = 'yellow'
            document.getElementById("item7").style.background = 'yellow'
        }
        else if(squares[3] == squares[6] &&squares[6] == squares[9] && squares[9] !== ''){
            title.innerHTML = squares[3]+" is winner";
            document.getElementById("item3").style.background = 'yellow'
            document.getElementById("item6").style.background = 'yellow'
            document.getElementById("item9").style.background = 'yellow'
        }
        else if(squares[1] == squares[5] &&squares[5] == squares[9] && squares[1] !== ''){
            title.innerHTML = squares[1]+" is winner";
            document.getElementById("item1").style.background = 'yellow'
            document.getElementById("item5").style.background = 'yellow'
            document.getElementById("item9").style.background = 'yellow'
        }
        else if(squares[3] == squares[5] &&squares[5] == squares[7] && squares[3] !== ''){
            title.innerHTML = squares[3]+" is winner ";
            document.getElementById("item3").style.background = 'yellow'
            document.getElementById("item5").style.background = 'yellow'
            document.getElementById("item7").style.background = 'yellow'
        }
}
function game(id){
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == ''){
        element.innerHTML ='x';
        turn = 'o';
        title.innerHTML ='O'
    }
    else if(turn === 'o' && element.innerHTML ==''){
        element.innerHTML='o';
        turn = 'x';
        title.innerHTML = 'X'
    }
    winner();

}
