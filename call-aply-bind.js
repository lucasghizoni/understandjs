var person = {
	age: 12,
	printFullName: function(firstName, lastName){
		console.log("First name: ", firstName);
		console.log("Last name: ", lastName);
		console.log("age ", this.age);
	}
};

var person2 = {
	age: 11
};

var person2Binded = person.printFullName.bind(person2);
person2Binded('lucas', 'ghizoni'); //this will print the age of person2, because the this becomes the person2 object.

var person2BindedWithFirstName = person.printFullName.bind(person2, 'lucas'); // you can pass parameters to function bind, 
//and the parameters will be fixed in function:
person2BindedWithFirstName('ghizoni');

person.printFullName.apply(person2, "lucas", 'ghizoni'); // this will execute the function in the context this of person2
person.printFullName.call(person2, ["lucas", 'ghizoni']); //call is very similar to apply, but you need to pass arguments as an Array.




