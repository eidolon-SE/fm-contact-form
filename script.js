let form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let validFlag = true;

    // first name
    let firstNameInput = document.getElementById("first-name");
    let firstNameErrorMessage = document.getElementById("em-fname-req");
    
    // first name: clear error classes
    firstNameInput.classList.remove("form-input__input-box--invalid");
    firstNameErrorMessage.classList.remove("form-input__error-message--visible");

    // first name: check for errors
    if (firstNameInput.validity.valueMissing) {
        firstNameInput.classList.add("form-input__input-box--invalid");
        firstNameErrorMessage.classList.add("form-input__error-message--visible");
        validFlag = false;
    }

    // last name
    let lastNameInput = document.getElementById("last-name");
    let lastNameErrorMessage = document.getElementById("em-lname-req");

    // last name: clear error classes
    lastNameInput.classList.remove("form-input__input-box--invalid");
    lastNameErrorMessage.classList.remove("form-input__error-message--visible");

    // last name: check for errors
    if (lastNameInput.validity.valueMissing) {
        lastNameInput.classList.add("form-input__input-box--invalid");
        lastNameErrorMessage.classList.add("form-input__error-message--visible");
        validFlag = false;
    }

    // email
    let emailInput = document.getElementById("email");
    let emailInvalidErrorMessage = document.getElementById("em-email-invalid");
    let emailMissingErrorMessage = document.getElementById("em-email-req");

    // email: clear error classes
    emailInput.classList.remove("form-input__input-box--invalid");
    emailInvalidErrorMessage.classList.remove("form-input__error-message--visible");
    emailMissingErrorMessage.classList.remove("form-input__error-message--visible");

    // email: check for errors
    if (emailInput.validity.typeMismatch) {
        emailInput.classList.add("form-input__input-box--invalid");
        emailInvalidErrorMessage.classList.add("form-input__error-message--visible");
        validFlag = false;
    }
    if (emailInput.validity.valueMissing) {
        emailInput.classList.add("form-input__input-box--invalid");
        emailMissingErrorMessage.classList.add("form-input__error-message--visible");
        validFlag = false;
    }

    // query type
    let generalQueryInput = document.getElementById("general");
    let supportQueryInput = document.getElementById("support");
    let queryErrorMessage = document.getElementById("em-qtype-req");

    // query type: clear error classes
    queryErrorMessage.classList.remove("form-input__error-message--visible");

    // query type: check for errors
    if (generalQueryInput.validity.valueMissing && supportQueryInput.validity.valueMissing) {
        queryErrorMessage.classList.add("form-input__error-message--visible");
        validFlag = false;
    }

    // message
    let messageInput = document.getElementById("message");
    let messageErrorMessage = document.getElementById("em-message-req");

    // message: clear error classes
    messageInput.classList.remove("form-input__input-box--invalid");
    messageErrorMessage.classList.remove("form-input__error-message--visible");

    // message: check for errors
    if (messageInput.validity.valueMissing) {
        messageInput.classList.add("form-input__input-box--invalid");
        messageErrorMessage.classList.add("form-input__error-message--visible");
        validFlag = false;
    }
        
    // consent
    let consentInput = document.getElementById("consent");
    let consentErrorMessage = document.getElementById("em-consent-req");

    // consent: clear error classes
    consentErrorMessage.classList.remove("form-input__error-message--visible");

    // consent: check for errors
    if (consentInput.validity.valueMissing) {
        consentErrorMessage.classList.add("form-input__error-message--visible");
        validFlag = false;
    }

    // display success message
    let successMessage = document.getElementById("success");
    successMessage.classList.remove("contact-form__success-message--visible");

    if (validFlag) {
        successMessage.classList.add("contact-form__success-message--visible");
    }
});

function clickChildInput(e) {
    if (e.code == "Enter") {
        e.target.querySelector("input").click()
    }
}

let generalLabel = document.getElementById("general-label");
let supportLabel = document.getElementById("support-label");
let consentLabel = document.getElementById("consent-label");

generalLabel.addEventListener("keydown", clickChildInput);
supportLabel.addEventListener("keydown", clickChildInput);
consentLabel.addEventListener("keydown", clickChildInput);

