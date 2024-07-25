const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBTN = document.getElementById("left");
const rightBTN = document.getElementById("right");

let activeSlide = 0;

setBgToBody();

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
