var background = document.querySelector('body');
var timing = setInterval(randomColor, 2000);

function randomColor() {
  var randomNumber = Math.floor(Math.random() * 360);
  console.log(randomNumber);
  background.style.backgroundColor = "hsl(" + randomNumber + ", 100%, 50%)";
}

window.addEventListener('load', randomColor);

