//************* Object  literals ****************/

/** Object literal ek simple way hai object banane ka JavaScript mein.
🧠 Iska matlab:
Aap bina kisi class ya function ke direct object bana sakte ho using curly brackets {}.
 */

/*******  Yaha:
name key hai → value "Abhishek".
age key hai → value 21.
isStudent key hai → value true ********/

/*** Symbol JavaScript ka ek unique data type hai jo hamesha unique value create karta hai.
💡 Even if values look the same, unka identity alag hota hai.

Exmple :- Socho tumhare pass do "token" hain jisme likha hai "id".
Dono par same likha hai, par dono alag-alag token hain.
Bas waisa hi Symbol("id") har baar naya token banata hai.
***/

const mySym = Symbol("key");


const jsUser = {
    [mySym] : "Secret Value",
     name: "Abhishek",
     "Full Name" : "Abhishek yadav",
     age: 21,
     isStudent: true
};
console.log(jsUser.name);
// console.log(jsUser.Full Name);// This will be give the error because this "Full Name" syntax.
console.log(jsUser["Full Name"]);// =>Abhishek yadav.----> This is the correct method to see output.
console.log(jsUser[mySym]);// => id. ---> To symbol method run on [] brakect.
console.log(typeof [mySym]);

console.log(typeof jsUser[mySym]);

jsUser.age = 25 // you can change the value like this .
console.log(jsUser.age); // => 25

/*** Object.freeze() ek JavaScript method hai jo object ko freeze kar deta hai —
Matlab:
❌ Tum naye properties add nahi kar sakte
❌ Tum existing properties ko change nahi kar sakte
❌ Tum properties delete bhi nahi kar sakte ****/

//Object.freeze(jsUser)
jsUser.age = 28
console.log(jsUser.age);


jsUser.greeting = function(){
    console.log("Hello js user");
}
console.log(jsUser.greeting());// => Hello js user.

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
    console.log(`Hello js user, ${this["Full Name"]}`);
    
}
console.log(jsUser.greetingTwo());// => Hello js user, Abhishek 
// Hello js user, Abhishek yadav

