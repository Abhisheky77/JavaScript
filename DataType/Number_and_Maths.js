// Number DataType and maths

const score =100;
console.log(score); // => 100.

//  This method is only store number data type.
const balance = new Number(100);
console.log(balance);// => [Number: 100].


const str = new Number("Abhishek");
console.log(str);// => [Number: NaN].


console.log(balance.toString());// => 1000.
console.log(typeof(balance));// => object.

const num = 100;
console.log(num.toFixed(3));// => 100.00

const othernumber = 23.890
console.log(othernumber.toPrecision(3));// => 23.9 
  
const othernumber1 = 123.890
console.log(othernumber1.toPrecision(3));// => 124
console.log(othernumber1.toPrecision(4)); // => 123.9

const othernumber2 = 1123.890
console.log(othernumber2.toPrecision(3));// => 1.12e+3

const num1 = 10000000;
console.log(num1.toLocaleString('en-IN'));// => 1,00,00,000.

        /* ++++++++++++++++++++++++++  Maths  +++++++++++++++++++++++++++ */

        console.log(Math);

/****** Math.abs() ek built-in JavaScript method hai jo kisi bhi number ka absolute value return karta hai.
📌 Absolute value ka matlab hota hai:
Number ka positive version
Sign-less value
0 se kitna distance hai number line pe ******/
        console.log(Math.abs(-4));// => 4.
  
        
/******🔹 Math.round() ek calculator jaisa tool hai
jo decimal number ko gol (round) number banata hai.
Example:
Math.round(3.6) → 4 ban jaayega ✅
Math.round(3.4) → 3 ban jaayega ✅ ******/
 console.log(Math.round(5.6));// => 6.

/****** Math.ceil() ek method hai jo decimal number ko upar round karta hai
📈 Hamesha sabse badi poori value return karta hai
(chahe decimal kitna bhi chhota ho)
eAMPLE : Math.ceil(3.4)	= 4 ******/
console.log(Math.ceil(8.9));// => 9.


//Math.floor() JavaScript ka method hai jo decimal number ko neeche round karta hai
//📉 Hamesha sabse chhoti poori value deta hai (floor = zameen = neeche)
// Example: 	Math.floor(3.7) =	3
console.log(Math.floor(7.8));// =>  7.

// MAX VALUE sub se  BADA NUMBER.
console.log(Math.max(2,5,3,7,9,40,1)); // => 40.

//Min value sub se samller number.
console.log(Math.min(3,2,1,57,8,65,9,0));// => 0

/****** Math.random() ek JavaScript method hai jo random (kisi bhi) number generate karta hai
Between 0 and 1 (but never 1).******/
 console.log(Math.random());
 
//Use Case: Random Number Between 0 and 100
let randomNumber = Math.random() * 100;
console.log(randomNumber);

//Round karke whole number:
 let randomWhole = Math.floor(Math.random() * 100);
console.log(randomWhole);
