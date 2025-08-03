/** JavaScript mein har value ko condition (if, while, etc.) mein true ya false ki tarah treat kiya jaata hai.
Truthy → jo true treat hoti hai
Falsy → jo false treat hoti hai **/

 const userEmail = "Abhishek@gmail.com" // true 
//const userEmail = " " // true
//const userEmail = [] //  true
// const userEmail = "" // false
//const userEmail = 0  // false

if(userEmail){
        console.log("I got user Email.");    
}
else{
    console.log("Don't have user email");
}

// falsy value 👇 : Yeh 7 values JavaScript mein false treat hoti hain: 👇
//    false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN .

// truthy value 👇 : truthy ka under jo bhi value ha yo true hai. 😄 👇
// "0" , 'false' ," " , [] , {} , function() {}


// here you find Array is empty or not.
if(userEmail === 0){
    console.log("Array is a empty");
}
else{
    console.log("Array is not empty");
    
}

// here you are find object are empty or not empty object
const emptyobj = {}

if(Object.keys(emptyobj). length === 0){
      console.log("object is a empty");
}
else{
    console.log("object is not empty");
    
}



//  👉 Nullish Coalescing Operator (??)
/** 👉 Agar value null ya undefined hai, toh defaultValue return hoga
 👉 Warna value hi return hoga */

 let val1;
 val1 = 5 ?? 10
let var2 = null ?? 10
let var3 = undefined ?? 15 
let var4 = undefined ?? null
let var5 = null ?? 3 ?? 8

 console.log(val1);
 console.log(var2);
 console.log(var3);
 console.log(var4);
 console.log(var5);
 
 

 //  Ternary Operator

 /** Agar condition true ho toh pehla value,
warna dusra value run hota hai. */
 
let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result); // Output: Adult




 