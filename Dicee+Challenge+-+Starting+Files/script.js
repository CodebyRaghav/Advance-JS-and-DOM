//Dice 1
var randomNumber1 = Math.floor(Math.random()*6) + 1; //1-6

var randomDiceImg = "dice" + randomNumber1 + ".png"; //dice1-dice6.png

var randomImageSrc1 = "images/" + randomDiceImg; //images/dice1-dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSrc1);


//Dice 2
var randomNumber2 = Math.floor(Math.random()*6) + 1; //1-6

var randomDiceImg2 = "images/dice" + randomNumber2 + ".png"; //dice1-dice6.png

var image2 = document.querySelectorAll("img")[1].setAttribute("src" , randomDiceImg2);


//Player 1 wins
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "❤ Player 1 wins"
}
//Player 2 wins
else if(randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerText = "It's a tie 💞";
}
//Tie
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerText = "Player 2 wins 🧡";
}
