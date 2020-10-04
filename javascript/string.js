// String Operator

const str1 = 'JavaScript Data Types';
// console.log(str1.toUpperCase());
// console.log(str1.toLowerCase());

// to capitalize the first letter
const toCaptialize = (str) => {
	const cap = str.charAt(0).toUpperCase() + str.slice(1);
	console.log(cap);
};

toCaptialize(str1);

// Extra conditionals - switch

let weekday = '';
let day = 5;

switch (day) {
	case 1:
		weekday = 'Monday';
		break;
	case 2:
		weekday = 'Tuesday';
		break;
	case 3:
		weekday = 'Wednesday';
		break;
	case 4:
		weekday = 'Thursday';
		break;
	case 5:
		weekday = 'Friday';
		break;
	case 6:
		weekday = 'Saturday';
		break;
	case 7:
		weekday = 'Sunday';
		break;
	default:
		weekday = 'Invalid Day';
}

console.log(weekday);

// Extra conditionals - ternary operators

let status = 'offline';

let color = status === 'oneline' ? 'Red' : 'Green';
console.log(color);
