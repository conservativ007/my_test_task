import { showHelpMessage } from "./userMessages.js";

// checking while typing firstName and lastName
document.querySelector(".user-name").addEventListener("input", (e) => {
  if (e.target.value === "") return;

  let char = e.target.value.slice(-1);
  let bool = /^[a-zA-Z]|\s/.test(char);

  if (bool === false) {
    showHelpMessage("only letters of the Latin alphabet", ".user-message__name")
  }
});

export function checkFirstnameAndLastname() {
  let userData = document.querySelector(".user-name").value.trim();

  if (userData.length === 0) return showHelpMessage("this field is required", ".user-message__name");

  let rus = /[а-яА-Я]/.test(userData);
  if (rus === true) return showHelpMessage("only letters of the Latin alphabet", ".user-message__name");

  let digits = /\d/.test(userData);
  if (digits === true) return showHelpMessage("only letters of the Latin alphabet NOT A NUMBERS", ".user-message__name");

  let whitespaces = userData.split(" ").length;
  if (whitespaces === 1 || whitespaces > 2) return showHelpMessage("one whitespace must be between the first name and lastname", ".user-message__name");

  let correctLength = /^(\w{3,30}\s\w{3,30})$/.test(userData);
  if (correctLength === false) return showHelpMessage("minimum length of firstname and lastname 3 symbols maximum length 30 symbols", ".user-message__name");

  return true;
}

