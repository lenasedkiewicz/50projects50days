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

function setCurrentTime() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const hoursForClock = hours % 12;
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setCurrentTime();

setInterval(setCurrentTime, 1000);

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
