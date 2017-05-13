function b(){
	console.log(myVar); // will print 1, because of the reference to the outer environment, 
						// where the functixon b is lexically located, that is the global context.
}

function a(){
	var myVar = 2;
	b();
}

var myVar = 1;

console.log(myVar);
a();

//////////////////////////////////////

function a(){
	function b(){
		console.log(myVar); // will print one, because its declared in the global context, and a is lexically in the global context.
	}
	b();
}

var myVar = 1;
a();