//********************** 👇 Array 👇***********************/

/** Array ek list ya collection hota hai jisme multiple values ek hi variable me store hoti hain.
Values ordered (index ke according) hoti hain aur har ek value ka ek index number hota hai. */

//************* 👇 Create Array. 👇 ***************/
let x = [] ;

let y = new Array(); 


// We can also use all data type in one array.
let u = ["Duggu",12,45.89,true,false]

console.log(u); // => [ 'Duggu', 12, 45.89, true, false ]


//************* 👇 Array access. 👇 ****************
let a = [10,20,30,40,50];

console.log(a); // => [ 10, 20, 30, 40, 50 ]
console.log(a[0]); // => 10
console.log(a[3]); // => 40
console.log(a[8]); // => undefined


//***************** 👇 Array modify 👇 ****************
// "Modify" ka matlab hai array me changes karna — chahe element badalna ho, naya add karna ho, ya delete karna ho.

let c = [10,20,30,40,50]
console.log(c); // => [ 10, 20, 30, 40, 50 ]

c[2] = 24;
console.log(c[2]); // => 24

c[4]=90;
console.log(c[4]); // => 90
console.log(c); // => [ 10, 20, 24, 40, 90 ]


//************** 👇 Array methods 👇 ***************

let m = [100,200,300,400,500]

//  unshift() → Array ka Start me element add karna.
m.unshift(11);
console.log(m); // => [ 11, 100, 200, 300, 400, 500 ] ---> 11 Array ka staring me hi add kar ta ha


// push() --> Array me Last me element add karna
m.push(1200);
console.log(m); // => [ 100, 200, 300, 400, 500, 1200 ] ---> he will add the element 1200 in Array

//  .pop() --> Array me Last se element remove karna
m.pop()
console.log(m); // => [ 100, 200, 300, 400, 500 ] ---> he will remove the 1200 from the array.

// . shift() → Array ka Start se element remove karna
m.shift()
console.log(m); // => [ 200, 300, 400, 500 ] ---> he will remove satating elements 100 in Array.

// splice 👇

// 👉 Kaam → Array me add/remove/replace karta hai aur original array ko change kar deta hai.
// 👉 Starting index, kitne elements remove karne hain, aur optional new elements specify karte ho.
// splice(startIndex, deleteCount, item1, item2...) --> 
// 1. (startIndex means kahase elements delete start kar na ha yo index de do.) 
// 2. (deleteCount means kaha tak elements detete kar na ha yo index de do)

console.log(m); // => [ 100, 200, 300, 400, 500 ]

m.splice(1,3);
console.log(m); // => [ 100, 500 ] ---> yaha per index 1 se start ho ga aur index 3 elements delete ho jaya ga [ Delete elements :- 200,300,400]


let colors = ["red", "green", "blue", "yellow"];

// 1️. Remove elements
let removed = colors.splice(1, 2); 
console.log("After Remove:", colors); // ["red", "yellow"]
console.log("Removed Elements:", removed); // ["green", "blue"]

// 2️. Add elements (without removing anything)
colors.splice(1, 0, "black", "white"); 
console.log("After Add:", colors); // ["red", "black", "white", "yellow"]

// 3️. Replace elements
colors.splice(2, 1, "pink"); 
console.log("After Replace:", colors); // ["red", "black", "pink", "yellow"]


// slice 
// Kaam → Array ka part copy karta hai, lekin original array ko change nahi karta.
//slice(startIndex, endIndex)
// slice matlab main array me se ex naya array bana leta ha jaha se me se bana chahu [startIndex mean ya se element start ho ga naya array ka liya] 
// [endIndex mean ya tak element chahi ya ga naya array ka liya]
let h =[12,34,68,90,43,87] // -- > main Array
console.log(h); // => [ 12, 34, 68, 90, 43, 87 ]

let e = h.slice(1,4)
console.log(e); // => [ 34, 68, 90 ]
console.log(h); // => [ 12, 34, 68, 90, 43, 87 ] -->slice main array ko change nahi kar ta ha.


// reverse → Array ko ulta kar deta hai
// reverse main array ko hi reverse karta ha

let r = [1,2,3,4,5,6]
r.reverse()
console.log(r); // =>[ 6, 5, 4, 3, 2, 1 ]

// short 
// Array ko ascending order  aur decending order me sort karne ke liye: 

let s=[12,56,37,987,4,57,99,0]
let asc = s.sort(function (a,b){
    return a - b;
})
console.log(asc); // => [ 0,  4, 12,  37, 56, 57, 99, 987] ---> ascending order

let dec = s. sort((a,b) => (b-a))
console.log(dec); // => [ 987, 99, 57, 56, 37, 12, 4,  0 ] ---> decending order


//****************** 👇 forEach loop 👇 *******************/

/** 
 forEach() ek array method hai jo array ke har element par ek callback function chalata hai.
 Ye side-effects (console.log, DOM update, external state change) ke liye perfect hai — naya array return nahi karta.
 */

 let f = [12,45,74,78,35,90,43];
f.forEach(function(val){
    // console.log(val); // => 12 45 74 78 35 90 43 -- > ya number ek ka ek nicha print ho ga.
    console.log( val + 5); // => 17 50 79 83 40 95 48
     }) 


//****************** 👇 Map 👇******************/

/** map() ek Array method hai jo array ke har element pe ek function chalata hai aur naya array return karta hai.
Original array change nahi hota.
 */

