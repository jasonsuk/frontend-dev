new Array();
[];

let colors = [ 'red', 'orange', 'yellow', 'green', 'blue' ];
console.log(colors.length);
console.log(colors[2]);
console.log(colors[-1]); // invalid
console.log(colors[colors.length - 1]);

// =============================================
// arrays are mutable
// =============================================
// let shoppingList = [ 'cheese', 'skim milk' ];
// shoppingList[1] = 'almond milk';
// console.log(shoppingList);

// adding new items - instead of below method
// shoppingList[shoppingList.length] = 'apples';
// console.log(shoppingList);

// =============================================
// array methods : push, pop, shift, unshift
// =============================================

// shoppingList.push('tomatoes'); // add to end of arrays
// console.log(shoppingList);
// console.log(shoppingList.pop()); // delete and RETURN last one in arrays

// let dishesToDo = [ 'big platter' ]; // add to start of arrays
// dishesToDo.unshift('large plate');
// dishesToDo.unshift('small plate');
// dishesToDo.unshift('cereal bowl');
// dishesToDo.unshift('mug');
// dishesToDo.unshift('dirty spoon');
// console.log(dishesToDo);

// dishesToDo.shift();
// console.log(dishesToDo);

// =============================================
// more methods: concat, includes, indexOf
// ,join, reverse, slice, splice, sort
// =============================================

// let fruits = [ 'apple', 'banana' ];
// let veggies = [ 'asparagus', 'brussel sprouts' ];
// let meats = [ 'steak', 'chicken breast' ];

// let lunch = fruits.concat(veggies, meats);
// console.log(lunch);

// =============================================
// looking for values - includes, indexOf
// =============================================
// console.log(lunch.includes('salmon'));
// console.log(lunch.includes('asparagus', 3));

// if (lunch.includes('steak')) {
// 	console.log('I cannot eat cow meats');
// }

// console.log(lunch.indexOf('brussel sprouts'));
// console.log(lunch.indexOf('fish')); // -1 when not in array
// =============================================

// =============================================
// let letters = [ 'T', 'C', 'E', 'P', 'S', 'E', 'R' ];
// letters.reverse();
// console.log(letters.join(''));
// =============================================

// =============================================
// slicing
// =============================================
let animals = [ 'shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise' ];
// let swimmers = animals.slice(0, 3);
// console.log(swimmers);
// let mammals = animals.slice(2, 4);
// let reptiles = animals.slice(4);
// let quadruped = animals.slice(-3, -1);
// console.log(mammals, reptiles, quadruped);

// =============================================
// add / delete multiple items
// <- push, pop, unshift, shift (single items)
// =============================================
// animals.splice(1, 0, 'octopus'); //insert without deletion
// console.log(animals);

// animals.splice(3, 2);
// console.log(animals); //delete 2 from index 3

// animals.splice(3, 0, 'tiger', 'lion');
// console.log(animals);
// =============================================

// =============================================
// sort - it is NOT numeric sort at all!!
// =============================================
// console.log(animals.sort());
// let nums = [ 34, 10, 10000, 67, 99 ];
// console.log(nums.sort()); // surprise!
