
// Declarations and initialization

//*************** 👇 var 👇 *****************/

var n; // ---> Declarations
var n = 10; // ---> Declarations and initialization  aur initialization matlab hota ha phale value dena.


// 👇 Reassignment :- Reassignment matlab override kar na . 👇

var p = 400;
p = 500;
console.log(p);// => 500 ----> value change 400 se 500.


let b = 200; // let DataType variable ka value change kar skte ha.
b = 300; 
console.log(b); // => 300 ---> value change 200 se 300.


const PI = 3.14; // const Data Type me yo value add karte ha jo  value kabhi change na kar na ho agar change karo ga to error aaya ga.
// PI = 3.14159; // ❌ Error
console.log(PI); // 3.14 


// 👇 Redeclaration :- duplicate variable bana skte ho. 👇

// var Problem_no_1 :-  app firse declare kar skte ho var datatype ko same variable naam se aur error bhi nahi aayega.
var x = 10;
var x = 20;  //✅

let y= 30;
// let y= 40; // ❌ let datatype ko same variable naam se declare nahi kar skte ho .

const z = 40;
// const z = 50; // ❌ const datatype ko same variable naam se declare nahi kar skte ho .


//Problem_no_2 :- var datatype Window me add hota hai.
// Problem_no_3 :- var datatype function scoped hota hai.
 function name (){
    if(true){
      /* kise bhi programming lanuage me if braket ke undar variable declare kiya ha to aap se if braket ka under hi use ka skte ho.
        lakin javascript me var datatype function scoped ha pura function ka braket ka undar kahi bhi use ho skte ha. 
        per function ka braket ka bhar nahi use kar skta ho karo ga to Error aaya ga.   */
       var a =23;
    }
     a =23; // ✅
 }
 // console.log("function :", a); // => error ----> var datatype ko function braket bhar nahi use kar skta ho karo ga to Error aaya ga.
 

 // 👇 why var leaks outside block but let doesn't. 👇
if(true)
{
  /* function sdoped ha : matlap ki var DataType bus function ki respect kar ha function ka braket under use kar skta ta ha per function braket ke bhar nahi use kar skta ha use karo ga to error aaya ga.
      per var data type if aur for aur kise bhi braket resprct nahi kar ta ha to yo braket ka bhar use kar skta ho*/
  var v = 45;
  let l = 55;// let Data Type subhi braket ka respect karta ha esa liya let ko  braket bhar use nahi kar skta ho karo ga to error aaya ga. 
}
console.log(v); // => 45 ✅
// console.log(l); // => Error ❌


// 👇 Why const allows changing object properties. 👇
 // Const ka under name update kar allowed ha .
const person = { name : "Amit"};
person.name = "Abhishek"; // allowed ✅

// per const ke under Reinitialization are not allowed ha.
// person ={};  // not allowed ❌
console.log(person); // => { name: 'Abhishek' }


//++++++++++++++++++++ 👇 Primitives Data Type 👇  ++++++++++++++++++++++++*/
// String , number , boolean , null , undefined , symbol , bigint .

// String use kar na ka tarika.
var s = 'Amit' ;  // ' ' --> single quotes.
var s = "Abhishek " ; // "" --> double quotes.
var s = `Harsh` ; // `` --> backtick

// number use kar na ka tarika.
var n = 12; // number.
var n = 15.9 // number.

// boolean use kar na ka tarika.
var w = true ; // boolean.
var w = false ;// boolean.

// null use kar na ka tarika.
// null ka matlab ha ki aapne jaan boojh kar value nahi di.
var e = null ; // null

// undefined use kar na ka tarika.
// undefined ka matlab ha ki aapne ek variable banaya aur usey value nahi di to jo value by  default mili wo hai undefined.
let u ; // undefined.

// Symbol use kar na ka tarika.
//Symbol ek primitive datatype hai jo hamesha unique (alag) value banata hai — even agar aap same naam do tab bhi!
let u1 = Symbol("yadav");
let u2 = Symbol("yadav");
let u3 = u1 === u2;
console.log(u3); // => false ---> hamesha unique (alag) value banata hai

// BigInt use kar na ka tarika
// BigInt ek special JavaScript data type hai jo bahut bade numbers ko store karne ke liye use hota hai — aise numbers jo Number data type handle nahi kar sakta.
 let t = Number.MAX_SAFE_INTEGER;
 console.log(t); // => 9007199254740991 ---> ya tana value store kar skta ha

 let k = 9007199254740991n; 
let v21 = k + 5n;
console.log(v21);// 9007199254740996n


