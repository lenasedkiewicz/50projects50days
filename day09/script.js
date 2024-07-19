const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  const btnName = sound.charAt(0).toUpperCase() + sound.substring(1);
  btn.innerText = btnName;

  document.getElementById("buttons").appendChild(btn);
});
