// PREVENT THE FORM FROM UPDATING IF SUBMITTED //
const form = document.getElementById("signUpForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);


const usernameHtml = document.getElementById('username');
console.log(usernameHtml);
const signUpErrorHtml = document.getElementsByClassName('signup-error');
console.log(signUpErrorHtml);



const validateInput = () => {

}

