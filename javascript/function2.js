//////////////////////////////////////////////////////////////////////// FUNCTION EXPRESSIONS -> another syntax
// i.e. function stored in a variable <- as functions are objects!

function square(num) {
	return num ** 2;
}

// passed to a variable -> acts differently (i.e hoisting)
const square2 = function(num) {
	return num ** 2;
};

// named function -> works! but multiply(3,5) is invalid
const product = function multiply(x, y) {
	return x * y;
};

//////////////////////////////////////////////////////////////////////
// HIGHER ORDER FUNCTION AS FUNCTIONS ARE OBJECTS (= VALUES)!

function add(x, y) {
	return x + y;
}

function substract(x, y) {
	return x - y;
}

const multiply = function(x, y) {
	return x * y;
};

const divide = function(x, y) {
	return x / y;
};

// May not be useful but the below can run...!
const operations = [ add, substract, multiply, divide ];
// console.log(operations[0](100, 4));

for (let func of operations) {
	let result = func(30, 5); // can also be assigned to a variable
	// console.log(result);
}

const thing = {
	doSomething: multiply // without ( ), there is no execution
};

let action = thing.doSomething(50, 2); // We can make a method!
// console.log(action);

//////////////////////////////////////////////////////////////////////
// HIGHER ORDER FUNCTION
// , which means functions that operate on/with other functions by
// accepting other functions as arguments or returning a function

// 1. functions as arguments
function callMultipleTimes(func, n) {
	for (let i = 0; i < n; i++) {
		func();
	}
}

function laugh() {
	console.log("LOL, that's so funny!!");
}

// callMultipleTimes(laugh, 2);

//////////////////////////////////////////////////////////////////////
// 2. functions as return values -> recall LEXICAL SCOPE concept

function multiplyBy(num) {
	return function(x) {
		return x * num;
	};
}

const triple = multiplyBy(3); // so variable becomes another function
triple(5); //15

const double = multiplyBy(2);
double(8); // 16

const halve = multiplyBy(0.5);
halve(4); // 2;

// another example
// const isChild = isBetweenRange(0, 18);
// isChild(5); // true

function isBetweenRange(min, max) {
	return function(num) {
		const moreThanMin = num >= min;
		const lessThanMax = num <= max;
		return moreThanMin && lessThanMax;
	};
}

const isChild = isBetweenRange(0, 18);
const isNiceWeather = isBetweenRange(12, 25);
console.log(isNiceWeather(18));
