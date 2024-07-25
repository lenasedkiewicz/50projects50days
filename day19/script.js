/* Get Date */
const date = document.getElementById("date");
const currentDate = new Date();
const currentDay = currentDate.toLocaleDateString("en-GB", { weekday: "long" });
const currentMonth = currentDate.toLocaleDateString("en-GB", {
  month: "short",
});
const currentDayNumber = currentDate.getDate();

console.log(currentDay, currentMonth, currentDayNumber);

function addCurrentDate() {
  date.innerHTML = `${currentDay}, ${currentMonth} <span class="circle">${currentDayNumber}</span>`;
}

addCurrentDate();
