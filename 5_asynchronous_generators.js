//consider this case

function pause(delay){
	setTimeout(function() {
		console.log('paused for '+ delay);
	},delay);
};

console.log('start');
pause(500);

console.log('middle');
pause(500);

console.log('end');

//This doesn't perform as expected because pause() is asynchronous function, so all the messages gets displayed at the end.To 
//get as we expected need to make this change.

function pause(delay, cb){
	setTimeout(function() {
		console.log('paused for '+ delay);
	},delay);

	cb();
};

console.log('start');
pause(500, function(){
	console.log('middle');
	pause(500, function(){
		console.log('end');
	});
});

//Or we can use generator for this operation, as generator gives yield out of many. By calling it again it resumes its operation 
//by yielding another one. So...

function* main(){
	console.log('start');
	yield pause(500);
	console.log('middle');
	yield pause(500);
	console.log('end');
};

//I need to call this generator function and the next() on the generator function

var seq = main();
seq.next();

