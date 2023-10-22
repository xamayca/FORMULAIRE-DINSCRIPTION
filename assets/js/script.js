//1. EMPÊCHER LES INPUT D'ETRE VIDER QUAND ON CLIQUE SUR LE BOUTON ENVOYER.
document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Submit is pushed');
})

const validInput = (input, error, icon) => {

    const errorStyle = () => {
        error.classList.add('opacity-1');
        input.classList.add('border-warn');
        icon.classList.add('opacity-1');
    }

    const clearStyle = () => {
        error.classList.remove('opacity-1');
        input.classList.remove('border-warn');
        icon.classList.remove('opacity-1');
        error.textContent = "";
    }

    input.addEventListener('input', () => {

        const value = input.value.length;

        const firstChar = input.value.charAt(0).toUpperCase();
        const remainingChars = input.value.slice(1).toLowerCase();

        console.log(firstChar + remainingChars);

        if (value == '0') {
            error.textContent = "This field must be required";
            errorStyle();
        } else if (value < '3') {
            error.textContent = "Require more than 3 characters";
            errorStyle();
        } else {
            clearStyle();
        }

    })
}


const lName = document.getElementById('lname');
const lIcon = document.getElementById('error-icon-lname');
const lError = document.getElementById('error-msg-lname');
validInput(lName, lError, lIcon);


const fname = document.getElementById('fname');
const fIcon = document.getElementById('error-icon-fname');
const fError = document.getElementById('error-msg-fname');
validInput(fname, fError, fIcon);
