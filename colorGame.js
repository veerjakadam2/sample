var numOfSquares=6;
var colors = [];
var colors= generateRandomColors(numOfSquares);
var h1 = document.querySelector("h1");
var squares= document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetB = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");




easyBtn.addEventListener("click", function () {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numOfSquares=3;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
});
hardBtn.addEventListener("click", function () {
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  numOfSquares=6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = "block";
    }
});

resetB.addEventListener("click", function(){
 //generate all new Colors
    colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked Color
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  this.textContent = "New Colors";
  //change colors of squares
  for(var i = 0; i < squares.length ; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#steelblue";

});

colorDisplay.textContent = pickedColor;

for(var i=0; i < squares.length; i++){
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  // add click listeners to squares
  squares[i].addEventListener("click", function () {
  // grab color of clicked square & compare to pickedColor
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor)
    {
      messageDisplay.textContent = "Correct!";
      resetB.textContent = "Play Again?";
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    }
    else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
      resetB.textContent = "New Colors";
    }
  });
}

function changeColors(color){
  //loop through all squares, change each color to given color
  for(var i = 0; i < squares.length; i++)
    squares[i].style.backgroundColor = color;
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for(var i = 0; i < num ; i++){
      //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor(){
  //pick a "red" from 0 t0 255"
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 t0 255"
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 t0 255"
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")"; //spaces are important
}
