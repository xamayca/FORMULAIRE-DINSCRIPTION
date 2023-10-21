// PREVENT THE FORM FROM UPDATING IF SUBMITTED //
const form = document.getElementById("signUpForm");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

