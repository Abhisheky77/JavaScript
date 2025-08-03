//....... All String methods👇.


const NewName = "Abhishek";
const repoCount = 50;

//console.log(NewName + " yadav" + repoCount);

//console.log(`My name is ${NewName} and repocount is ${repoCount}`);


const Name = String("Amit");// This is the new declearasion of values.
 
//const Name = "Amit";
console.log(Name);// => Amit.

console.log(Name[0]);// => A.
console.log(Name[1]);// => m.
console.log(Name[2]);// => i.
console.log(Name[3]);// => t.
 
console.log(Name.length);// => 4.

console.log(Name.charAt(1));// => m.

console.log(Name.charCodeAt(3));// 116.

console.log(Name.codePointAt(2));//  105.

console.log(Name.at(3)); // => t.



/****** 👇The slice() method is used to cut or copy a part of an array (or string) without changing the original one.👇******/

// 1. Positive Index.
// Starts counting from left to right
// First character/element is at index 0
console.log(Name.slice(0,2));// => Am.

//2. Negative Index
//Starts counting from right to left
//Last character/element is at index -1
console.log(Name.slice(-4,-1));// => Ami



/****** 👇The substring() method is used to get a part of a string by giving:👇******/
//❌ No, in substring() we cannot use negative numbers.
console.log(Name.substring(0,3));



/*** The substr() method is used to get a part of a string based on:
The starting position
The length (how many characters you want) 
Explanation:👇
Start at index 1 → "m"
Take 2 characters → "m" and "i"
***/                       //index 1,2
console.log(Name.substr(1,2));// => mi.

//The toUpperCase() method is used to convert all letters of a string into UPPERCASE (capital letters).
console.log(Name.toUpperCase()); // => AMIT.

//The toLowerCase() method converts all letters in a string to lowercase (small letters).
console.log(Name.toLowerCase());// => amit.

console.log(Name.isWellFormed());// => true.

const n = "     Abhishek     "
console.log(n);// =>      Abhishek         .


//The trim() method is used to remove extra spaces from the start and end of a string.
console.log(n.trim());// => Abhishek.

//The trimStart() method works like trim(), but removes whitespace only from the start of a string.
console.log(n.trimStart());// => Abhishek       .

//The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
console.log(n.trimEnd());// =>          Abhishek.

//repeat() ek string method hai jo kisi string ko baar-baar repeat karta hai, jitni baar aap chaho.
console.log(Name.repeat(3));// => AmitAmitAmit.
 



/****** JavaScript ka split() method string ko todne (split karne) ke liye use hota hai into array of substrings, based on a separator (like space, comma, etc.).******/

//Example 1: Split by space:👇
const naam = "Jai Shree Ram.";
console.log(naam.split(" "));// => [ 'Jai', 'Shree', 'Ram.' ]

//Example 2: Split by comma:👇
let fruits = "apple,banana,mango";
console.log(fruits.split(","));// => [ 'apple', 'banana', 'mango' ]

//Example 3: Split with limit:👇
let str = "red blue green yellow";
let result = str.split(" ", 2);
console.log(result);// => 'red', 'blue'.

//Example 4: Split by each character:👇
let word = "Abhishek";
console.log(word.split(""));// => 'A', 'b', 'h','i', 's', 'h', 'e', 'k.

//Real-life Example:👇
let fullName = "Abhishek Yadav";
let nameParts = fullName.split(" ");
console.log("First Name:", nameParts[0]);// => Abhishek
console.log("Last Name:", nameParts[1]);// => Yadav


/****** replace() ek string method hai jo string ke kisi part ko naya part se replace karta hai.
Matlab: purani value hata kar, uski jagah nayi value daal deta hai.
🔹 Parameters:
searchValue – Jo text aapko replace karna hai (string ya regular expression).
newValue – Jo nayi value aap insert karna chahte ho.******/

 //Example 1: Replace a word:👇
 const Naam1 ="My Name is Amit";
 console.log(Naam1.replace("Amit","Abhishek"));// => Abhishek.

//Example 2: Replace only first match:👇
let str1 = "dog dog dog";
let result1 = str1.replace("dog", "cat");// => cat.
console.log(result1);

/***🔹 Replace all occurrences (sabhi jagah se replace):
✅ Use /g (global) regular expression.***/
let str2= "hello hello hello";
let result2= str2.replace(/hello/g, "hi");// => hi hi hi.
console.log(result2);

//Example 3: Case-sensitive hai
let str3 = "Hello hello";
let result3 = str3.replace("Hello", "Hi");// => Hi hello.
console.log(result3);// => 
 
/*** replaceAll() method string ke saare matches (all occurrences) ko replace karta hai.***/
//Example 1: Replace all occurrences of a word:👇
let str4 = "apple banana apple mango apple";
let result4 = str4.replaceAll("apple", "orange");// => orange banana orange mango orange
console.log(result4);

//Example 2: ReplaceAll with special characters:👇
let text = "1-2-3-4-5";
let result5 = text.replaceAll("-", " → ");// => 1 → 2 → 3 → 4 → 5
console.log(result5);


