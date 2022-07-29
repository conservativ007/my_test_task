// clear when working Backspace 
document.querySelector(".user-phone").addEventListener("keydown", (e) => {
  let elemUserPhoneNum = document.querySelector(".user-phone");
  if(elemUserPhoneNum.value.length <=3 && e.key === "Backspace" )
  elemUserPhoneNum.value = "";
});


document.querySelector(".user-phone").addEventListener("input", (e) => {
  let input = e.target;
  let userPhoneNumbers;
  let formatedInputValue = "";

  function getInputsNumberValue(value) {
    return value.replace(/\D/g, "");
  }

  userPhoneNumbers = getInputsNumberValue(e.target.value);
  if(userPhoneNumbers.length === 0) {
    return input.value = "";
  }

  if("789".includes(userPhoneNumbers[0])) {
    
    if(userPhoneNumbers[0] === "9") userPhoneNumbers = `7${userPhoneNumbers}`; 
    let firstNum = (userPhoneNumbers[0] === "8") ? "8" : "+7"
    
    formatedInputValue = `${firstNum} `;
    
    if(userPhoneNumbers.length > 1) {
      formatedInputValue += `(${userPhoneNumbers.slice(1, 4)}`
    }

    if(userPhoneNumbers.length >= 5) {
      formatedInputValue += `) ${userPhoneNumbers.slice(4, 7)}`
    }
    
    if(userPhoneNumbers.length >= 8) {
      formatedInputValue += `-${userPhoneNumbers.slice(7, 9)}`
    }

    if(userPhoneNumbers.length >= 10) {
      formatedInputValue += `-${userPhoneNumbers.slice(9, 11)}`
    }
    
  } else {
    formatedInputValue = `+${userPhoneNumbers}`;
  }

  input.value = formatedInputValue;
});