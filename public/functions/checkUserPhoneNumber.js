import { showHelpMessage } from "./userMessages.js";

export function checkPhoneNumber() {
  let domElemOfPhoneNum = document.querySelector(".user-phone");
  if (domElemOfPhoneNum.value.length === 0) return showHelpMessage("this field is required", ".user-message__phone");
  if (domElemOfPhoneNum.value.length < 17) return showHelpMessage("length of phone number must be 11 nums", ".user-message__phone");
  return true;
}