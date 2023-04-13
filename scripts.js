const form = document.getElementById("infoForm");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

email.addEventListener("input", e => {
    console.log("test");
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter an email address.")
    } else {
        email.setCustomValidity("");
    }
});