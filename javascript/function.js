//////////////////////////////////////////////////////////////////////
// DICE ROLL (1-6) FUNCTION
function rollDice() {
	let min = 1;
	let max = 6;
	let roll = Math.floor(Math.random() * (max - min + 1) + min);
	console.log(roll);
}

function throwMultiDice() {
	for (let i = 0; i < 6; i++) {
		rollDice();
	}
}

// Execute function
// throwMultiDice();

//////////////////////////////////////////////////////////////////////
// ARGUMENTS in FUNCTION -> return different outputs ///
function rollMultiDice(numRolls) {
	for (let i = 0; i < numRolls; i++) {
		let roll = Math.floor(Math.random() * 6 + 1);
		console.log(roll);
	}
}

//rollMultiDice(6);

//////////////////////////////////////////////////////////////////////
// MULTIPLE ARGUMENTS in FUNCTION
function rollDiceFlex(min, max, numRolls) {
	let minNum = Math.floor(min); // just to show Math.floor
	let maxNum = Math.ceil(max);
	for (let i = 0; i < numRolls; i++) {
		let roll = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
		console.log(roll);
	}
}

// rollDiceFlex(4, 10, 5);

//////////////////////////////////////////////////////////////////////
// return result vs console.log(result)
// use return to catch result in a variable
// return ends a function -> anything written after return never runs

function add(x, y) {
	return x + y;
}

let total = add(4, 5);
// console.log(total);

//////////////////////////////////////////////////////////////////////
// STANDARD CONVENTION
// when returning boolean -> get function name to start with 'isXX'

function isRed(color) {
	if (color.toLowerCase() === 'red') {
		return true;
	} else {
		return false;
	}
}

//console.log(isRed('ReD'));

//////////////////////////////////////////////////////////////////////
//REFACTORING
function isRed(color) {
	if (color.toLowerCase() === 'red') {
		return true;
	}
	return false;
}

// EVEN SHORTER WAY FOR BOOLEAN FUNCTION ///
function isRed(color) {
	return color.toLowerCase() === 'purple';
}

//////////////////////////////////////////////////////////////////////
// PRACTICE1 - passwordValidator
// accepts 2 arguements: password and username
// Password must:
// - be at least 8 characters
// - cannot contain spaces
// - cannot contain the username
// If all requirements are met, return true -> otherwise false

function isValidPassword(username, password) {
	let strUsername = String(username).toLowerCase().trim();
	let strPassword = String(password).toLowerCase().trim();

	const cond1 = password.length > 8;
	const cond2 = strPassword.includes(' ');
	const cond3 = strPassword.includes(strUsername);

	result = cond1 && !cond2 && !cond3;
	console.log(result);
}

// TEST FUNCTION
// isValidPassword('89Fjj1nms', 'dogLuvr12'); // true
// isValidPassword('89Fjj1nms', 'dogLuvr'); // false - < 8 char
// isValidPassword('dogluv123', 'travel 123'); // false - blank
// isValidPassword('dogLuvr123!', 'dogLuvr'); // false - contain username

//////////////////////////////////////////////////////////////////////
// PRACTICE2 - average
// to find the average value in an array of numbers

function avg(arr) {
	let sum = 0;
	let count = arr.length;
	for (let i = 0; i < arr.length; i++) {
		sum += parseInt(arr[i]);
	}

	let average = sum / count;
	console.log(average);
}

// TEST FUNCTION
// avg([ 0, 50 ]); // 25
// avg([ 75, 76, 80, 95, 100 ]); //85.2

//////////////////////////////////////////////////////////////////////
// PRACTICE3 - pangram
// A pangram is a sentence that contains every letter of the alphabet
// i.e. "The quick brown fox jumps over the lazy dog"
// To write a function called isPangra, which checks to see if a given
// setence contains every letter of the alphabet. Make sure to ignore
// string casing

// Extremly messy function to try using methods;
function isPangram(sentence) {
	const lowerCaseSentence = String(sentence).toLowerCase();
	const strAlpha = 'abcdefghijklmnopqrstuvwxyz';
	const reAlpha = /[a-z]/;
	let arrAlpha = [];

	for (let i = 0; i < lowerCaseSentence.length; i++) {
		let letter = lowerCaseSentence[i];
		if (reAlpha.test(letter)) {
			arrAlpha.push(letter);
		}
	}
	let setAlpha = new Set(arrAlpha.sort());
	arrAlpha = Array.from(setAlpha).join('');
	const result = arrAlpha === strAlpha;
	console.log(result);
}

// REFACTOR isPangram() as below;

// TEST FUNCTION
// isPangram('The five boxing wizards jump quickly'); //true
// isPangram('The five boxing wizards jump quick'); //false

//////////////////////////////////////////////////////////////////////
// PRACTICE4 - Get Playing Card
// Write a getCard() function which returns a random playing card object, like:
// {
//		value: 'K'
//		suit: 'clubs
// }
// Pick a random value from 1,2,3,4,5,6,7,8,9,10,J,Q,K,A
// Pick a random suit from clubs, spades, hearts, diamonds

const valueArr = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ];
const suitArr = [ 'clubs', 'spades', 'hearts', 'diamonds' ];

function getCard() {
	const randValue = Math.floor(Math.random() * valueArr.length);
	const randSuit = Math.floor(Math.random() * suitArr.length);

	const card = {};
	card.value = valueArr[randValue];
	card.suit = suitArr[randSuit];

	console.log(`Your card is: ${card.suit} ${card.value}`);
}

getCard();
