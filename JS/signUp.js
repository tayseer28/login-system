// signUp js file
import { validateUser, addUser, isExist } from './common.js';

let userName = document.querySelector('#userName');
let userEmail = document.querySelector('#userEmail');
let userPassword = document.querySelector('#userPasswrod');
let signUpBtn = document.querySelector('#signUpBtn');

console.log(userName);
console.log(userEmail);
console.log(userPassword);
console.log(signUpBtn);

signUpBtn.addEventListener('click', function () {
    signUp();
});

function signUp() {
    if (userName.value == "" || userEmail.value == "" || userPassword.value == "") {
        document.querySelector("#signUpStatus").classList.add("text-danger");
        document.querySelector("p#signUpStatus").innerHTML = "All fields are required";
        return false;
    } else if (!validateUser(userName) || !validateUser(userEmail) || !validateUser(userPassword)) {
        document.querySelector("p#signUpStatus").classList.add("text-danger");
        document.querySelector("p#signUpStatus").innerHTML = "Username must be at least 3 chars, email must be valid, password length must be at least 8 chars";
        return false;
    }
    else if(isExist(userEmail.value))
    {
        document.querySelector("p#signUpStatus").classList.add("text-danger");
        document.querySelector("p#signUpStatus").innerHTML = "Email already exists";
        return false;
    }
    else {
        addUser(userName.value, userEmail.value, userPassword.value);
        document.querySelector("p#signUpStatus").classList.remove("text-danger");
        window.location.href = "index.html";
        return true;
    }
}