// similar to the rest parameters

var work = function(x,y,z) {
	return x+y+z;
}

console.log(work(...[1,2,3]));	// spreads the array as parameters

var a = [111,222,333];
var b = [1,2,3,...a,4,5];

console.log(b);	// also used to embed