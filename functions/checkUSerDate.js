import {showHelpMessage} from "./userMessages.js";

export function checkUSerDate() {
  let date = document.querySelector(".user-birthday").value;
  if(date.length === 0) return showHelpMessage("this field is required", ".user-birthday");
  return true;
}

