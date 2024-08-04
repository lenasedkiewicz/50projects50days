const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  { message: "This is an informational message.", class: "info" },
  { message: "Task completed successfully!", class: "success" },
  { message: "An error occurred.", class: "error" },
  { message: "Neutral message without a class." },
  { message: "Another informational message.", class: "info" },
  { message: "Operation successful.", class: "success" },
  { message: "Something went wrong.", class: "error" },
  { message: "Regular message." },
  { message: "Informative update.", class: "info" },
  { message: "Process finished without errors.", class: "success" },
];

let messageNumber;

button.addEventListener("click", () => createNotification());

function createNotification(message = null) {
  const notification = document.createElement("div");
  notification.classList.add("toast");

  notification.innerText = message ? message : getRandomMessage();

  if (getRandomMessageType() !== "")
    notification.classList.add(getRandomMessageType());

  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function getRandomMessage() {
  messageNumber = Math.floor(Math.random() * messages.length);
  return messages[messageNumber].message;
}

function getRandomMessageType() {
  return messages[messageNumber].class ? messages[messageNumber].class : "";
}
