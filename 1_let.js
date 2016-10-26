// let is used over 'var' to attain block scope.

var something = function() {
	if(true){
		let x = 3;	// if used var returns the value 3
	}
	return x;
};

console.log(something());	// gets a Reference error in this case