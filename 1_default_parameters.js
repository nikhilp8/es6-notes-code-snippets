var something = function(name) {
	var name = name || 'nik';
	return name;
}

console.log(something()); 	// previously was using this to set constant argument

let something_more = function(uName="nikhil") {
	return uName;
}

console.log(something_more());
console.log(something_more(""));
console.log(something_more(undefined));
console.log(something_more(null));

// null and undefined is different, though both give a value of false, for null in this case we are explicitly mentioning that we're not passing any value.