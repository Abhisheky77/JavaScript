/***************** 👇 Array 👇 *********************/

 const marvel_hero = ["IronMan","SpiderMan","Thor"]
// console.log(marvel_hero)// => [ 'IronMan', 'SpiderMan', 'Thor' ]

 const dc_hero = ["Superman","BadMan","Flash"]
// console.log(dc_hero)// => [ 'Superman', 'BadMan', 'Flash' ]

// // phale array me dusra fura Array add kar dega.
 //marvel_hero.push(dc_hero)// IndexNo:[ 0    ,      1     ,   2   ,[ 3:- 3.1   ,    3.2  ,   3.3]     
// console.log(marvel_hero);// => [ 'IronMan', 'SpiderMan', 'Thor', [ 'Superman', 'BadMan', 'Flash' ] ]
// console.log(marvel_hero[0]);// => IronMan
// console.log(marvel_hero[1]);// => SpiderMan
// console.log(marvel_hero[2]);// => Thor
// console.log(marvel_hero[3]);// => [ 'Superman', 'BadMan', 'Flash' ]
// console.log(marvel_hero[3][0]);// => Superman
// console.log(marvel_hero[3][1]);// => BadMan
// console.log(marvel_hero[3][2]);// => Flash


/**  concat() ek method hai jo do ya zyada arrays ya strings ko jodta hai (combine karta hai).
Ye original array ya string ko change nahi karta, balki ek naya result return karta hai. **/
const allHero = marvel_hero.concat(dc_hero)
console.log(allHero);// => [ 'IronMan', 'SpiderMan', 'Thor', 'Superman', 'BadMan', 'Flash' ]


/**  ... (three dots) ko JavaScript me Spread Operator kaha jaata hai.
Ye kisi array, object, ya iterable ke elements ko “spread” (faila) deta hai — yaani unke andar ke values ko bahar laata hai.**/
const new_Hero = [...marvel_hero,...dc_hero]
console.log(new_Hero);// => [ 'IronMan', 'SpiderMan', 'Thor', 'Superman', 'BadMan', 'Flash' ]
const new_Hero1 = ["Abhishek",...marvel_hero,...dc_hero,"Amit"]
console.log(new_Hero1);// => ['Abhishek',  'IronMan','SpiderMan', 'Thor','Superman',  'BadMan','Flash',     'Amit']


 const another_array = [1,2,3,[4,5,6],7,[8,9,[4,5]]]
 console.log(another_array);// => ['Abhishek',  'IronMan','SpiderMan', 'Thor','Superman',  'BadMan','Flash',     'Amit']

 /**flat() ek array method hai jo nested arrays ko ek hi level par laata hai.
👉 Matlab: Agar aapke array ke andar array hai (multi-level array), to flat() usko “flatten” karke ek normal array bana deta hai. */
 const new_another_array =another_array.flat(Infinity)
console.log(new_another_array);// => [1, 2, 3, 4, 5, 6, 7, 8, 9, 4,5]


/**Array.isArray() in JavaScript
Ye ek method hai jo batata hai ki koi cheez array hai ya nahi.
Agar array hai → true return karta hai
Agar nahi hai → false return karta hai */
console.log(Array.isArray("Abhishek"));// =>false

/* **Array.from() ek method hai jo kisi bhi cheez ko array me badal deta hai — agar wo cheez array jaisi ho ya tukdo me tod sakte ho (jaise string, set, etc.)**/
console.log(Array.from("chotu"));// => [ 'c', 'h', 'o', 't', 'u' ]


// Array.of() ek JavaScript method hai jo aapke diye gaye values se ek naya array banata hai, chahe aap 1 value do ya 10.
//🔸 Yeh confusion door karta hai jo normal Array() constructor me hota hai.
let score = 100;
let score1 = 200;
let score2 = 300;
let score3 = 400;
let score4 = 500;
console.log(Array.of(score,score1,score2,score3,score4));// [ 100, 200, 300, 400, 500 ]


 