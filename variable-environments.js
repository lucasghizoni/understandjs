function b(){
	var myVar;
	console.log(myVar); //undefined
}

function a(){
	var myVar = 2;
	console.log(myVar); // 2
}

var myVar = 1;
console.log(myVar); // 1
a();
console.log(myVar); // 1, bacause we're back to the global context.