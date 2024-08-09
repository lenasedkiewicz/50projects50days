const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(clickedOption) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === clickedOption) {
      fast.checked = false;
    }

    if (cheap === clickedOption) {
      good.checked = false;
    }

    if (fast === clickedOption) {
      cheap.checked = false;
    }
  }
}
