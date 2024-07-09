// signIn js file
import { users } from './common.js';
let userEmail = document.querySelector('#userEmail');
let userPassword = document.querySelector('#userPassword');
let signInBtn = document.querySelector('#signInBtn');

console.log(users);
console.log(userEmail);
console.log(userPassword);
console.log(signInBtn);

signInBtn.addEventListener('click', function () {
    let user = signIn();
    if(user)
    {
        //we credate loggedInUser to store the corresponding logged in user and sent it to the home.js file to print the userName of that user 
        //we use session to store the user as long as the browser is open
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        window.location.href = "home.html";
    }
    
});


export function signIn() {
    let email = userEmail.value;
    let password = userPassword.value;
    console.log(userEmail, userEmail.value);
    console.log(userPassword, userPassword.value);
    console.log(email);
    console.log(password);

    if (email == "" || password == "") {
        document.querySelector("p#signInStatus").classList.add("text-danger");
        document.querySelector("p#signInStatus").innerHTML = "All fields are required";
        return null;
    }

    if (users.find(user => user.userEmail === email && user.userPassword === password) == undefined) {
        document.querySelector("p#signInStatus").classList.add("text-danger");
        document.querySelector("p#signInStatus").innerHTML = "Email or password is incorrect";
        return null;
    } else {
        //return the user object
        return users.find(user => user.userEmail === email && user.userPassword === password);
    }
}