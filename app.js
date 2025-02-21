

const signupCard = document.querySelector(".signupCard");
const errorEmail = document.querySelector(".error-email");

const emailInput = document.querySelector(".email");
const userEmail = document.querySelector(".user-email")
const submitBtn = document.querySelector(".signup-button");
const successCard = document.querySelector(".card-success");
const dismissBtn = document.querySelector(".dismiss-button");

const form = document.querySelector("form");


function validateEmail(email) {

}


form.addEventListener("submit", (event) => {
    //submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;


    /*Make an if statement here and add functionality, depending on the email verification*/

    if (emailRegex.test(email)) {
        successCard.classList.toggle("active");
        signupCard.classList.toggle("active");

        userEmail.textContent = emailInput.value;
    }
    else {
        errorEmail.classList.add("active");
        emailInput.classList.add("error");
    }


})


dismissBtn.addEventListener("click", () => {
    successCard.classList.toggle("active");
    signupCard.classList.toggle("active");
    errorEmail.classList.remove("active");
    emailInput.classList.remove("error");

})
