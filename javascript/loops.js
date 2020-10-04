//////////////// FOR LOOP //////////////////////
// for ( initial expression; condition; increment expression ) {}

for (let i = 0; i < 10; i += 3) {
	console.log('Hello!');
}

// for (let num = 1; num <= 20; num++) {
// 	console.log(`${num} x ${num} = ${num * num}`);
// }

//////////////// be aware of inifinite loop //////
//////////////// DON'T RUN THE BELOW CODES! //////
// for (let i = 0; i < 10; i + 3) {
// 	console.log('Hello!');
// }

// for (let i = 50; i >= 10; i += 3) {
// 	console.log('Hello!');
// }

//////////////// for loops + arrays/objects ///////
const animals = [ 'lions', 'tigers', 'bears' ];
for (let i = 0; i < animals.length; i++) {
	console.log(i, animals[i]);
}

const userInfo = [
	{
		firstname: 'Jason',
		rating: 89
	},
	{
		firstname: 'John',
		rating: 87
	},
	{
		firstname: 'sarah',
		rating: 92
	}
];

for (let i = 0; i < userInfo.length; i++) {
	console.log(userInfo[i].rating);
	ß;
}

for (let i = 0; i < userInfo.length; i++) {
	let user = userInfo[i];
	console.log(`${user.rating} scored`);
}
