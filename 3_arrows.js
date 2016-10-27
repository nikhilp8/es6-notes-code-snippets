//No need to write return statement
//Check out the syntax, very easy. Unless the body of the function have more than one line we need not add curly braces

let add = (x,y) => x+y;

console.log(add(3,5));

let square = x => x*x;

console.log(square(5));

var numbers = [1,2,3,4];

var double = numbers.map(n => n*2);
console.log(double);

var sum = 0;
numbers.forEach(n => sum+=n);
console.log(sum); 

