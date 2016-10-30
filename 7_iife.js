(function(target) {
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

	target.Employee = Employee;	// making Employee function available to public
}(window));

/*This is an IIFE, it executes as soon as the run time reaches the bottom of the declaration as it is enclosed within the paranthesis.
No global variables.
Everything inside is scoped to the function.
Easy to have private implementation

So by placing Everything inside the function (module), we're making it available as Everything or nothing
*/