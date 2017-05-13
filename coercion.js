var a = 1 + '2';
console.log(a); // will print 12. the engine coerce the number into string when summs with another string.

console.log(2 == "2"); // will print true because of coercion. 
console.log(2 === "2"); // will print false because the engine doesnt try to coerce, when its triple equals.