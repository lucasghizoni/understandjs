function Person(firstName, lastName) {
	this.firstName;
	this.lastName;
}

// if you want to add a function to an Object created by a function, add on prototype. 
// when you create on prototype, it will exist just this pointer on memory, for all objs created. 
// if you create inside the func, like the attribs, it will consume for every object created, the same function 
Person.prototype.getFullName = function(){
	return this.firstName + this.lastName;
};


var lucas = new Person('Lucas', 'Ghizoni');
lucas.getFullName();