/********************* 👇 Arrow Function 👇 ***************************/
 
/** this JavaScript ka special keyword hai jo batata hai:
👉 "Kaunsa object current context me refer ho raha hai."
**/
const user = {
    userName : "Abhishek",
    price : 999,

    WelcomeMessage : function(){
        console.log(`Hello  ${this.userName} , Welcome to the my Website.`);
        console.log(this); // => { userName: 'Amit',price: 999, WelcomeMessage: [Function: WelcomeMessage]}
        
    }
}
user.WelcomeMessage() // => Hello  Abhishek , Welcome to the my Website.
user.userName = "Amit" // ---> we are here chaning the username.
user.WelcomeMessage();// => Hello  Amit , Welcome to the my Website.
//console.log(this);// => {}


function chai(){
    console.log(this);
    
}
chai()

// function method
const chai1 = function (){
    name = "Amt"
    console.log(this.user);
}
chai1() // => undefined


// Arrow Function
const chai2 = () => {
    user1 = "Harsh"
    console.log(this); // => {}
    console.log(this.user); // => undefined
    
}
chai2()

const addTwo = ( num1 , num2) => {
  return num1 + num2;
}
console.log(addTwo(2,3)); // => 5

const addTwo1 = ( num1 , num2) => ( num1 + num2);
console.log(addTwo(8,2)); // => 14

const addTwo2 = ( num1 , num2) =>  num1 + num2 ;
console.log(addTwo(7,7));// => 14

