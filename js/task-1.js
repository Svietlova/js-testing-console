'use strict';

// function makeTransaction(quantity, pricePerDroid) {
//     const totalPrice = quantity * pricePerDroid;
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`
// };

// function makeTransaction(quantity, pricePerDroid) {
//     return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
// };

// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

const names = ['bob', ...['donald'], 'suzy', 'lacy', ...['richard', 'alex']];
console.log(names);

const client = {
	firstName: "Anna",
	lastName: "Mercer"
}

const name = client["firstName"]
console.log(name);

const fruit = {
	name: "apple",
	price: 10,
	inStock: true
};

const {price = 20} = fruit;
console.log(fruit);


