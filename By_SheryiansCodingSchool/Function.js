//************************ 👇 Function 👇************************ */

/*
  Function ek block of code hota hai jo koi kaam perform karta hai.
  Jab bhi us function ko call karte ho tabhi run hota ha, aur jitena bar call karo ga wo kaam repeat hota hai.
*/

// Function Declarations
 function name(){
    console.log(" This is Function Declarations.");
 }
 name();


// Function Expression
let fnc = function(){
    console.log(` This is Function Expression. `);
   
}
fnc();


// Arrow Function
let fun = () => {
    console.log(` This is Arrow Function. `);

}
fun();

//************* 👇 Parameters and arguments 👇 ************/

function f1 (name) // ( ) -> ya braket ko parameter kahte ha.
 {
   console.log(`My name is ${name}`);
   
} 
// f1() -> () ya braket ko argument kahte ha.
f1("Abhishek yadav"); // => My name is Abhishek yadav
f1(" Amit Yadav"); // => My name is  Amit Yadav

let f2 = function(val1,val2){
    console.log( val1 + val2);
    
}
f2(5,9); // => 14
f2(3,1); // => 4


//************ 👇 Default and rest Parameters 👇 ***************/

// Jab koi value pass nahi hoti, toh JavaScript un parameters (v1, v2) ko default value undefined de deta hai.
function abcd(v1,v2){
    console.log(v1,v2);// => undefined undefined
}
abcd();


// Default 👇

// Ye default values hain.
//Matlab: agar user function call karte waqt kuch bhi pass nahi karta, to automatic tum jo value do ga yo v1 aur v2 ki value 0 le li jati hai.
function ab(v1=0 , v2=0) {
  console.log(v1 + v2);// => 0
  
}
ab();

//Agar function call karta time value deha rahaga to to default value use nahi ho ga.
function ab(v1=4 , v2=2) {
  console.log(v1 + v2);// => 2 + 4 = 6
  
}
ab(2,4);

// rest 👇

/** rest:
  jab arguments kai bhaout saare value de raga ho to humein utne hi parameter banaane padege,  issey bachne ke liya, 
  hum rest operator ka use karte hai  ( ya ... ko rest aur Spread bhi kate ha) agar ... function 
  ke parameter space main lage to wo rest operator hai.
  And agar wo array and object  mein lage to wo Spread operator hai.
 */

function ab1(...values) // ---> ... variable ka kuch bhi naam likha do.
{
   console.log(values);// => [1, 2, 3, 4,  5, 6, 7, 8, 9, 10] 

   console.log(...values); // => 1 2 3 4 5 6 7 8 9 10  
} 
ab1(1,2,3,4,5,6,7,8,9,10);

function ab2(a,b,c,...val)
{ // ya ha per diya huya variable me store ho jaya ga .aur baki rest operator me store kar skte ha
  console.log(a,b,c,val);// => 1 2 3 [ 4, 5, 6 ]
}
ab2(1,2,3,4,5,6)


//**************** 👇 Return and early return 👇 ******************/

// Return👇

/**
 👉return ek JavaScript keyword hota hai jo function ke andar use hota hai, taaki function kuch value ko wapas (return) kare.
 👉Jab bhi hum function ke andar return likhte hain, toh wo function ka kaam wahi pe ruk jaata hai aur return ke baad wali value ko function ke bahar bhej diya jaata hai.
 */
function bn()
{
  return 435;
}
let ans=bn();
console.log(ans);// => 435


//****************** 👇 First-Class Function 👇 *****************/

/* 
First-Class Function ka matlab hai:
Functions ko JavaScript me variables ki tarah treat kiya jaata hai.
Iska matlab:
 1. Functions ko variable me store kar sakte ho.
 2. Functions ko as argument kisi aur function me pass kar sakte ho.
 3. Function se kisi dusre function ko return kar sakte ho.
*/

//1. Functions ko variable me store kar sakte ho. ----> like Function Expression
const greet = function(name) {
    return `Hello, ${name}`;
};

console.log(greet("Abhishek")); // Hello, Abhishek


// 2. Functions ko as argument kisi aur function me pass kar sakte ho.
function User(callback ){
  callback(); // call the function passed as argument
}

User(function () {
  console.log("Welcome Abhishek!"); // => Welcome Abhishek!
}); 


// 3. Function se kisi dusre function ko return kar sakte ho.
function outer() {
  return function () {
    console .log("Inner function called!");
  };
}
const innerFun = outer();
innerFun(); // => Inner function called!



//***************** 👇 Higher order function 👇 *********************/

/* 
Higher order function :- 
 1. Ek function ko argument ke roop me leta hai,
 2. Function se kisi dusre function ko return kar sakte ho.
*/

// 1. Ek function ko argument ke roop me leta hai,
function hof2 (values){
   values();
}
hof2(function () {
   console.log("Higher order function"); // => Higher order function
})


// 2. Function se kisi dusre function ko return kar sakte ho.
function hof1() {
  return function () {
    console.log(" HOF ");
    
  }
}
hof1()(); // => HOF


//**************** 👇 Pure n vs Impure Functions 👇 ********************/

// pure function
// Ek aisa function jo ki baahar ki value ko naa badle wo hai pure function.

let a = 34;
function square(n) {
  console.log("Abhishek");
  
}


// impure function
// Ek aisa function jo ki baahar ki value ko  badle wo hai impure function.

let count = 0;

function increase() {
  count++;
}

increase();
console.log(count); // Output: 1


//***************** 👇  closures 👇****************/

/**
  closures-> Ek  function jo return kare ek aur function aur return hone waala function 
  humesha yo use karega parent function ka koi variable.
  aur jo parent function variable ha usse return function me use kar na complesory ha
 */

  function ad (){
    let h = 456;
    return function (){
      console.log(h);      
    }
  }
  const myfun = ad()
  myfun() // => 456



//******************** 👇  Lexical Scope 👇 ********************/

/** Example hum na x naam ka function banaya  aur a naam ka ek variable use kiya ha to x naam ka function ka undar kahi bhi use kar skta hu a vaiable aur x naam ka function ka undar 
 * do function aur banaya hu jiska naam ha y and z  aur y function ka undar ek variable use kiya hu b to  y function ka undar hum a aur b variable ko use kar sak ta hu 
 *   and z function ka undar ek variable use kiya hu  jo ha c to  z  function ka undar hum a aur b  aur c ka variable ko use kar sak ta hu  */

function x() {
  let a = 34;

  function x1() {
    let b = 67;
    console.log("a:", a); // a: 34
    console.log("b:", b); // b: 67

    function x2() {
      let c = 29;
      console.log("a:", a); // a: 34
      console.log("b:", b); // b: 67
      console.log("c:", c); // c: 29
    }

    x2(); // ✅ calling inner-most function x2
  }

  console.log("a:", a); // a: 34
  x1(); // ✅ calling inner function x1
}

x(); // ✅ calling outermost function x


//********** 👇  Immediately Invoked Function Expression (IIFE) 👇**********/

/**
 Immediately Invoked Function Expression (IIFE) :-
 Matlap: Ek function jo turant define hote hi execute ho jata hai.
 */

 (function(){
   console.log("IIFE");  // => IIFE
 })();


 //*************** 👇 Hosisting different  between declaration and  👇 ******************/

 // Ex function ko likha na se phale chala paraha ho

 // function declaration hosisting ✅
 dec();


 function dec(){
  console.log("declaration hosisting"); // => declaration hosisting
 }

 // function expression hosisting ❌

 //exp() // => Error ❌



let exp= function(){
  //console.log("expression hosisting"); // Error ❌
  
}