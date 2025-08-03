//.......Conversion Data Type........


let score = 33;
console.log(typeof (score)); 


/****** String conversion in number.******/
let score1="33";
console.log(typeof(score1)); // => String.

let somevalue = Number(score1);
console.log(typeof(somevalue)); // => number.
console.log(somevalue); // => 33.


/****** String Conversion in number.*******/
let score2 = "33erds";
console.log(typeof(score2)); // => String.

let ValueInNumber = Number(score2);
console.log(typeof (ValueInNumber)); // => number.
console.log(ValueInNumber); // => NaN.(Not a Number)


/****** null Conversion in number and String ******/
let score3 = null;
console.log(typeof(score3)); // => object.
console.log(score3); // => null.

let InNumber = Number(score3);
console.log(typeof(InNumber)); // => number.
console.log(InNumber); // => 0.

let InString = String(score3);
console.log(typeof(InString)); // => String.
console.log(InString); // => null.


/****** Boolean  Conversion in number.******/
 let socre4 = true;
console.log(typeof(socre4)); // => Booolean.
console.log(socre4); // => true.

let InNumber1 = Number(socre4);
console.log(typeof(InNumber1)); // number.
console.log(InNumber1); // => 1.


/****** String Conversion in number.*******/
let socre5 = "Abhishek";
let InNumber2 = Number(socre5);
console.log(typeof(InNumber2)); // number.
console.log(InNumber2); // NaN.(Not a Number)


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;

 
/****** 1 conversion in Boolean.******/
let isLoggedIn = 1;

let BooleanisLoggedIn = Boolean(isLoggedIn);
console.log(typeof(BooleanisLoggedIn)); // => boolean.
console.log(BooleanisLoggedIn); // => true.


/****** "" empty conversion in Boolean.******/
let isLoggedIn1 = "";

let BooleanisLoggedIn1 = Boolean(isLoggedIn1);
console.log(typeof(BooleanisLoggedIn1)); // => boolean.
console.log(BooleanisLoggedIn1); // => false.


/****** String conversion in Boolean.******/
let isLoggedIn2 = "Abhishek";

let BooleanisLoggedIn2 = Boolean(isLoggedIn2);
console.log(typeof(BooleanisLoggedIn2)); // => boolean.
console.log(BooleanisLoggedIn2); // => true. 


// 1 => true; 0 => false;
// "" => flase;
// "Abhishek" => true;  


/****** number conversion in String.******/
let someNumber = 56;

let someString = String(someNumber);
console.log(typeof(someString)); // => String.
console.log(someString); // => 56.







