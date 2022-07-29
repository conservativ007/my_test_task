import { showHelpMessage } from "./userMessages.js";

export function checkCorrectEmail() {
  let email = document.querySelector(".user-email").value.trim();
  if (email.length === 0) return showHelpMessage("this field is required", ".user-message__email");
  let correctEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
  if (correctEmail === false) return showHelpMessage("email must be correct", ".user-message__email");
  return true;
}