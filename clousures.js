function funcBuilder(){
	var arr = [];

	for(var i = 0; i < 3; i++){
		arr.push(function(){
			console.log(i);
		});
	}
	return arr;
}

var myArr = funcBuilder();

myArr[0](); // will print 3
myArr[1](); // will print 3
myArr[2](); // will print 3

// because the functions are executed later, when the reference of i is 3, in the value of its parent context, the funcBuilder.


function funcBuilder2(){
	var arr = [];

	for(var i = 0; i < 3; i++){
		arr.push(
			(function(j){
				return function(){
					console.log(j);
				}
			}(i))
		);
	}
	return arr;
}

var myArr = funcBuilder2();

myArr[0](); // will print 3
myArr[1](); // will print 3
myArr[2](); // will print 3


// another example of a factory function that uses closure.

function makeGreeting(language){
	return function(name){

		if(language === 'en'){
			console.log("Hello " + name);
		}
		if(language === 'es'){
			console.log("Hola " + name);
		}
	}
}

var spanish = makeGreeting('es');

spanish('lucas');