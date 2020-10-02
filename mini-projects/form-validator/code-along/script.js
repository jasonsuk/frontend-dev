const form = document.querySelector('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCfm = document.getElementById('password-cfm');

// Show error outline
function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

// Show error outline
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase()); // return boolean result
}

// Password Confirmation
function confirmPassword() {
	password1 = String(password.value).toLowerCase();
	password2 = String(passwordCfm.value).toLowerCase();
	return password1 === password2;
}

// Event listeners
form.addEventListener('submit', function(e) {
	e.preventDefault();

	// console.log(username.value);
	if (username.value === '') {
		showError(username, 'Username is required');
	} else {
		showSuccess(username);
	}

	if (email.value === '') {
		showError(email, 'Email is required');
	} else if (!isValidEmail(email.value)) {
		showError(email, 'Email is not valid');
	} else {
		showSuccess(email);
	}

	if (password.value === '') {
		showError(password, 'Password is required');
	} else {
		showSuccess(password);
	}

	if (passwordCfm.value === '') {
		showError(passwordCfm, 'Password confirmation is required');
	} else if (!confirmPassword()) {
		showError(password, 'Password does not match');
		showError(passwordCfm, 'Password does not match');
	} else {
		showSuccess(passwordCfm);
	}
});
