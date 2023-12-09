const form = document.querySelector(".register__form");
const button = document.querySelector(".register__button");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

button.addEventListener("click", (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    let firstNameValue = formData.get("firstName")
    let lastNameValue = formData.get("lastName");
    let emailValue = formData.get("email");
    let passwordValue = formData.get("password");

    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const passwordRegex = /^\w+$/g;
    const firstNameAndLastNameRegex = /^\w+.*\w+$/gi;

    if (!firstNameValidation(firstNameValue, firstNameAndLastNameRegex)) {
        document.getElementById("firstNameIconError").style.display = "block";
        document.getElementById("firstNameError").style.display = "block";
        firstNameInput.style.border = "2px solid hsl(0, 100%, 74%)";
    }

    if (lastNameValue.trim() == "") {
        document.getElementById("lastNameIconError").style.display = "block";
        document.getElementById("lastNameError").style.display = "block";
        lastNameInput.style.border = "2px solid hsl(0, 100%, 74%)";
    }

    if (!emailValidation(emailValue, emailRegex)) {
        document.getElementById("emailIconError").style.display = "block";
        document.getElementById("emailError").style.display = "block";
        emailInput.style.border = "2px solid hsl(0, 100%, 74%)";
    }

    if (!passwordValidation(passwordValue, passwordRegex)) {
        document.getElementById("passwordIconError").style.display = "block";
        document.getElementById("passwordError").style.display = "block";
        passwordInput.style.border = "2px solid hsl(0, 100%, 74%)";
    }

})

function firstNameValidation(firstName, regex) {
    return regex.test(firstName);
}

function lastNameValidation(lastName, regex) {
    return regex.test(lastName);
}

function emailValidation(email, regex) {
    return regex.test(email);
}

function passwordValidation(password, regex) {
    return regex.test(password);
}

firstNameInput.addEventListener("input", () => {
    document.getElementById("firstNameIconError").style.display = "none";
    document.getElementById("firstNameError").style.display = "none";
    firstNameInput.style.border = "1px solid hsl(246, 25%, 77%)";
})

lastNameInput.addEventListener("input", () => {
    document.getElementById("lastNameIconError").style.display = "none";
    document.getElementById("lastNameError").style.display = "none";
    lastNameInput.style.border = "1px solid hsl(246, 25%, 77%)";
})

emailInput.addEventListener("input", () => {
    document.getElementById("emailIconError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    emailInput.style.border = "1px solid hsl(246, 25%, 77%)";
})

passwordInput.addEventListener("input", () => {
    document.getElementById("passwordIconError").style.display = "none";
    document.getElementById("passwordError").style.display = "none";
    passwordInput.style.border = "1px solid hsl(246, 25%, 77%)";
})