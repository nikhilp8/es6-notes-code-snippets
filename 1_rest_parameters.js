let sum = function() {
	let result = 0;
	for(let i=0;i<arguments.length;i++){
		result+= arguments[i];
	}
	return result;
};

let cal = sum(1,2,4);	// considers the input as an array of arguments
console.log(cal);

// or we can use this

let sum = function(name,...numbers) {	// this is the syntax for rest parameters
	let result = 0;
	for(let i=0;i<numbers;i++){		// can use numbers.forEach() also
		result+= numbers[i];
	}
	return result;
};

let cal = sum("nik",1,2,4);
console.log(cal);