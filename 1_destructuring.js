// assigning values for a DS like array or object parameters

let x = 3;
let y = 2;

[x,y] = [y,x];

console.log(x);	//2
console.log(y); //3

var something = function() {
	return [1,2,3];
}

let [m,n] = something();
let [,o,p,q] = something();

console.log(m);	//1
console.log(n);	//2
console.log(o);	//2
console.log(p);	//3
console.log(q);	//undefined

// simillarly for object properties also

let do_work = function(url,{data,config}) {
	return data;
}
let work = do_work('url',{data:'test',config:false});
console.log(work());