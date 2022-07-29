export function userMessageSuccessful() {
  let message = document.querySelector(".user-message__successful");
  message.classList.add("show-message__successful");


  setTimeout(() => message.classList.remove("show-message__successful"), 2000);

  let inputs = document.querySelectorAll("input");
  [...inputs].forEach(i => i.value = "");

  document.querySelector("textarea").value = "";
}