function a(){
	return 
	{
		number: 1
	}
}

console.log(a()); // this will print undefined, because the engine when sees the "return", will not look for the next line.

function b(){
	return {
		number: 1
	}
}

console.log(b()); // this will now return the object created.
