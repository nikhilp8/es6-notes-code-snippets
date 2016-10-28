//used to intercept operations performed on objects i.e change its properties (like getters / setters)

//It doesn't modify the original object but the wrapper object(proxy) around the original object. So have to  call the proxy object
//to make these changes.

var human = {
	color: 'brown',
	legs: 4,
	hair: 'black'
}

var proxyObject = new Proxy(human, {
	get: function(target, property) {		// (target, property_name)
		if(property === 'brown'){
			return 'awesome '+ target[property];
			}
		else{
			return target[property];
	}}
});	// (target,object)

console.log(proxyObject.color);

// simillarly the set property

var proxyObject = new Proxy(target, {
	set: function(target, property, value) {
		if (property === 'color') {
			console.log('cannot change the color');
		}else{
			target[property] = value;
		}
	}
});

proxyObject.color = 'white';
proxyObject.legs = 6;
console.log(proxyObject.color);
console.log(proxyObject.legs);