//++++++++++++++++++ 👇 Reference (Non Primitive Data Type) 👇 ++++++++++++++++++++
// arrays , object , function

// Array.
const name1 = ["Abhishek","Amit","Harsh","Chirag","Bhavesh"];
console.log(typeof(name1)); // => object


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


//++++++++++++++++++ 👇 Dynamic typing 👇++++++++++++++++++

/** Dynamic typing -> js main static typing nahi ha and yaha per hai Dynamic typing jiska matlab
 hai ki aap data ko change kr skte ho kise bhi DataType mein kyuki yaha par Dynamic typing hai.
 */

// static typing me kon sa bhi value nahi store nahi kar skte ha sun sub ka aapna aapna data type ha.
// int a = 122;
// a = "Abhi"; // Error ❌


//+++++++++++++++++++++ 👇 Dynamic typing 👇 ++++++++++++++++++++++++

 // Dynamic Data type me kon sa bhi value store kar skte ha kise bhi data type me ,let ,vay const.
let a = 123;
a = "abhi";
a= true;
a =[] 


// ++++++++++++++ 👇 typeof 👇 ++++++++++++++++++

// typeof ka matlab ha ki app kise Data Type ka type pata kar skte ho.
var ty1 = "Abhishek";
console.log(typeof ty1); // => string
var ty2 = 234;
console.log(typeof (ty2));// => number
var ty3 = NaN ;
console.log(typeof (ty3));// => number
var ty4 = null ;
console.log(typeof (ty4));// => object
var ty5;
console.log(typeof (ty5));// => undefined
var ty6 = true ;
console.log(typeof (ty6));// => boolean


//+++++++++++++++++++ 👇 type coercion 👇 +++++++++++++++++++

// Type Coercion ka matlab hai — JavaScript automatically ek type ke value ko dusre type me convert kar deta hai jab zarurat hoti hai.

 /**  '+' operator do kaam ka liya use hota ha :
1. number ko add karna ka liya. EX: 2 + 3 = 5;
2. Concatenation ka use tab hota hai jab hum string values ko aapas me jodte hain using + operator.
  Ex: : "Abhishek" + "yadav = Abhishekyadav , " 5" + 4 = 9;  ya bus '+' operator hi use hota ha **/
var tu1 = 1 + "6";
console.log(tu1); // => 16.
var tu2 = "5" + 4;
console.log(tu2); // => 54.
var tu3 = null + "6";
console.log(tu3); // => null6.
var tu3 = "8" + undefined;
console.log(tu3); // => 8undefined.

// '-'  operator bus subtract kar naka kaam ha.
var tu4 = 1 - "4";
console.log(tu4); // -3
var tu5 = null - "6";
console.log(tu5); // => -6
var tu6 = "1" - undefined; 
console.log(tu6); // => NaN


// +++++++++++++++++ 👇 Truthy and falsy 👇+++++++++++++++++++++

// falsy :- 0 , false , "" , null , undefined , NaN , document.all.
//  !! ya ek shortcut ha jise hum check kar skte ha ki true ha ki faluse ha.
var fu1 = !! 0;
console.log(fu1); // => false
var fu2 = !! false;
console.log(fu2); // => false
var fu3 = !! "";
console.log(fu3); // => false
var fu4 = !! null; 
console.log(fu4); // => false
var fu5 = !! undefined;
console.log(fu5); // => false
var fu6 = !! NaN; 
console.log(fu6); // => false


// truthy value 👇 : truthy ka under jo bhi value ha yo true hai. 👇
// "0" , 'false' ," " , [] , {} , function() {}

var tr1 = !! "0";
console.log(tr1); // => true
var tr2 = !! 'false';
console.log(tr2); // => true
var tr3 = !! " ";
console.log(tr3); // => true
var tr4 = !! [];
console.log( tr4); // => true
var tr5 = !! {};
console.log(tr5); // => true
var tr6 = !! function() {} ;
console.log(tr6); // => true

//+++++++++++++++++ 👇 NaN 👇+++++++++++++++++

/** NaN ka matlab hota hai: "Not a Number"
→ Ye ek special value hai JavaScript me, jo tab aati hai jab aap koi invalid ya meaningless number operation karte ho.
 */

let na = "Harsh" - 5;
console.log(na); // => NaN

//+++++++++++++++ 👇 null  and undefined 👇+++++++++++++++++

// null ko huma manually de na padta ha.
let ll = null ;
console.log(ll); // => null

// undefined ko compalier deta ha.
let de;
console.log(de); // => undefined
