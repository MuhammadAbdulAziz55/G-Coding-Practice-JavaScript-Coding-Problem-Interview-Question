var a = 7;
var b = 5;
// console.log('Before swap: a=', a, 'b=', b);
var temp = a;
a = b;
b = temp;
// console.log('After swap: a=', a, 'b=', b); 


// process two
var x = 5;
var y = 7
x = x + y ;
y = x - y;
x = x - y;
// console.log('After swap: x=', x, 'y=',y)

// ex
var P = 5;
var Q = 10;
[P, Q] = [Q, P];
console.log('After swap: P=',P, 'Q=',Q)
