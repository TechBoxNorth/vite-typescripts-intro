// ------------ variables ---------------
let age:number;
// age = 'nisse'; will not work because 'nisse' is a string and NOT a number.
age = 52;

let firstName:string;
firstName = 'Anders';

// --------------- arrays --------------
// declaring an array with the type:
let numbers:number[]; // array of numbers
let members:string[]; // array of strings

let figures: readonly number[] = [0,1,2,3,4,5,6,7,8,9];
// figures.push(11); keyword 'readonly' prevents the array from being altered
console.log(figures);

// a union typed array can hold different types if declared as follows: (union variables can be declared in the same way)
let ids:(number | string | boolean)[] = [];
ids.push(36);
ids.push('nisse');
ids.push(false);
console.log(ids);
