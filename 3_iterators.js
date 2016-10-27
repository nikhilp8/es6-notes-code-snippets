//for any collection with iterable objects inside it, we can retrieve iterator and next() from them
//iterator is object with next() item and used to iterate over those collection one after other
//whenever i call next() we'll get the next item as an object with value and done properties
//iterator is a wonderful abstraction for the original source to hide 

//But it restricts us from some features, like we cannot know the number of items in that collection because there is no length property for iterator

//We can get iterator by using values() on array/collection

var numbers = [1,2,3,4];

let iterator = numbers.values();
let next = iterator.next();

if(!next.done) {
		sum+= next.value();
		next = iterator.next();
	};
