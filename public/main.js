import { checkFirstnameAndLastname } from "./functions/chekUserNameAndSurname.js";
import { checkCorrectEmail } from "./functions/checkUserEmail.js";
import { checkPhoneNumber } from "./functions/checkUserPhoneNumber.js";
import { checkUSerDate } from "./functions/checkUSerDate.js";
import { checkUserMessage } from "./functions/checkUserMessage.js";
import { userMessageSuccessful } from "./functions/userMessageSuccessful.js";

document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();

  let userName = checkFirstnameAndLastname();
  let userEmail = checkCorrectEmail();
  let userPhoneNumber = checkPhoneNumber();
  let userBirthday = checkUSerDate();
  let userMessage = checkUserMessage();

  let userData = [userName, userEmail, userPhoneNumber, userBirthday, userMessage];
  let result = userData.every(i => i === true);

  if (result === false) return;


  let form = document.querySelector(".user-form");

  let formData = new FormData(form);
  const values = Object.fromEntries(formData.entries())

  // create user
  async function CreateUser() {

    const response = await fetch("api/users", {
      method: "POST",
      headers: { "Accept": "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    if (response.ok === true) {
      const user = await response.json();
      console.log(`user ${user["user-name"]} was created`);
      userMessageSuccessful();
    }
  }
  CreateUser();
});



