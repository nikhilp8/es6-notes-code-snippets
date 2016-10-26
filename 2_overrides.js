class Person {					// here it extends Object by default
	constructor(name) {			// it contains methods like toString()
		this._name = name;
	}

	doWork(){
		return 'works free';
	}
};

class Employee extends Person {	

	doWork() {
		
		return super.doWork()+'should be paid';
	}
};

var e1 = new Employee('nik');
console.log(e1.doWork());
