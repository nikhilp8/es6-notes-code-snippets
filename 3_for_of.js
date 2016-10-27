//In for of we'll see the values of the iterables and not worry about the index and properties

let numbers = [1,2,3,4];


for(let i of numbers){
	console.log(i)
};

let sum = 0;

for(let n of numbers){
	sum+= n;
}
console.log(sum);


