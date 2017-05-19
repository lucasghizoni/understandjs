a = 2;
b;
b = a; //this will copy the value of a to a new space in memory do b. it happens just with primitive types, like number.


var obj = {test: "teste"};

b = obj; //this will point just the reference of b to obj. It doesnt create a new space in memory. it just happens with objects (functions are included).
