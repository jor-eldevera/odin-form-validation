const form = document.getElementById("infoForm");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");

email.addEventListener("input", e => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter an email address.")
    } else {
        email.setCustomValidity("");
    }
});

passwordConfirm.addEventListener("input", e => {
    if (passwordConfirm.value != password.value) {
        passwordConfirm.setCustomValidity("Passwords must match.");
    } else {
        passwordConfirm.setCustomValidity("");
    }
});