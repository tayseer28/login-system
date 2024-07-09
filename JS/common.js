// let userName = document.querySelector('#userName');
// let userEmail = document.querySelector('#userEmail');
// let userPassword = document.querySelector('#userPassword');
// let signUpBtn = document.querySelector('#signUpBtn');
// let signInBtn = document.querySelector('#signInBtn');

// let users = [];
// if (localStorage.getItem('users')) {
//     users = JSON.parse(localStorage.getItem('users'));
// }



// function validateUser(element) {
//     let regex =
//     {
//         userName: /.{3,}/,
//         userEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//         userPassword: /.{8,}/
//     }
//     //check if empty

//     if (regex[element.id].test(element.value)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function addUser() {

//     let user = {
//         userName: userName.value,
//         userEmail: userEmail.value,
//         userPassword: userPassword.value
//     }
//     users.push(user);
//     localStorage.setItem('users', JSON.stringify(users));

// }

// //sign up event listener if sign up is valid go to sign in page
// signUpBtn.addEventListener('click', function () {

//     signUp();

// });
// function signUp()
// {
//     if(userName.value == "" || userEmail.value == "" || userPassword.value == "")
//     {
//         //append a p tag or span tell all fields are required
//         document.querySelector("#signUpStatus").classList.add("text-danger");
//         document.querySelector("p#signUpStatus").innerHTML = "All fields are required";
//         // document.querySelector("p.formatError").classList.add("d-none");
//         // document.querySelector("p.text-success").classList.add("d-none");
//         return false;
//     }
//     else if(!validateUser(userName) || !validateUser(userEmail) || !validateUser(userPassword))
//     {
//         //append a p tag or span tell invalid input
//         document.querySelector("p#signUpStatus").classList.add("text-danger");
//         document.querySelector("p#signUpStatus").innerHTML = "user name must be at least 3 char , email must be valid, password length must be at least 8 chars";
//         // document.querySelector("p.#emptyError").classList.add("d-none");
//         // document.querySelector("p.text-success").classList.add("d-none");
//         return false;

//     }
//     else if(validateUser(userName) && validateUser(userEmail) && validateUser(userPassword))
//     {
//         addUser();
//         //append a p tag or span tell user added successfully
//         document.querySelector("p#signUpStatus").classList.remove("text-success");
//         document.querySelector("p#signUpStatus").innerHTML = "Success";
//         window.location.href = "signIn.html";


//         // document.querySelector("p.#emptyError").classList.add("d-none");
//         // document.querySelector("p.formatError").classList.add("d-none");
//         return true;
//     }
// }


// //sign in event listener if sign in is valid go to home page
// signInBtn.addEventListener('click', function(){

//     signIn();
    
// });
// function signIn()
// {
//     let email = userEmail.value;
//     let password = userPassword.value;
//     //search for user in users array
//     //if empty return false
//     if(email == "" || password == "")
//     {
//         document.querySelector("p#signInStatus").classList.add("text-danger");
//         document.querySelector("p#signInStatus").innerHTML = "All fields are required";
//         return false;
//     }
//     //if user is not found return false
//     if(users.find(user => user.userEmail === email && user.userPassword === password) == undefined)
//     {
//         document.querySelector("p#signInStatus").classList.add("text-danger");
//         document.querySelector("p#signInStatus").innerHTML = "email or password is incorrect";
//         return false;
//     }
//     //if found go to home page
//     else
//     {
//         window.location.href = "home.html";
//         return true;
//     }


// }
// common js file
export let users = [];
if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'));
}

export function validateUser(element) {
    let regex = {
        userName: /.{3,}/,
        userEmail: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        userPasswrod: /.{8,}/
    };
    return regex[element.id].test(element.value);
}

export function addUser(userName, userEmail, userPassword) {
    let user = {
        index: users.length,
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}
export function isExist(userEmail)
{
    // return users.find(user => user.userEmail === userEmail);
    //some function returns true if the condition is true for at least one element in the array
    return users.some(user => user.userEmail === userEmail);
}
