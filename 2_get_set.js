//getters and setters are used with get and set keywords

class Employee {
	constructor(name) {
		this._name = name;
	}

	get name () {
		return this._name;
	}

	set name(newName) {
		this._name = newName;

	}
};

var e1 = new Employee('nik');
console.log(e1.name);			
e1.name = 'pon';
console.log(e1.name);
