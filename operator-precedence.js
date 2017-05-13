var a = 1, b = 2, c = 4;

a = b = c;

console.log(a); //4
console.log(b); //4
console.log(c); //4

// this happens because operator equals has associativity right to left. 
// executes first the right side (b=c), and after a = 4;