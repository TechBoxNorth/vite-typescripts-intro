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


// ------------------ objects ---------------

// typing objects is a bit more complex, but if we create an object typscript will type it for us:
const car = {
  color: 'green', // string attribute
  price: 30000, // number attribute
  electric: true // boolean attribute
}

// car.owner = 'Bengt'; attributes cannot be added to an already existing object.
// to get around this we use something called interfaces:

// -------- interface -------------
// interfaces are used to determine what we can AND have to put inside an object.
// interface naming convention: INameOfInterface

interface ICar {
  color: string,
  make: string,
  model: string,
  year: number,
  manual?: boolean // the '?' in the name of this attribute makes it optional
}

const anotherCar:ICar = {
  color: 'green',
  make: 'volvo',
  model: 'ex30',
  year: 2024,
  manual: false
}

const optionalCar:ICar = {
  color: 'blue',
  make: 'opel',
  model: 'trasig',
  year: 1974
  // attribute 'manual' is optional and thus not required
}


// ------------------- functions -------------------

// if a function isn't meant to return somthing convention is to use the key word 'void'
// in the declaration.
function greeting():void {      
  console.log('hello there!');
}

greeting();

// this function returns a string value
function sayMyName():string {
  return 'My name is Knut-Elsa';
}
const myName:string = sayMyName();

console.log(myName);

// this function returns an array with numbers
function numbersInAnArray():number[] {
  return [0,1,2,3,4,5,6,7,8,9];
}

console.log(numbersInAnArray());

// function with typed arguments and has the return type of number
function addNumbers(num1:number, num2:number):number {
  return num1 + num2;
}

console.log(addNumbers(50, -120));