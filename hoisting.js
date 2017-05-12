b(); // this will print correctly
console.log(myVar); // this will print undefined

var myVar = 'Hello!';

function(){
	console.log('function b called');
}

// vars are set in memory to undefined and functions are stored in memory too, in the creation phase. Thats why the code above runs as explained.