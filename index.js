// For Player 1
var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

// For Player 2
var randomNumber2= Math.floor(Math.random()*6) + 1;

var randomDiceImage2 ="dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);


// For Player 3

// var randomNumber3=Math.floor(Math.random()*6) + 1;
// var randomDiceImage3 = "dice" + randomNumber3 + ".png";
// var randomImageSource3 = "images/" + randomDiceImage3;
// var image3=document.querySelectorAll("img")[2];
// image3.setAttribute("src", randomImageSource3)

// //For Player 4
// var randomNumber4=Math.floor(Math.random()*6) + 1;
// var randomDiceImage4 = "dice" + randomNumber4 + ".png";
// var randomImageSource4 = "images/" + randomDiceImage4;
// var image4=document.querySelectorAll("img")[3];
// image4.setAttribute("src", randomImageSource4)


// // For Player 5
// var randomNumber5=Math.floor(Math.random()*6) + 1;
// var randomDiceImage5 = "dice" + randomNumber5 + ".png";
// var randomImageSource5 = "images/" + randomDiceImage5;
// var image5=document.querySelectorAll("img")[4];
// image5.setAttribute("src", randomImageSource5)


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML="Draw! A'int no loser or winner";
}
