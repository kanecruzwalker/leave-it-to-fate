// Random Number 1 & 2
var randomNumber1 = Math.floor((Math.random()*6) + 1);
var randomNumber2 = Math.floor(Math.random()*6 + 1);

// Dice Image lable
var dice1 = "dice" + randomNumber1 + ".png"
var dice2 = "dice" + randomNumber2+ ".png"

// retrieve dice image html tag
var diceImage1 = document.querySelector("img.img1");
var diceImage2 = document.querySelector("img.img2");

// modify dice image tags with new dice image lable 
diceImage1.setAttribute("src" , "./images/" + dice1);
diceImage2.setAttribute("src" , "./images/" + dice2);

// retrieve header thtml tag
var header = document.querySelector("h1");

// adjust header dependent on winner / largest number
if (randomNumber1 > randomNumber2) {
    header.innerHTML = "🚩Player 1 wins";
} else if (randomNumber1 < randomNumber2) {
    header.innerHTML = "Player 2 wins🚩";
}else {
    header.innerHTML = "Tied";
}





