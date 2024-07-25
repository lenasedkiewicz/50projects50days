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
const timeEl = document.querySelector(".time");

function setCurrentTime() {
  const currentTime = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Europe/London", // Specify the desired time zone
  };

  // Get the time in the specified time zone
  const formattedTime = currentTime.toLocaleString("en-GB", options);

  // Extract the parts you need
  const [time, ampm] = formattedTime.split(" ");

  // Split the time into hours, minutes, and seconds
  const [hours, minutes, seconds] = time.split(":");
  const hoursForClock = hours % 12;

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm.toUpperCase()}`;
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
