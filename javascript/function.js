// DICE ROLL (1-6) FUNCTION //////////////////////////
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

// ARGUMENTS in FUNCTION -> return different outputs ///
function rollMultiDice(numRolls) {
	for (let i = 0; i < numRolls; i++) {
		let roll = Math.floor(Math.random() * 6 + 1);
		console.log(roll);
	}
}

//rollMultiDice(6);

// MULTIPLE ARGUMENTS in FUNCTION ////////////////////
function rollDiceFlex(min, max, numRolls) {
	let minNum = Math.floor(min); // just to show Math.floor
	let maxNum = Math.ceil(max);
	for (let i = 0; i < numRolls; i++) {
		let roll = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
		console.log(roll);
	}
}

// rollDiceFlex(4, 10, 5);

// return result vs console.log(result) //////////////
// use return to catch result in a variable
// return ends a function -> anything written after return never runs

function add(x, y) {
	return x + y;
}

let total = add(4, 5);
console.log(total);

// STANDARD CONVENTION ////////////////////////////
// when returning boolean -> get function name to start with 'isXX'

function isRed(color) {
	if (color.toLowerCase() === 'red') {
		return true;
	} else {
		return false;
	}
}

console.log(isRed('ReD'));

// REFACTORING ////////////////////////////
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
