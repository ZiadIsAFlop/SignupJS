
function saveDetails() {
  //validate all inputs first
  var message = "";
  //if validation fails, function returns the
  // data that needs to be checked by the user

  message = message + validateEmail();
  message = message + validateUsername();
  message = message + validateTitle();
  message = message + validateName();
  message = message + validateGender();
  message = message + validateAddress();
  message = message + validateMobile();
  message = message + validateDob();
  message = message + validateCreditCard();
  message = message +  validatePassword();
  message = message + validateSecurityQ();


  if (message == "") {
    alert("Validation passed!");
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  } else {
    if (message[0] == ",") {
      message = message.replace(/^,/, '');
    }
    message = message.trim();

    alert("Invalid " + message + " entered.");
  }
}

function validateEmail() {
  return "";
  //Peter Mawere
}

function validateUsername() {
  //after validation, if no issues, return ""
  //otherwise, return " username"
  //remember to include leading space!
  //Giuseppe
  return "";
}

function validateTitle() {
  // ZIAD WAS HERE BIG DOGGGG
  return "";
}
function validateName() {
  // Pi Was Here
  return "";
}

function validateGender() {
  return ""; // noah was here
  //erthfghdfghfbrgbgfn
  //sgghfrghythgbfgbgf
}

function validateAddress() {
  return "";
}

function validateMobile() {
  return "";
}
function validateDob() {
  //Joshu was here
  return "";
}

function validatePassword() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function validateCreditCard() {
  //Isaac is here :)
  return "";
}

// Andrew was here 😎
function validateSecurityQ() {
  //after validation, if no issues, return ""
  //otherwise, return ", security question"
  //remember to include leading space!

  return "";
}
