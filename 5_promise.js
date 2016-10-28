/*caller calls callback after certain process. This is asynchronous programming. However drawback is only the caller gets informed when the
when the process is done. No other interested parties will be known unless the callback lets them know.
Also error handling is difficult to manage & dealing with several asynchronous process is difficult.

As number of process increase the callback's get into callstack and the exceptions they throw aren't caught by original request

So promises are the solution for this callback hell

Promise is an object that promises to return the result when the process is done. Whether success or failure
*/
var promise = new Promise(function(resolve,reject){
	// resolve & reject are functions themselves
	resolve();
	// or reject();
});

promise.then(success, failure); // both success and failure are function themselves

promise.catch(failure(){
	// catch is evaluated when the promise is rejected
})

//We can also perform an operation after receiving multiple promises by using Promise.all()

var courseId = [];
var promises = [];

for(let i = 0; i < courseId.length(); i++) {
	Promise.resolve(getCourse(courseId[i]));
}

Promise.all(promises). then(function(values){
	console.log(values.length())
})

//Promise.trace() is used when one of the promises is resolved or rejected