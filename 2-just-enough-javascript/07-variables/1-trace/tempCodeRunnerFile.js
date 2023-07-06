
let a = 'y';
let b = 'x';
let temp;

/* 2. swap the values between a and b
  this is done using 3 assignments
*/

temp = a;
console.log(a, b, temp); // y, x, a
a = b;
console.log(a, b, temp); // y,x,a
b = temp;