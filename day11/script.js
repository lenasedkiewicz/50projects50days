function showKeyCodes() {
  const insert = document.getElementById("insert");

  const keyCodes = {
    "e.key": e.key === " " ? "Space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };
}

window.addEventListener("keydown", (e) => showKeyCodes);
