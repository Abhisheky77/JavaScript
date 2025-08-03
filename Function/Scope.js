/**************** 👇 Scope 👇 ******************/

/* Scope ka matlab hai: “किस variable ko कहाँ access कर सकते हैं?”
Yani – variable kis jagah visible hai aur kahaan use ho sakta hai — uss boundary ko scope bolte hain.
 */

var c = 300

if(true){
 let a = 10;
const b = 20;
var c = 30;
}
// console.log(a); // => a is not defined.
// console.log(b); // => b is not defined.
 console.log(c); // => 30



let a = 400;

if(true){
 let a = 10;
const b = 20;
console.log("Inner:",a); // => 10

}
 console.log(a); // => 400
    
// console.log(b); // => b is not defined.

//++++++++++++++++++++++ 👇 Nested Scope 👇 ++++++++++++++++++++++++++//

function one(){
          const username = "Amit"

    function Two()
    {
        const website = "youtube";
        console.log(username);
    }
    console.log(website);

    //two()
}
//one ()