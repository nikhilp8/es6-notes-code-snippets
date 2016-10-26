// in previous versions of JS used prototypes for class i.e

var Employee = function() {

};

Employee.prototype = {
	doWork: function() {
		return 'complete' ;
	}
}

var emp1 = new Employee();

console.log(emp1.doWork());

// Now we can use

class EmployeeNew {
	work() {							// just the function definition							
		return 'complete in new Class' ;
	}

	getName() {			// no commas or semicolons required
		return "nik";
	}
};

var empNew1 = new EmployeeNew();

console.log(empNew1.work());
console.log(empNew1.getName());
console.log(EmployeeNew.prototype.work().call(empNew1));
