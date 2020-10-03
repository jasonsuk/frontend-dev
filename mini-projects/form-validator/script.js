const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCfm = document.getElementById('password-cfm');
const form = document.querySelector('form');

function showError(element, message) {
	const formControl = element.parentElement;
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

function showSuccess(element) {
	const formControl = element.parentElement;
	formControl.className = 'form-control success';
}

function getFieldName(element) {
	let fieldName = element.id;
	if (fieldName === 'password-cfm') fieldName = 'password confirmation';
	return fieldName.charAt(0).toUpperCase() + fieldName.slice(1);
}

function matchPassword(password1, password2) {
	if (String(password1.value).toLowerCase() === String(password2.value).toLowerCase()) showSuccess(password2);
	else showError(password2, 'Password do not match. Please enter again');
}

function validatePassword(passwordElement) {
	// combine checkLength together
	checkLength(passwordElement, 6, 16);
	const re = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	if (re.test(passwordElement.value)) showSuccess(passwordElement);
	else showError(passwordElement, 'Invalid Password. Please refer to our advise on password combination.');
}

function validateEmail() {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(email.value)) showSuccess(email);
	else showError(email, 'Email must follow the correct format i.e. abc@gmail.com');
}

function checkLength(element, min, max) {
	if (element.value.length < min) {
		showError(element, `${element.id} must contain at least ${min} characters`);
	} else if (element.value.length > min) {
		showError(element, `${element.id} value cannot have more than ${max} characters`);
	}
}

function checkRequired(array) {
	array.forEach((element) => {
		if (element.value === '') {
			showError(element, `${getFieldName(element)} is not entered`);
		} else {
			showSuccess(element);
		}
	});
}

form.addEventListener('submit', function(e) {
	e.preventDefault();
	// command/function is executed from bottom all the way up
	checkRequired([ username, email, password, passwordCfm ]);
	checkLength(username, 5, 24);
	validateEmail();
	validatePassword(password);
	validatePassword(passwordCfm);
	matchPassword(password, passwordCfm);
});
