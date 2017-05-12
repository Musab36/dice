function playerOne(){
    var die1 = document.getElementById("roll1");
    var die2 = document.getElementById("roll2");
    var status = document.getElementById("ply1");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    status.innerHTML = "You rolled "+diceTotal+".";
    if(d1 == d2){
        ply1.innerHTML += " You striked DOUBLES!! You won a free round!!";
    }
}

function playerTwo(){
    var die1 = document.getElementById("roll3");
    var die2 = document.getElementById("roll4");
    var status = document.getElementById("ply2");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    ply2.innerHTML = "You rolled "+diceTotal+".";
    if(d1 == d2){
        ply2.innerHTML += " You striked DOUBLES!! You won a free round!!";
    }
}