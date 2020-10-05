//////////////////////////////////////////////////////////////////////// CALLBACK FUNCTIONS
// a function passed into another function as an argument
// , which is then invoked inside the outer function

function callMultipleTimes(func, num) {
	for (let i = 0; i < num; i++) {
		func();
	}
}

function laugh() {
	console.log('LOL..that is so funny!');
}

//callMultipleTimes(laugh, 2); // this also is a callback function!

//////////////////////////////////////////////////////////////////////
// SYNTAX

// setTimeout(function() {
// 	console.log('I am called back!');
// }, 3000);

// const btn = document.querySelector('#btn1');
// btn.addEventListener('click', function() {
//     alert("Btn1 clicked!");
// })

//////////////////////////////////////////////////////////////////////// HOISTING

// console.log(animal); // undefined, instead of array; -> hoisted
// var animal = 'Tapir';

// console.log(fruit); // ReferenceError: Cannot access 'fruit' before initialization
// let fruit = 'watermelon'; // let, const not hoisted

howl(); // functions are hoisted

function howl() {
	console.log('AWOOOOOO!!');
}

hoot(); // function expression are not hoisted
let hoot = function() {
	console.log('HOOO HOOO');
};
