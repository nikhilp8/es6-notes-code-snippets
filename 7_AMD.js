/*CommonJS tends to build standards for JS outside the web browser, as for web browser the standards are set already by well 
established organisations.
JS in browser is different from JS in different environment like NodeJS or MongoDB not that the language is different but the environment
and the infrastructure is different.
Cline side developers require a pattern that uses asynchronous style and hence asynchronous module Definition API
This takes into account that we need to load scripts in a web app asynchronously & need to optimise the script loading
During development we make modules and check them as source in the main js file and also control & hide what we write in each
module. The popular implementation of AMD is provided by requireJS (It is a script loader)
*/

// employee.js
define (function (){

	var privateWork = function() {

	};

	var Employee = function() {

	};

	return Employee;

});

//The difference between this and IIFE is IIFE executes immediately and AMD executes when asked by the script loader

define(['employee'], function Employee() {	// the array specifies the dependencies required
	var e = new Employee();
})