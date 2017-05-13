function a(){

}

function b(){
	a();
}
	
b();

// the execution stack will be like this:
//  first the global execution will be executed, and then will be created another execution context, 
//  in the context of function b, and finally the execution context of function a 