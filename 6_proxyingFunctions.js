//how to intercept function calls using proxies ?

var human = {
	color: 'brown',
	legs: 4,
	mind: function(target) {
		console.log( target.name + ' cant fuck my mind');
	}
}

var alien = {
	name: 'alienBro'
}

alien.stealmind = human.mind;
alien.stealmind();(

//Now should protect this alien object from stealing a method from human, so should wrap a proxy around that function. Since in JS
//function are objects, have to wrap around that function object.

human.mind = new Proxy(human, {
	apply: function(target, context, args) {	// should use the apply function here with 3 parameters
		if(context!== human){
			console.log('fuck of aliensss');
		}else {
			return target.apply(context,args);
		}
	}
});

console.log(alien.mind);
console.log(human.mind);