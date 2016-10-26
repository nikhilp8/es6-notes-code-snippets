class Person {
	constructor(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}
};

class Employee extends Person {
	constructor(name,title) {
		super(name);
		this._title = title;
	}

	get title() {
		return this._title;
	}
};

var e1 = new Employee('nik','developer');
console.log(e1.name);
console.log(e1.title);