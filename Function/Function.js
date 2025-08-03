//***************** 👇 Function 👇 *********************/

// Function ek code ka dabba (box) hai — jisme tum ek baar likhte ho, baar-baar chala sakte ho.

function sayMyName(/** parameter*/) {
     console.log("A");
     console.log("m");
     console.log("i");
     console.log("t");
}
sayMyName(/** Argument */);// => A m i t  ------>kitana par bhi call kar sakta hu.

function addTwoNumber(number1,number2) {
    console.log(number1+number2);
}
addTwoNumber(5,5);// => 10
addTwoNumber(3,"6")// => 36 ----> JavaScript number ko string bana deta hai, and join (concatenate) karta hai. kyu ki 1 data type String diya ha to javaScript dusra ko bhi String samahj leta ha
addTwoNumber(5,null)// => 5


function addNumber(number1,number2)
{
   let result = number1 + number2
   return result;
   
//return number1 + number2
}
const result = addNumber(6,2)
console.log(result);// =>  8


function userLoginName(username ){
    if(username === undefined){
        console.log("Please enter the username");
        return
    }
 return `${username} just login`;
}
console.log(userLoginName("Abhishek"));// => Please enter the username
console.log(userLoginName());// => Please enter the username => undefined



/** Jab tum function ya array me extra values ko collect karna chahte ho into a single variable — waha rest operator ka use hota hai.
 👇 It looks just like the spread operator (...), but kaam alag karta hai. 👇
 ...numbers → yeh rest operator hai.
Jo bhi extra arguments function me diye jaate hain, wo sabko ek array me collect kar leta hai.
Yani sumAll(1,2,3,4) me sab 4 numbers numbers[] me aa gaye.*/
function calculatorCardPrice(...num1)
{
   return num1;
}
console.log(calculatorCardPrice(200,400,600));// => [ 200, 400, 600 ]


function calculatorCardPrice1(val1,val2,...num){
   
    // return val1; // => 300
    // return val2; // => 600
     return num; // => [ 900, 1010 ]
}
// console.log(calculatorCardPrice1(300,600,900,1010));// => 300. ----> 1st value val1 me store ha.

// console.log(calculatorCardPrice1(300,600,900,1010));// => 600. ----> 2nd value val2 me store ha.

console.log(calculatorCardPrice1(300,600,900,1010));// => [ 900, 1010 ] ---> baki ...num variable ka under value store ha.



// Object ko Function me kese access kart ha dekho
//   Object
const user = {
    userName : "Amit",
    Price : 300
}

// Function 
function handleObject(anyObject){
    console.log(`User Name is ${anyObject.userName} and Price is ${anyObject.Price}`);
}
handleObject(user);// => User Name is Amit and Price is 300 


// Array access by function
// Array
const myNewArray = [200,400,600,800,1000];

// function
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));// => 400
console.log(returnSecondValue([200,400,600,800,1000])); // 400