// 👉 map srf tab youse karna hai jab aapko ek naya array banana hai pichhle array ke data ke basis par. 

/**
 hum ko kan map use kae na ha --> jab bhi aapko aisa koi case dikh jaaye  jaha per ek array se naya array banega and
  wo naya array  kuchh values ko rakhega tab map lagega.
 */

  let ma =[1,44,8,56,32,5,66,3,64,33]
let ans = ma.map(function(val){
    // return 12; // => [ 12, 12, 12, 12, 12, 12, 12, 12, 12, 12]
   //  if(val > 10 ) return val; // => undefined, 44, undefined, 56, 32, undefined,  66, undefined, 64, 33
   return ; // => [ undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
})
console.log(ans);

//******************* 👇 filter 👇*******************/ 

/**
 👉 filter() ek array method hai jo original array me se sirf un elements ko choose karta hai jo condition pass karte hain.
 👉 Result me ek naya array milta hai jisme sirf selected values hoti hain.
 */

 /*
  👉 filter() method me return likhna jaruri hai agar tum normal function (function(){}) use kar rahe ho.
  👉 filter() har element ko check karta hai,
 1. Agar return true → element result array me add ho jata hai.
 2. Agar return false → element skip ho jata hai.
 👉 Agar tum return nahi likhoge, to by default undefined return hoga, jo false treat hota hai, aur result empty array banega.
  */

 let f1 =[4,56,3,2,5,67,32,1,5]
 let ans1 = f1.filter(function(val){
    if( val > 5) return true;
 })
 console.log(ans1); // =>[ 56, 67, 32 ]

 //********************* 👇 reduce()  👇******************/

 /**
  👉 reduce() ek JavaScript array method hai jo tumhare array ke saare elements ko combine karke ek single value banata hai.
  👉 Ye mostly sum, product, average, maximum, minimum nikalne ke liye use hota hai.
  */

  /**
   Syntax:-
   array.reduce(function(accumulator, currentValue){
        // logic
    }, initialValue);
👉 accumulator → result store karta hai (jo agle step me pass hota hai).
👉 currentValue → array ka current element.
👉 initialValue → optional; accumulator ka starting value.
   */

// accumulator apne value ko yaad rakta ha

 let re = [12,45,53,2,21,55,321,13];
 let ans2 = re.reduce(function(accumulator,val){
    return accumulator + val;
 },0)
 console.log(ans2); // => 522

//**************** 👇 find() 👇******************/

 // 👉 JavaScript ka find() method ek array me pehla element return karta hai jo tumhari di hui condition ko satisfy karta hai.
 // 👉 Agar koi element match nahi hota, to ye undefined return karega.

 /** Ex:-
 Array me 10 se bada sabse pehla number 12 hai, isliye wahi return hua.
 15 bhi bada hai lekin wo baad me aata hai, aur find() pehle match pe hi ruk jata hai.
  */
 let arr = [5, 8, 12, 4, 15];

 let result = arr.find(function(val){
    return val > 10;
 });
 console.log(result); // => 12

 
//************** 👇 some() 👇 *****************/

/**
 👉 JavaScript ka some() method check karta hai ki array me kam se kam ek element tumhari di hui condition ko satisfy karta hai ya nahi.
 👉 Agar ek bhi match mil jata hai, to ye true return karta hai. Agar koi match nahi milta, to false return karega.
 */

let marks = [10,30,49,69,74,91];
let ans3 = marks.some(function(val){
    return val > 90; // => true
   // return val > 100; .// => false
})
console.log(ans3); 


//****************** 👇 every() 👇******************/

/**
 👉 JavaScript ka every() method check karta hai ki array ke sabhi elements tumhari di hui condition ko satisfy karte hain ya nahi.
 👉 Agar ek bhi element fail ho gaya, to ye false return karega.
 👉 Agar sab pass ho gaye, to true return karega.
 */

let eve = [12,45,78,90,54,34]
let ans4 = eve.every(function(val){
   return val > 10; // => true
  // return val > 15; // => false

})
console.log(ans4); 

//*************** 👇 Destructuring 👇 *****************/

/* JavaScript me Destructuring ek shortcut hai jisme hum array ya object ke values 
 ko directly alagsi variables me tod (extract) lete hain — bina arr[0], obj.key likhe.*/

let des = [1,2,3,4,5,6,7,8,9,10];
let [a1,b2,c3,d4] = des;
console.log(a1,b2,c3,d4); // => 1 2 3 4

let [k1,,k3,,k5,,k7,,k9,,] = des ; //  ,, Skip Values ---> hum elements ko jo nahi chahiya yo skip kar skte ha.
console.log(k1,k3,k5,k7,k9); // => 1 3 5 7 9


//*********************** 👇 spread 👇 ********************/

/**
 Short: Spread (...) ka kaam hota hai — kisi iterable (jaise array, string, set) ya object ke elements/properties ko “phaila” dena (expand). 
 Ye copy, merge, insert, aur function call me arguments expand karne ke liye bahut useful hai.
 */

 // new Array me kuch change karu ga to main array me kuch change nahi ho ga.
let  sp = [1,2,3,4,5,6,7,8,9,10] // main array
let opt = [...sp] // // new array, different reference
console.log(opt); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
opt.pop();
console.log(opt); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ---> one element are deleted in new Array
console.log(sp); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]  main Array kuch change nahi hua ha
 


