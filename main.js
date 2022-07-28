import {checkFirstnameAndLastname} from "./functions/chekUserNameAndSurname.js";
import {checkCorrectEmail} from "./functions/checkUserEmail.js";
import {checkPhoneNumber} from "./functions/checkUserPhoneNumber.js";

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  
  let userData = document.querySelector(".user-name").value.trim();
  let correctUserName = checkFirstnameAndLastname(userData);

  let userEmail = document.querySelector(".user-email").value.trim();
  let correctUserEmail = checkCorrectEmail(userEmail);
  
  let userPhoneNumber = checkPhoneNumber();

  console.log(correctUserName, correctUserEmail, userPhoneNumber)
});

