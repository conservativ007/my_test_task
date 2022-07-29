import { showHelpMessage } from "./userMessages.js";

export function checkUserMessage() {
  let userText = document.querySelector(".user-text").value;
  if (userText.length === 0) return showHelpMessage("this field is required", ".user-message__message");
  if (userText.length < 10) return showHelpMessage("must be at least 10 characters", ".user-message__message");
  if (userText.length > 300) return showHelpMessage("must be maximum 300 characters", ".user-message__message");
  return true;
}