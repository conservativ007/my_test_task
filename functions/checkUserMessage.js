import {showHelpMessage} from "./userMessages.js";

export function checkUserMessage() {
  let userText = document.querySelector(".user-text").value;
  if(userText.length === 0) return showHelpMessage("this field is required", ".user-text");
  if(userText.length < 10) return showHelpMessage("must be at least 10 characters", ".user-text");
  if(userText.length > 300) return showHelpMessage("must be maximum 300 characters", ".user-text");
  return true;
}