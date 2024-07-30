const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = '<img src="./glass-sphere.jpg" alt="Glass sphere" />';
  title.innerHTML = "Lorem Ipsum lorem lorem";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, animi!";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/women/81.jpg" alt="" />';
  name.innerHTML = "Jane Doe";
  date.innerHTML = "Oct 09, 2020";

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_text.forEach((bg_text) =>
    bg_text.classList.remove("animated-bg-text")
  );
}
