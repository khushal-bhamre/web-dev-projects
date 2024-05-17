var player1='p1';
var player2='p2';


function editNames(){
    player1=prompt("Enter name of player1");
    player2=prompt("Enter name of player2");

    document.querySelector('p.Player1').innerHTML=player1;
    document.querySelector('p.Player2').innerHTML=player2;
}

var score1=0;
var score2=0;

function rollTheDice(){
    setTimeout(rollDice,1000);
}

function rollDice(){
    var random1 = Math.floor(Math.random() * 6)+ 1;
    var random2 = Math.floor(Math.random() * 6)+ 1;

    document.querySelector('.img1').setAttribute('src', "dice"+ random1 +".png");
    document.querySelector('.img2').setAttribute('src', "dice"+ random2 +".png");

    if(random1>random2){
        document.querySelector('.playerwin').innerHTML=(player1+" wins");
        score1++;
        document.querySelector("h1.score1").innerHTML=score1;
        if(score1==3){
            document.querySelector(".invisible").classList.remove("invisible");
            document.querySelector("#result").innerHTML=("The winner is "+player1)
            document.querySelector('p.Player1').classList.add("green")
            document.querySelector('p.Player2').classList.add("red");
        }
    }
    else if(random2>random1){
        document.querySelector('.playerwin').innerHTML=(player2+" wins");
        score2++;
        document.querySelector("h1.score2").innerHTML=score2;
        if(score2==3){
            document.querySelector(".invisible").classList.remove("invisible");
            document.querySelector("#result").innerHTML=("The winner is "+player2)
            document.querySelector('p.Player2').classList.add("green")
            document.querySelector('p.Player1').classList.add("red");
        }
    }
}


function resetGame(){
    score1=0
    score2=0
    document.querySelector('h1.score1').innerHTML=score1;
    document.querySelector('h1.score2').innerHTML=score2;
    document.querySelector('p.Player1').innerHTML='player1';
    document.querySelector('p.Player2').innerHTML='player2';
}







// let player1 = document.querySelector(".img1");
// let player2 = document.querySelector(".img2");

// const max = 6;
// let x = function rollTheDice() {
//   return Math.ceil(Math.random() * max);
// }

// switch (x) {
//   case 1:
//     player1.setAttribute("src", "dice1.png");
//     break;
//   case 2:
//     player1.setAttribute("src", "dice2.png");
//     break;
//   case 3:
//     player1.setAttribute("src", "dice3.png");
//     break;
//   case 4:
//     player1.setAttribute("src", "dice4.png");
//     break;
//   case 5:
//     player1.setAttribute("src", "dice5.png");
//     break;
//   case 6:
//     player1.setAttribute("src", "dice6.png");
//     break;
// }
