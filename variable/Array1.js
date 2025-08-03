// ********************  👇 Array 👇 ***************************//

const myArr = [0,1,2,3,4,5,6,7,8];
console.log(myArr);// => [ 0, 1, 2, 3, 4, 5, 6, 7, 8] Access all Element.
console.log(myArr[2]);// =>2 Access by index number.

const myArr2 = ["Amit","Harsh","Bhavesh","Chirag","Abhishek"]
console.log(myArr2);// => [ 'Amit', 'Harsh', 'Bhavesh', 'Chirag', 'Abhishek' ]

// You can also  store all DataType in the array.
const myArr3 = [1,2,3,"Amit","Bhavesh",32.4,56.9]
console.log(myArr3);// => [ 1, 2, 3, 'Amit', 'Bhavesh', 32.4, 56.9 ]

const myArr4 = new Array("You","can","also","declear","like","this","Array")
console.log(myArr4);// => [ 'You', 'can', 'also', 'declear', 'like', 'this' ]

//********** 👇: Array method :👇**********//

const Arr = [1,2,3,4,5];
// push() ka kaam hai:- Array ke end me (last me) new item add karna.
console.log(Arr.push(6));// => 6 ko add kar raha jo  value add karta ha return bhi yohi value kar ta ha. 
console.log(Arr.push(7));// => 7

// pop() ek JavaScript method hai jo array ke last (end) item ko hata deta hai aur usi removed item ko return karta hai.
console.log(Arr.pop());// => 7

//unshift() ek JavaScript method hai jo array ke starting (shuruaat) me item(s) add karta hai aur naya length return karta hai.
console.log(myArr.unshift(9));
console.log(myArr);// [9, 0, 1, 2, 3, 4, 5, 6, 7, 8]

// shift() ek JavaScript method hai jo array ke starting (first item) ko remove karta hai aur us removed item ko return karta hai.
console.log(myArr.shift());// => 9 ((first item) ko remove karta hai aur us removed item ko return karta hai.array me se)

// includes() check karta hai ki koi specific value array ya string ke andar hai ya nahi. Agar value present hoti hai to true return karta hai, warna false.
console.log(myArr.includes(1));// => true
console.log(myArr.includes(10));// => false

// indexOf() kisi value ka first index (position) dhoondta hai array ya string ke andar. Agar value milti hai to uska index return karta hai, Agar nahi milti to -1 return karta hai.
console.log(myArr.indexOf(2));// 2 //Agar value milti hai to uska index return karta hai,
console.log(myArr.indexOf(11));// -1

 /**join() method ek array ke saare elements ko ek single string me convert karta hai.
Aap isme decide kar sakte ho ki elements ke beech me kya separator hona chahiye (,, -, space, etc).**/
 const newArr = myArr.join();
 console.log(newArr);// => 0,1,2,3,4,5,6,7,8
 console.log(typeof(newArr));// => string

console.log(myArr);// => [  0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log(typeof(myArr));// => object.

let words = ["Hello", "world"];

console.log(words.join(" "));     // "Hello world"
console.log(words.join("-"));     // "Hello-world"
console.log(words.join("💖"));    // "Hello💖world"



/************* 👇 Slice and Splice 👇 ***************/

/** slice() method array ya string ka ek part nikal kar ek naya array ya string banata hai.
Original array ya string change nahi hoti.**/

const NA = [1,2,3,4,5,6,7,8,9];
console.log("A",NA);// => A [1, 2, 3, 4, 5, 6, 7, 8, 9]
const myn1 = NA.slice(1,6);
console.log(myn1);// => [ 2, 3, 4, 5, 6 ]

console.log("B",NA);// => B [ 1, 2, 3, 4, 5, 6, 7, 8, 9]


/** splice() method array se elements ko delete, add ya replace kar sakta hai.
Aur ye original array ko change karta hai ✅ **/

console.log("C",NA);// => C [1, 2, 3, 4, 5, 6, 7, 8, 9]
const myn2 =NA.splice(2,6)
console.log(myn2);// => [ 3, 4, 5, 6, 7, 8 ]





