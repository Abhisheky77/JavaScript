//++++++++++++++++++ 👇 Operators 👇++++++++++++++++++++++

// Operators are : Arithmetic , comparison , assignment , logical ,unary , ternary 
 

//*************** 👇 Arithmetic Operators 👇 ****************/
// Arithmetic  :-  + , - , / , * , % , ** , ++ , --.

/*
| Operator | Meaning             | Example  | Output         |
| -------- | ------------------- | -------- | -------------- |
| `+`      | Addition            | `5 + 3`  | `8`            |
| `-`      | Subtraction         | `5 - 3`  | `2`            |
| `*`      | Multiplication      | `5 * 3`  | `15`           |
| `/`      | Division            | `6 / 2`  | `3`            |
| `%`      | Modulus (Remainder) | `5 % 2`  | `1`            |
| `**`     | Exponentiation      | `2 ** 3` | `8`            |
| `++`     | Increment           | `x++`    | Increases by 1 |
| `--`     | Decrement           | `x--`    | Decreases by 1 |
 */

// --------------------------------------------------------------------------------------


/*******************👇 comparison Operators 👇 *********************/
// comparison Operators :- = , == , === , != , !== , > , < , >= , <=  

/**
| Operator | Meaning                 | Example     | Output  |
| -------- | ----------------------- | ----------- | ------- |
| `==`     | Equal to (value)        | `5 == "5"`  | `true`  |
| `===`    | Equal to (value + type) | `5 === "5"` | `false` |
| `!=`     | Not equal to            | `5 != 3`    | `true`  |
| `!==`    | Not equal + type        | `5 !== "5"` | `true`  |
| `>`      | Greater than            | `6 > 4`     | `true`  |
| `<`      | Less than               | `2 < 5`     | `true`  |
| `>=`     | Greater or equal        | `5 >= 5`    | `true`  |
| `<=`     | Less or equal           | `3 <= 2`    | `false` |

 */

// === 👇
/* Check karta hai value + type dono.
   Agar value bhi same ho aur type bhi same ho ⇒ tabhi true deta hai.
*/
let ch1 = 12 == "12";
console.log(ch1); // => true

let ch2 = 12 === "12"
console.log(ch2);// => false

// !== (Strict Inequality)
/**
 Check karta hai value ya type me koi bhi difference
 Agar kuch bhi different hai ⇒ true deta hai.
 */
console.log(5 !== "5");      // true (different type)
console.log(5 !== 5);        // false (same value and type)
console.log("hello" !== "Hello"); // true (H and h are different)


/* ------------------------------------------------------------------------------------


//************ 👇 assignment Operators 👇 ***************
// assignment Operators:- = , += , -= , *= , /= , %=.

/** 
| Operator | Example  | Same As       |
| -------- | -------- | ------------- |
| `=`      | `x = 5`  | Assign 5 to x |
| `+=`     | `x += 2` | `x = x + 2`   |
| `-=`     | `x -= 2` | `x = x - 2`   |
| `*=`     | `x *= 3` | `x = x * 3`   |
| `/=`     | `x /= 2` | `x = x / 2`   |
| `%=`     | `x %= 3` |  `x= x % 3`   |

 */

// 👉 %= Operator — Modulus Assignment Operator 👇
/**
 * / a %= b ka matlab hota hai:
  a = a % b
  Jo remainder aata hai a ÷ b ka, wo a me store ho jaata hai
 */
let a = 10;
a %= 3;     // means: a = a % 3  ⇒ 10 % 3 = 1
console.log(a);  // Output: 1

//----------------------------------------------------------------------------------------


//***************** 👇 Logical Operators 👇 ******************/
// Logical Operators :-  && , || , !.

/**
| Operator | Name        | Example         | Result     |        
| -------- | ----------- | --------------- | ---------- | 
| `&&`     | Logical AND | `true && false` | `false`    | 
|          |             |  `true && true  | `true`     |
| `||`     | Logical OR  | `true && false` |    `true`  |       
| `!`      | Logical NOT | `!true`         | `false`    |  
    
 */

/*-------------------------------------------------------------------------------------- */


//****************👇 Unary Operator 👇 *****************/
// Unary Operator :- + , - , ++ , -- , typeof

/**
 
| Operator | Kaam (Use)                 | Example       | Output   |
| -------- | -------------------------- | ------------- | -------- |
| `+`      | Value ko number banata hai | `+"5"`        | `5`      |
| `-`      | Negative bana deta hai     | `-5`          | `-5`     |
| `++`     | Increment (1 se badhao)    | `a++` / `++a` |          |
| `--`     | Decrement (1 se ghatana)   | `a--` / `--a` |          |
| `typeof` | Type batata hai            | `typeof "5"`  | `string` |

 */

// 👉 Post Increment (a++) 👇
//Pehle value use hoti hai, fir 1 se increase hoti hai.
let a1 = 5;
console.log(a1++);  // 5  => Pehle print kiya, fir a = 6 ho gaya
console.log(a1);    // 6


/** 
  👉 Pre Increment (++a) 👇
 Pehle value increase hoti hai, fir use hoti hai.
 */
 let b = 5;
console.log(++b);  // 6 => Pehle badha, fir print kiya
console.log(b);    // 6

// typeof :- bata ha ki kon sa Data Type ha value
console.log(typeof("harsh")); // => string
console.log(typeof(23)); // => number


// ------------------------------------------------------------------------------------


//******************* 👇  Unary Operator 👇 ******************/
//  Unary Operator :- ?:

//Ternary operator ko hum short if-else ke liye use karte hain.

// ➤ Agar condition true hoti hai, to value_if_true run hoga
//➤ Agar false hoti hai, to value_if_false run hoga

// Syntax :- condition ? value_if_true : value_if_false

let age = 20;
let result = age >= 18 ? "Adult" : "Minor";

console.log(result); // Output: Adult



