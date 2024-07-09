// home 
// import { users } from './common.js';
// import { signIn } from './signIn.js';

let logOutBtn = document.querySelector('#logOutBtn');
let loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
console.log(loggedInUser);

//log out button
logOutBtn.addEventListener('click', function () {
    sessionStorage.removeItem('loggedInUser');
    window.location.href = "index.html";
});

//display the user name in the home page
if(loggedInUser)
{
    document.querySelector("h1").innerHTML = `welcome ${loggedInUser.userName}`;
}
else
{
    //if user is not logged in go to the index page(login page) or if user try to reach the home page with manipulating the url
    window.location.href = "index.html";
}