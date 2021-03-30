function randomNumber1() {
    var temp = Math.floor(Math.random()*6);
    var num=temp+1;
    return num;
}

function randomNumber2() {
    var temp = Math.floor(Math.random()*6);
    var num=temp+1;
    return num;
}

var randomNum1= randomNumber1();
var randomNum2= randomNumber2();

var randomImgSrc1 = "images/dice" + randomNum1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);


var randomImgSrc2 = "images/dice" + randomNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if (randomNum1 > randomNum2){
  document.querySelector("h1").innerHTML = "Player1 wins!👑";
}
else if (randomNum1 <randomNum2) {
  document.querySelector("h1").innerHTML = "Player2 wins!👑";
}
else if (randomNum1 ==randomNum2) {
  document.querySelector("h1").innerHTML = "It's a tie!";
}
