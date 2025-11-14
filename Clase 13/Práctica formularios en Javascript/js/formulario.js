let form = document.querySelector('form')
let fullName = document.querySelector('#fullName')
let email = document.querySelector('#email')
let phone = document.querySelector('#phone')
let password = document.querySelector('#password')
let rePassword = document.querySelector('#rePassword')

form.addEventListener('submit', function(event){
    event.preventDefault();

    if (fullName.value == ""){
    let invalidName = document.querySelector(".invalid-feedback.fullName")
    invalidName.innerHTML = "<p>Debe de llenar el campo</p>";
    invalidName.style.display = "block";
    }

    else if (email.value == ""){
    let invalidEmail = document.querySelector(".invalid-feedback.email")
    invalidEmail.innerHTML = "<p>Debe de llenar el campo</p>";
    invalidEmail.style.display = "block";
    } 

    else if (phone.value == ""){
    let invalidPhone = document.querySelector(".invalid-feedback.phone")
    invalidPhone.innerHTML = "<p>Debe de llenar el campo</p>";
    invalidPhone.style.display = "block";
    }
    else if (phone.value.length < 8){
    let invalidPhone = document.querySelector(".invalid-feedback.phone")
    invalidPhone.innerHTML = "<p>Maximo 8 caracteres</p>";
    invalidPhone.style.display = "block";
    }

    else if (password.value == ""){
    let invalidPassword = document.querySelector(".invalid-feedback.password")
    invalidPassword.innerHTML = "<p>Debe de llenar el campo</p>";
    invalidPassword.style.display = "block";
    }
    else if (password.value.length > 3){
    let invalidPassword = document.querySelector(".invalid-feedback.password")
    invalidPassword.innerHTML = "<p>Minimo 3 caracteres</p>";
    invalidPassword.style.display = "block";
    }

    else if (rePassword.value == ""){
    let invalidrePassword = document.querySelector(".invalid-feedback.rePassword")
    invalidrePassword.innerHTML = "<p>Debe de llenar el campo</p>";
    invalidrePassword.style.display = "block";
    }
    else if (rePassword.value != password.value){
    let invalidrePassword = document.querySelector(".invalid-feedback.rePassword")
    invalidrePassword.innerHTML = "<p>Tienen que contener el mismo contenido</p>";
    invalidrePassword.style.display = "block";
    }

    else{
        console.log("entrego");
        
        this.submit()
    }
})