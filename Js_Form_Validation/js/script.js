const nameError = document.getElementById('name-error');
const phoneError = doument.getElementById('phone-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');

function validateName(){
  const name = document.getElementById('contact-name').value;

  if (name.length == 0) {
    nameError.innerHTML = 'Name is required'
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Write full name'
    return false;
  }
  nameError.innerHTML = ' '
  return true;
}


function validatePhone(){
  const phone = document.getElementById('contact-phone').value;

  if (phone.length == 0) {
    phoneError.innerHTML = 'Phone number is required'
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = 'Phone number should be 10 digits'
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = 'Only digits please'
    return false;
  }
  phoneError.innerHTML = ' '
  return true;
}

function validateEmail(){
  const email = document.getElementById('contact-email').value;
  
  if (email.length == 0) {
    emailError.innerHTML = 'Email is required'
    return false;
  }

  if (!email.match(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = 'Email invalid'
    return false;
  }
  emailError.innerHTML = ' '
  return true;
}

function validateMessage(){
  const message = document.getElementById('contact-message').value;
  const required = 30;
  const left = required - message.length;

  if (left > 0) {
  messageError.innerHTML = left + 'more characters required';
  return false;
}
messageError.innerHTML = ' ';
return true;

}

function validateForm(){
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    submitError.style.display = 'block';
    submitError.innerHTML = 'Please fix erro before submitting';
    setTimeout(function(){submitError.style.display = 'none'}, 3000);
    return false;
  }

}
