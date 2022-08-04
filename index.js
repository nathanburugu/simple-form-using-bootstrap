const firstName = document.querySelector("#firstName").value;
const lastName = document.querySelector("#lastName").value;
const userEmail = document.querySelector("#userEmail").value;
const userPassword = document.querySelector("#userPassword").value;
const submit = document.querySelector("#submit");
submit.addEventListener("click", checkInput);
const warning = document.querySelector("#textExample1");
function checkInput() {
  if (
    firstName === "" ||
    lastName === "" ||
    userEmail === "" ||
    userPassword === ""
  ) {
    // warning.textContent = "Please fill in all fields";
    alert("Please fill in all fields");
  } else if (userPassword !== registerRepeatPassword) {
    alert("Passwords do not match");
  } else if (userPassword.length < 8) {
    alert("Password must be at least 8 characters");
  } else if (userEmail.indexOf("@") === -1) {
    alert("Please enter a valid email");
  } else {
    alert("Success");
  }
}
