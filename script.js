var position = [0,0];
var snake1 = 15;
var snake2=23;
var ladder1=8;
var ladder=19;
var total=0;
var diceValue=0;
var total2=0;
var diceValue2=0;
document.getElementById("positionP1").innerHTML=0;
document.getElementById("positionP2").innerHTML=0;

function Player_one(){

   diceValue = Math.floor(Math.random() * 6) + 1;
  document.getElementById("valueP1").innerHTML=diceValue;
  total=total+diceValue;
  document.getElementById("positionP1").innerHTML=total;

  if(total==8){
    document.getElementById("message1").innerHTML="Plus 7";
    total=total+7;
  }
  else if(total==19){
    document.getElementById("message1").innerHTML="Plus 7";
    total=total+5;
  }
  else if(total==23){
    document.getElementById("message1").innerHTML="Cut 7";
    total=total-7;
  }
  else if(total==15){
    document.getElementById("message1").innerHTML="Cut 10";
    total=total-10;
  }else if(total==25){
    document.getElementById("message1").innerHTML="Winer";
    document.getElementById("valueP1").innerHTML="Winer";
    document.getElementById("positionP1").innerHTML="Winer";

    document.getElementById("message2").innerHTML="loser";
    document.getElementById("valueP2").innerHTML="loser";
    document.getElementById("positionP2").innerHTML="loser";
  }
  else if(total>25){
    document.getElementById("message1").innerHTML="Winer";
    document.getElementById("valueP1").innerHTML="Winer";
    document.getElementById("positionP1").innerHTML="Winer";
    document.getElementById("message2").innerHTML="loser";
    document.getElementById("valueP2").innerHTML="loser";
    document.getElementById("positionP2").innerHTML="loser";

  }

}


function player_two(){

   diceValue2 = Math.floor(Math.random() * 6) + 1;
  document.getElementById("valueP2").innerHTML=diceValue2;
  total2=total2+diceValue2;
  document.getElementById("positionP2").innerHTML=total2;

  if(total2==8){
    document.getElementById("message2").innerHTML="Plus 7";
    total2=total2+7;
  }
  else if(total2==19){
    document.getElementById("message2").innerHTML="Plus 7";
    total2=total2+5;
  }
  else if(total2==23){
    document.getElementById("message2").innerHTML="Cut 7";
    total2=total2-7;
  }
  else if(total2==15){
    document.getElementById("message2").innerHTML="Cut 10";
    total2=total2-10;
  }else if(total2==25){
    document.getElementById("message2").innerHTML="Winer";
    document.getElementById("valueP2").innerHTML="Winer";
    document.getElementById("positionP2").innerHTML="Winer";

    document.getElementById("message1").innerHTML="lose";
    document.getElementById("valueP1").innerHTML="lose";
    document.getElementById("positionP1").innerHTML="lose";
  }
  else if(total2>25){
    document.getElementById("message2").innerHTML="Winer";
    document.getElementById("valueP2").innerHTML="Winer";
    document.getElementById("positionP2").innerHTML="Winer";

    document.getElementById("message1").innerHTML="lose";
    document.getElementById("valueP1").innerHTML="lose";
    document.getElementById("positionP1").innerHTML="lose";

  }

}
