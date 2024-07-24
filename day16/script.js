const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

smallCups.forEach((cup, index) => {
  cup.addEventListener("click", () => highlightCups(index));
});

function highlightCups(index) {
  smallCups.forEach((cup, number) => {
    if (number <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
}
