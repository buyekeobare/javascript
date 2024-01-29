//Challenge 1
//When the user clicks on the special button, alert "Hooray!"

function sayHooray(event) {
  event.preventDefault();
  alert("Hooray!");
}
let clickButton = document.querySelector("#special-button");
clickButton.addEventListener("click", sayHooray);

//Challenge 2
//when the user submits the password form, alert the password input

function showPassword(event) {
  event.preventDefault();
  let passwordInput = document.querySelector("#password-input");
  alert(`Your super secret password is ${passwordInput.value}`); // passwordInput.value);
}

let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit", showPassword);

//challenge 3
//when submitting the signup form, alert the username and email

function showSignupvalues(event) {
  event.preventDefault();
  let email = document.querySelector("#email");
  let username = document.querySelector("#username");
  alert(`Your email is ${email.value}`);
  alert(`Your username is ${username.value}`);
}
let signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", showSignupvalues);