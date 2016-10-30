//conceptually ES6 modules are similar to commonJS and AMD.
//We can select the modules we want to export and import

export class Employee {	// need not place it inside a function or an IIFE
	constructor(name) {
		this._name = name;
	}

	get name() {
		return this._name;
	}

	doWork() {
		return `${this._name} is working`;
	}
};

// & in a different JS file, we can import the module specified as a file path without .js extension

import {Employee} from './es6/employee';	// for multiple imports just add them by seperating with commas
// if there are lot of things to import from a particualr module which has many exports, we can use this module syntax
// module m from '.es6/employee' ;
// console.log (m.doWork());/

var e = new Employee('nik');
e.doWork();