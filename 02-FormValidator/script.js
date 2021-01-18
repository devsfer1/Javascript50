const form = document.getElementById('form');
const nome = document.getElementById('name');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const button = document.getElementById('form-button');

// Show success
function showSuccess(input) {
    input.classList.add('success');

    input.classList.remove('error');
    input.nextSibling.nextSibling.classList.remove('error');
}

// Show error
function showError(input, message) {
    input.classList.add('error');  

    input.nextSibling.nextSibling.classList.add('error');

    input.nextSibling.nextSibling.innerText = message;
}

//Check name, username & password length
function checkLength(nome, username, password) {
    const passwordLength = password.value.length;
    const nomeLength = nome.value.length;
    const usernameLength = username.value.length;

    //Name
    if(nomeLength < 3) {
        showError(nome, 'Nome muito curto');
    } else if (nomeLength > 16) {
        showError(nome, 'Nome muito longo');
    } else {
        showSuccess(nome);
    }

    //Username
    if(usernameLength < 5) {
        showError(username, 'Username muito curto');
    } else if (usernameLength > 20) {
        showError(username, 'Username muito longo');
    } else {
        showSuccess(username);
    }

    //Password
    if(passwordLength < 6) {
        showError(password, 'Senha muito curta');
    } else if (passwordLength  > 16) {
        showError(password, 'Senha muito longa');
    } else {
        showSuccess(password);
    }
} 
    
// Check Email
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    var emailCheck = re.test(input.value);

    if(emailCheck == true) {
        showSuccess(email);
    } else {
        showError(email, 'Email inválido');
    }
}

// Check Passwords match
function checkPasswordMatch(password1, password2) {
    if(password2.value == '') {
        showError(password2, 'Senha muito curta'); 
    } else if (password1.value === password2.value) {
        showSuccess(password2, ''); 
    } else {
        showError(password2, 'Senhas não combinam'); 
    }
}

//Events
form.addEventListener('submit', function(e){
    e.preventDefault(e);

    checkLength(nome, username, password);
    checkEmail(email);
    checkPasswordMatch(password, confirmPassword);
    
});     


