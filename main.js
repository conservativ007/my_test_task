import {checkFirstnameAndLastname} from "./functions/chekUserNameAndSurname.js";
import {checkCorrectEmail} from "./functions/checkUserEmail.js";
import {checkPhoneNumber} from "./functions/checkUserPhoneNumber.js";
import { checkUSerDate } from "./functions/checkUSerDate.js";
import { checkUserMessage } from "./functions/checkUserMessage.js";



document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  
  let userName = checkFirstnameAndLastname();
  let userEmail = checkCorrectEmail();
  let userPhoneNumber = checkPhoneNumber();
  let userBirthday = checkUSerDate();
  let userMessage = checkUserMessage();

  let form = document.querySelector(".user-form");

  let formData = new FormData(form);
  const values = Object.fromEntries(formData.entries())

  // fetch("", {
  //   method: "POST",
  //   body: new FormData(form)
  // })
  // .then(data => console.log(data))


  console.log(values)
});

