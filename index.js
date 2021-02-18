//for player 1:

var randomNumber1 = Math.floor(Math.random() * 6)+ 1;  //1-6

var randomDiceImg = "dice" + randomNumber1 + ".png";  //dice1-dice6.png

var randomImageSrc = "images/" + randomDiceImg; //images/dice1-dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSrc);

if( randomNumber1 === 6) {
  document.querySelector("p").innerHTML = "🎉RCB🎉";
}
else if(randomNumber1 === 5) {
  document.querySelector("p").innerHTML = "🎉CSK🎉";
}
else if(randomNumber1 === 4) {
  document.querySelector("p").innerHTML = "🎉MI🎉";
}
else if(randomNumber1 === 3) {
  document.querySelector("p").innerHTML = "🎉SRH🎉";
}
else if(randomNumber1 === 2) {
  document.querySelector("p").innerHTML = "🎉KKR🎉";
}
else if(randomNumber1 === 1) {
  document.querySelector("p").innerHTML = "🎉KX1P🎉";
}


// //for player 2:
//
// var randomNumber2 = Math.floor(Math.random() * 6)+ 1;
//
// var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";
//
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);
//
// //result:

// if(randomImageSrc > randomImageSrc2) {
//   document.querySelector("h1").innerHTML = "🎉PLAYER 1 WINS!";
// }
// else if(randomImageSrc < randomImageSrc2){
//   document.querySelector("h1").innerHTML = "PLAYER 2 WINS!🎉";
// }
// else {
//   document.querySelector("h1").innerHTML = "OHHHHH! DRAW";
// }
