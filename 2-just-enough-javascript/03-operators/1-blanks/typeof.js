// #todo

'use strict';

// your answers must use typeof, but can use any values
console.log('-- write 2 values with the type "boolean" --');
console.log(typeof true); // 'boolean'
console.log(typeof false); // 'boolean'

console.log('-- write 1 value with the type "object" --');
console.log(typeof null); // 'object'
console.log(typeof {}); // object

console.log('-- write 5 values with the type "string" --');
// examples
console.log(typeof 'hello'); // 'string'
console.log(typeof 'hoi'); // 'string'
// exercises
console.log(typeof 'emran'); // 'string'
console.log(typeof 'computer'); // 'string'
console.log(typeof 'pen' ); // 'string'
console.log(typeof 'pop'); // 'string'
console.log(typeof 'check'); // 'string'

console.log('-- write 5 values with the type "number" --');
// examples
console.log(typeof 0); // 'number'
console.log(typeof 18.5); // 'number'
// exercises
console.log(typeof 1); // 'number'
console.log(typeof 2); // 'number'
console.log(typeof 3); // 'number'
console.log(typeof 4); // 'number'
console.log(typeof 5); // 'number'

// to create objects in js 

var obj = {
key1 : value1,
key2 : value2
};

// another way to do that is 

var person = {
  name : 'emran',
  age : 20,
  city : 'antwerp'
};

// another way to create objects
//using constructor function

 function person(name, age) {
  this.name = name;
  this.age = age;
}

function printType() {
  let number = 1; 
  console.log(typeof number)
} 
