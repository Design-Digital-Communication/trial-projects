var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomDiceimage1 = "dice" + randomNumber1 + ".png";
var randomImageSource1 = "images/" + randomDiceimage1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute('src',randomImageSource1 );


var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
var randomDiceimage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceimage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute('src',randomImageSource2 );


if (randomImageSource1 > randomImageSource2) {
    document.querySelector("h1").innerHTML = "Player 1👑 Wins!!";
} else if (randomImageSource2 > randomImageSource1) {
    document.querySelector("h1").innerHTML = "Player 2👑 Wins!!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
} 