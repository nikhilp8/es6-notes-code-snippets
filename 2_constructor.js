// we place initialisation logic in constructor function
// It is automatically invoked when you use 'new'
//can use this reference inside it which obviously refers to the new object created
// syntax looks better than before

class Employee {

	constructor(name) {
		this._name = name;
	}

	getName() {
		return this._name;
	}
};

var e1 = new Employee('nik');
console.log(e1.getName());