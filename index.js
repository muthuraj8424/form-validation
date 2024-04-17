let button = document.querySelector(".button");
let name = document.querySelector(".name");
let input = document.querySelectorAll("input");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let form = document.querySelector("form");
let nameerror = document.querySelector(".nameerror");
let emailerror = document.querySelector(".emailerror");
let passworderror = document.querySelector(".passworderror");
let details = document.querySelector(".details");
let resetbutton = document.querySelector(".resetbutton");
function ValidateName() {
  if (name.value === "") {
    nameerror.innerHTML = "Please enter a name";
    nameerror.style.color = "red";
    name.style.border = "1px solid red";
    // details.innerHTML = " ";
  } else if (name.length > 15) {
    nameerror.innerHTML = "Name is too long";
    name.style.border = "1px solid red";
    nameerror.style.color = "red";
  } else {
    nameerror.innerHTML = "sucessfully entered";
    nameerror.style.color = " green";
    name.style.border = "1px solid green";
    // details.innerHTML = "hello " + name.value + " your mail id is " + email.value;
  }
}

function ValidateEmail() {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
    emailerror.innerHTML = "sucessfully entered";
    emailerror.style.color = "green";
    // details.innerHTML = "hello " + name.value + " your mail id is " + email.value;
    email.style.border = "1px solid green";
  } else if (form.email.value === "") {
    emailerror.innerHTML = "Please enter an email";
    emailerror.style.color = "red";
    email.style.border = "1px solid red";
    // details.innerHTML = " ";
  } else {
    emailerror.innerHTML = " invalid email address";
    email.style.border = "1px solid red";
    emailerror.style.color = "red";
  }
}
function ValidatePasswords() {
  if (password.value === "") {
    passworderror.innerHTML = "Please enter a password";
    passworderror.style.color = "red";
    password.style.border = "1px solid red";
    details.innerHTML = " ";
  } else if (password.value.length < 8) {
    passworderror.innerHTML = " Password is too short";
    passworderror.style.color = "red";
    password.style.border = "1px solid red";
  } else {
    passworderror.innerHTML = " sucessfully entered";
    passworderror.style.color = "green";
    // details.innerHTML = "hello " + name.value + " your mail id is " + email.value;
    password.style.border = "1px solid green";
  }
}

button.addEventListener("click", function (e) {
  e.preventDefault();
  ValidateName();
  ValidateEmail();
  ValidatePasswords();
  // console.log(name.value);
  // console.log(email.value);
  if (name.value === "" || email.value === "" || password.value === "") {
    details.innerHTML = "Plese enter the above fields";
    // "hello " + name.value + " your mail id is " + email.value;
  }
  if (!(name.value === "" || email.value === "" || password.value === "")) {
    details.innerHTML =
      "hello " + name.value + " your mail id is " + email.value;
  }
});
resetbutton.addEventListener("click", function (e) {
  e.preventDefault();
 location.reload();
});
