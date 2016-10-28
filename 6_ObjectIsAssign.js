Object.is();	//similar to '===' with few extra features i.extra

console.log(-0===0);	// true
Object.is(-0,0);		// false

console.log(NaN===NaN);	// false
Object.is(NaN,NaN);		// true

Object.assign(target,mixin);	// place mixin(properties) from source object to target object

var shark = {
	bite: function(target) {
		target.hurt = true;
	}
};

var person = {};

var laser = {
	pewpew: function(target) {
		target.hurt = true;
	}
}

Object.assign(shark,laser);
shark.pewpew(person);
console.log(person.hurt);