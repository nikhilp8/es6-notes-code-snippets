class Employee {
	constructor(name) {
		this._name = name;
	} 
};

class Person extends Employee {
	work() {
		return `${this._name} is currently working`;
	}
};

var p1 = new Person('nik');
console.log(p1.work());