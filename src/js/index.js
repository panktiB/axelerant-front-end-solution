// Selection of HTML objects
const burger = document.querySelector(".burger i");
const nav = document.querySelector(".nav");

const getInTouchIconElement = document.querySelector(".getInTouchIcon");
const getInTouchElement = document.querySelector(".getInTouch");

const submitButton = document.querySelector(".grid-item-text-workForm button");

// Defining a function for toggling nav
function toggleNav() {
  burger.classList.toggle("fa-bars");
  burger.classList.toggle("fa-times");
  nav.classList.toggle("nav-active");
}

// Calling the function after click event occurs
burger.addEventListener("click", function() {
  toggleNav();
});

// function to scroll to footer
function getInTouchFunction() {
  document
    .querySelector(".grid-container-footer")
    .scrollIntoView({ behavior: "smooth" });
}

// adding click event to the icon/button
getInTouchElement.addEventListener("click", function() {
  getInTouchFunction();
});

getInTouchIconElement.addEventListener("click", function() {
  getInTouchFunction();
});

// attempt form validations on clicking submit
function formSubmit() {
  // console.log("submit");
  var fullName = document.querySelector("#fullName").value;
  var email = document.querySelector("#email").value;
  var number = document.querySelector("#number").value;

  var namePattern = /^[a-zA-Z]+\s{0,}[a-zA-Z]{0,}$/;
  // var emailPattern = /^[a-zA-Z]+[0-9]{0,}[a-zA-Z]{0,}@[a-zA-Z]+.com$/;
  var emailPattern = /^[a-zA-Z]+[0-9]{0,}\w{0,}@[a-zA-Z]+.com$/;
  var numberPattern = /^[1-9]{1}[0-9]{9}/;

  var nameCheck = false;
  var emailCheck = false;
  var numberCheck = false;

  // validating full name of user
  if (fullName.match(namePattern)) {
    // if invalid value was typed in previously and current value is correct
    if (
      document
        .querySelector(".fullNameInvalid")
        .classList.contains("formInvalid")
    ) {
      document
        .querySelector(".fullNameInvalid")
        .classList.remove("formInvalid");
    }
    nameCheck = true;
  } else {
    // adding formInvalid class
    document.querySelector(".fullNameInvalid").classList.add("formInvalid");
  }

  // validating email of user
  if (email.match(emailPattern)) {
    // if invalid value was typed in previously and current value is correct
    if (
      document.querySelector(".emailInvalid").classList.contains("formInvalid")
    ) {
      document.querySelector(".emailInvalid").classList.remove("formInvalid");
    }
    emailCheck = true;
  } else {
    // adding formInvalid class
    document.querySelector(".emailInvalid").classList.add("formInvalid");
  }

  // validating phone number of user
  if (number.match(numberPattern)) {
    // if invalid value was typed in previously and current value is correct
    if (
      document.querySelector(".numberInvalid").classList.contains("formInvalid")
    ) {
      document.querySelector(".numberInvalid").classList.remove("formInvalid");
    }
    numberCheck = true;
  } else {
    // adding formInvalid class
    document.querySelector(".numberInvalid").classList.add("formInvalid");
  }

  if (nameCheck && emailCheck && numberCheck) {
    console.log(true);
    console.log(document.querySelector(".successHide"));
    document.querySelector(".successHide").classList.add("success");
    console.log(document.querySelector(".success"));
    document.querySelector(".success").classList.remove("successHide");
  }
}

// add click event to sumit button
submitButton.addEventListener("click", function() {
  formSubmit();
});
