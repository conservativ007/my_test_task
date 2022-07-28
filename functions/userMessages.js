export function showHelpMessage(text, elemToShow) {
  let elemUserHelpMessage = document.querySelector(".user__help-message");
  
  let domElem = document.querySelector(elemToShow);
  let yCoordinates = domElem.getBoundingClientRect().y;

  elemToShow === ".user-text" ? 
  elemUserHelpMessage.style.top = `${yCoordinates + 70}px` : 
  elemUserHelpMessage.style.top = `${yCoordinates - 10}px`;
  
  elemUserHelpMessage.style.height = "40px";
  elemUserHelpMessage.innerHTML = text;
  elemUserHelpMessage.style.opacity = 1;
  
  setTimeout(() => hideHelpMessage(elemUserHelpMessage), 4000);
  return false;
}

function hideHelpMessage(elem) {
  elem.style.height = 0;
  elem.style.opacity = 0;
}