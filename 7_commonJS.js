//common JS relies on exports and imports

var privateDoWork = function(name) {	// private implementation
		return name+ ' yeah!!..doing work'
	};

var Employee = function(name) {
		this.name = name
	};

Employee.prototype = {
		doWork: function() {
			return privateDoWork(this.name);
		}
	};

exports.Employee = Employee;	// exporting this function from the module

//Have to import it in another file to get this function.

var Employee = require('/Employee').Employee;
var e1 = new Employee('nik');

console.log(e1.doWork());