var name = 'nik';
var role = 'dev';

var person = {
	name: name,
	role: role
};

console.log(person);

In ES6 we can remove the duplicates for object properties. As in the above case we can write

var person = {
	name,
	role
}

Simillarly for method properties new changes are added to ES6

var human = {
	speak: function() {
		console.log('hahaha');
	}
};

The same can be represented in this way

var human = {
	speak(){
		console.log('ahahha');
	}
}

console.log(human.speak());