/* Get Date */
const date = document.getElementById("date");
const currentDate = new Date();
const currentDay = currentDate.toLocaleDateString("en-GB", { weekday: "long" });
const currentMonth = currentDate.toLocaleDateString("en-GB", {
  month: "short",
});
const currentDayNumber = currentDate.getDate();

function addCurrentDate() {
  date.innerHTML = `${currentDay}, ${currentMonth} <span class="circle">${currentDayNumber}</span>`;
}

addCurrentDate();

/* Set time */

const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

/* Set mode */

const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerText = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerText = "Light mode";
  }
});
