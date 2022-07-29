export function showHelpMessage(text, elemToShow) {

  let elemToShowToUser = document.querySelector(elemToShow);
  elemToShowToUser.innerHTML = text;
  elemToShowToUser.classList.add('user-message__show-message');

  setTimeout(() => elemToShowToUser.classList.remove('user-message__show-message'), 2000);
  return false;
}