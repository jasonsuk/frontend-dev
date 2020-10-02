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
function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, `Email is not valid`);
	}
}

// Check passwords match
function checkPasswordMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords do not match');
	} else {
		showSuccess(input2);
	}
}

// Capitalize string
function toCapitalize(string) {
	const capStr = string.charAt(0).toUpperCase() + string.slice(1);
	return capStr;
}

// Get Fieldname
function getFieldName(input) {
	return toCapitalize(input.id);
}

// Check required fileds to avoid bunch of if statements
function checkRequired(inputArr) {
	// instead of for-loop, forEach is neater
	inputArr.forEach(function(input) {
		// console.log(input.value);
		if (input.value === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

// Check input length
function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(input, `${getFieldName(input)} must be at least ${min} characters`);
	} else if (input.value.length > max) {
		showError(input, `${getFieldName(input)} must be less than ${max} characters`);
	} else {
		showSuccess(input);
	}
}

// Event listeners
form.addEventListener('submit', function(e) {
	e.preventDefault();

	checkRequired([ username, email, password, passwordCfm ]);
	checkLength(username, 5, 15);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswordMatch(password, passwordCfm);
});
