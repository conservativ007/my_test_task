export function userMessageSuccessful() {
  let message = document.querySelector(".user-message__successful");
  message.style.opacity = 1;
  setTimeout(() => message.style.opacity = 0, 2000);

  let inputs = document.querySelectorAll("input");
  [...inputs].forEach(i => i.value = "");

  document.querySelector("textarea").value = "";
}