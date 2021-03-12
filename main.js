let button = document.getElementById("submitButton");
let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let message = document.getElementById("message");
let form = document.querySelector("form");
let emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function formHandle() {
    console.clear();
    let data = {};
    let errors = [];

    //Full Name Validation
    if (fullName.value) {
        data.fullName = fullName.value;
    } else {
        let eMessage = "Full name is missing";
        errors.push(eMessage);
    }


    //Email Validation
    if (email.value) {
        if (emailFormat.test(email.value)) {
            data.email = email.value;
        } else {
            let eMessage = "Email is invalid";
            errors.push(eMessage);
        }
    } else {
        let eMessage = "Email is missing";
        errors.push(eMessage);
    }


    //Message Validation
    if (message.value) {
        data.message = message.value;
    } else {
        let eMessage = "Message is missing";
        errors.push(eMessage);
    }


    //Print Errors or Data
    if (errors.length > 0) {
        console.log(errors);
    } else {
        console.log(data);
        form.reset();
    }
}


button.addEventListener("click", formHandle);
