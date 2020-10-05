//////////////////////////////////////////////////////////////////////
// SCOPE

//////////////////////////////////////////////////////////////////////
// FUNCTION SCOPE
// variable is scoped to the function

const bird = 'mandarin duck';

function birdWatch() {
	const bird = 'golden pheasant';
	console.log(bird);
}

// birdWatch();
// console.log(bird);

//////////////////////////////////////////////////////////////////////
// BLOCK SCOPE
// variables are scoped to the block
// let vs var->ignores block scope

// let animals = [ 'grizzly bear', 'panda bear', 'spectacled bear' ];
// var i = 10;
// for (var i = 0; i < animals.length; i++) {
// 	console.log(i, animals[i]);
// }
// console.log(i); // no block scope applied

// i = 10;
// for (let i = 0; i < animals.length; i++) {
// 	console.log(i, animals[i]);
// }
// console.log(i); // block scope applied

function double(arr) {
	const result = [];
	// let double = 0;
	for (let num of arr) {
		let double = num * 2;
		result.push(double);
	}
	console.log(double); // doesnt' show with let (var -> ok but hmmm...)
	return result;
}

// double([ 1, 2, 3 ]);

//////////////////////////////////////////////////////////////////////
// LEXICAL SCOPE
// variables delcared in outer function can be used in functions inside
// i.e. nested function

function outer() {
	let movie = 'Amadeus';

	function inner() {
		// let movie = 'The Shining';
		// let x = 10;
		console.log(movie.toUpperCase());
	}
	// console.log(x);
	inner();
}

outer();
