// array has a limitation for some data types
// when using array to record fitbit data
const lucyFitBitData = [ 308727, 211.7, 5755, 2312, '5 of 7', '2:13' ];

// better to represent as an object as below (key-value pair)
// all keys are converted to 'strings' except symbols
const jasonFitBitData = {
	totalSteps: 308727,
	totalMiles: 211.7,
	avgCalorieBurn: 5755,
	workoutsThisWeek: '5 of 7',
	avgGoodSleep: '2:13'
};

// console.log(jasonFitBitData.totalMiles);

////////////// VALID KEYS ////////////////////////////
const numbers = {
	100: 'one hundred',
	16: 'sixteen',
	'76 ers': 'basketball team'
};

// console.log(numbers[100]);
// console.log(numbers['100']);
// console.log(jasonFitBitData['totalSteps']);
// console.log(numbers['76 ers']);

////////////// ADD/UPDATE PROPERTIES //////////////////
const userReviews = {};

// userReviews.queenBee49 = 4.0;
// console.log(userReviews);

// userReviews['mrSmith78'] = 3.5;
// console.log(userReviews);

// userReviews.queenBee49 += 0.5;
// console.log(userReviews);

////////////// OBJECTS : REFERENCE TYPE //////////////////
////////////// SAME AS ARRAYS -> not easy to compare /////

// const palette = {
// 	red: '#eb4d4b',
// 	yellow: '#f9ca24',
// 	blue: '#30336b'
// };

// const palette2 = palette;
// palette2.green = '#ebf876';

// console.log(palette, palette2);

let nums = [ 1, 2, 3 ];
let mystery = [ 1, 2, 3 ];

console.log(nums === mystery);

let moreNums = nums;
console.log(nums == moreNums);

const user = {
	username: 'CherryGarcia8',
	email: 'cgarcia8@gmail.com',
	notification: []
};

if (user.notification === []) console.log('No Notifications!');
// instead we need to use
// if (!user.notification.length) console.log('No Notifications!');
