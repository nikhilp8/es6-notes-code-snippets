Can use callback for asynchronous activity i.e wait for a network activity or wait for an event
One problem with callback is maintaining 'this'. 'this' depends on how a context of a particular function is invoked
Usually it is object through which the function is called
For callback it can refer to the global scope 

this.name = 'nik';
console.log(this.name);

setTimeout = (function() {
	console.log(this.name);
},15);

// Now use this approach

var self = this;
self.name = 'nik';
console.log(self.name);

setTimeout = (function() {		// the anonymous function will form a closure around self
	console.log(self.name);
},15);

// Now we can use 'this' in callback function in arrow format
//arrow functions will identify 'this' wrt to context they are inside

setTimeout = (() =>	{	// the anonymous function will form a closure around self
	console.log(self.name);
},15);