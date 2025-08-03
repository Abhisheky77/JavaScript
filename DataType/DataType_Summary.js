/****** 👇Primitive Data Type 👇 ******/

// 7 Types : String, number, boolean , null, undefined, Symbol, BigInt.

const score = 100;
console.log(typeof(score));// => number.

const scorevalue = 100.12;
console.log(typeof(scorevalue)); // => number.

const   isLoggedIn = false;
console.log(typeof(isLoggedIn)); // => boolean.

const outsideTemp = null;
console.log(typeof(outsideTemp)); // => object.

let userEmail;
console.log(typeof(userEmail)); // => undefined.

/*** == is called the loose equality operator.
It compares two values, but does not care about their data types. 
👉 Even though one is a number and the other is a string, JavaScript converts the '5' to a number before comparing, so it's true.
 👇👇***/
const id = Symbol('123');
console.log(typeof(id)); // => symbol.


/*** === is called the strict equality operator.
It compares both value and data type. 
👉 Here, 5 is a number, '5' is a string, so the types are different — result is false.
👇👇 ***/
const anotherid = Symbol('123')
console.log(typeof(anotherid)); // => symbol.

console.log(id == anotherid); // => false.
console.log(id === anotherid); // => false.


const bigNumber = 234567890187654321n;
console.log(typeof(bigNumber)); // => bigint.




/****** 👇Reference (Non Primitive Data Type)👇 ******/

// Array, object, Functions.


// Array.
const name = ["Abhishek","Amit","Harsh","Chirag","Bhavesh"];
console.log(typeof(name)); // => object


// object.
let myobj = {
    id : 101,
    studentName : "Abhishek yadav",
    age : 20,
}
console.log(typeof (myobj)); // => object.


// function.
const myfunction = function(){
    console.log("Hello World");
}
console.log(typeof(myfunction)); // => function


