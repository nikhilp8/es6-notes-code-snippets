A generator function generates an iterator 
Requires yield keyword and special function syntax
the iterator object will go through each item by calling next

let numbers = function*() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
};

let iterator = numbers();
let next = iterator.next();

let sum = 0;

while(!next.done) {
	sum += next.value;
	next = iterator.next();
};
console.log(sum);