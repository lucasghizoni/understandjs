function waitThreeSeconds(){
	var ms = 3000 + new Date().getTime();
	while (ms > new Date()){}
	console.log("finished function");
}

function clickHandler(){
	console.log('click called');
}

document.addEventListener('click', clickHandler);

waitThreeSeconds();
console.log('finished execution');

// this code will print consoles in the following order:
// finished function
// finished execution
// click called