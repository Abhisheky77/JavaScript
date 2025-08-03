
/**** 👇 filter 👇
1. filter() ek array method hai jo array ke kuch selected elements ko return karta hai based on a condition.
2. Ye new array return karta hai — jisme sirf wahi elements hote hain jo condition ko pass karte hain (true). */
const nums = [1,2,3,4,5,6,7,8,9,10];

const newnums = nums.filter((iteam => iteam > 5));
console.log(newnums); // => [ 6, 7, 8, 9, 10 ]

const newnums1 = nums.filter((num) => { // jab bhi Curly Brackets {} use karo ga tab return use karna padata ha.
    return num <= 5 ;                   // Agar return use nahi karoga tab iska output => [] empty array aaya ga.
  
})
console.log(newnums1);// => [ 1, 2, 3, 4, 5 ]


// forEach loop : 👇

const newArray = []

nums.forEach((iteam) => {
    if(iteam > 2 && iteam < 8  )
    {
        newArray.push(iteam);
    }
})
console.log(newArray);// => [ 3, 4, 5, 6, 7 ]

const books = [
    {title: 'Book One' , genre: 'Fiction', Publish: 1981,edition: 2004},

    {title: 'Book Two' , genre: 'Non-Fiction', Publish: 1992,edition: 2008 },

    {title: 'Book Three' , genre: 'History', Publish: 1999,edition: 2007},

    {title: 'Book Four' , genre: 'Non-Fiction', Publish: 1989,edition: 2010},

    {title: 'Book Five' , genre: 'Science', Publish: 2009,edition: 2014 },

    {title: 'Book Six' , genre: 'Fiction', Publish: 1987,edition: 2010},

    {title: 'Book Seven' , genre: 'History', Publish: 1986,edition: 1996},

    {title: 'Book Eight' , genre: 'Science', Publish: 2011,edition: 2016},
];

let userBooks =books.filter((bk) => bk.genre === 'History')
// console.log(userBooks); // => [ { title: 'Book Three', genre: 'History', Publish: 1999, edition: 2007 }, title: 'Book Seven',  genre: 'History',  Publish: 1986, edition: 1996 }]

 userBooks =books.filter((iteam) => {
    return iteam.Publish > 2000})
// console.log(userBooks); // => [ { title: 'Book Five', genre: 'Science', Publish: 2009, edition: 2014}, {  title: 'Book Eight',  genre: 'Science',  Publish: 2011, edition: 2016 }]

userBooks = books.filter((BK) => { 
    return BK.Publish >= 1995 && BK.genre === 'History'})
console.log(userBooks);// =>[ { title: 'Book Three', genre: 'History', Publish: 1999, edition: 2007 }] 


//******** 👇 map() 👇**********/

const myNumber = [1,2,3,4,5,6,7,8,9,10]
let mynums = myNumber.map((num) => num + 10)
console.log(mynums);// => [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

mynums = myNumber.map((num) => {return num * 10}) // => [ 10, 20, 30, 40,  50, 60, 70, 80, 90, 100]
                 .map((num) => {return num + 1}) // => [ 11, 21, 31, 41,  51,61, 71, 81, 91, 101]
                 .filter((num) => num >= 40) // => [ 41, 51,  61, 71,  81, 91, 101]
console.log(mynums);// => [ 41, 51,  61, 71, 81, 91, 101]




/**  👇 reduce() in JavaScript 👇
1. reduce() ek powerful array method hai jo array ke saare elements ko ek single value me reduce (ghata/merge) karta hai. 
2. reduce() ka kaam hota hai: array ko ek hi answer me ghata dena.
3. Jaise sab numbers ka total, ya object ka total price, ya sab name ko jodna.
4. Ye har ek item ko loop karta hai aur result store karta jata hai.

1. 👉 accumulator → result store karta hai (like ek jhola 📦)
2. 👉currentValue → current element
3. 👉initialValue → accumulator ki starting value
*/

/** ✅ reduce() Syntax: 
  array.reduce((accumulator, currentValue) => {
  // return statement
}, initialValue);
*/
const Arr = [1,2,3]

let myTotal = Arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(myTotal); // Output: 6

myTotal = Arr.reduce(function (accumulator , currentValue){
    console.log(`accumulator ${accumulator} and currentValue ${currentValue}`);// => accumulator 0 and currentValue 1, accumulator 1 and currentValue 2 , accumulator 3 and currentValue 3
    return accumulator + currentValue ;
},0)
console.log(myTotal);// => 6

// Arrow function 
 const total = Arr.reduce((accumulator , currentValue) => accumulator + currentValue , 0)
console.log(total);// 6



const ShoppingCard = [
    {
        iteamName : "js Course",
        Price : 2999
    },
    {
        iteamName : "py Course",
        Price : 999
    },
    {
        iteamName : "java Course",
        Price : 1999
    },
    {
        iteamName : "Data Science Course",
        Price : 12999
    },
]

 const Total = ShoppingCard.reduce((acc , iteam) => {
    console.log(` accumulator ${acc} and iteam price ${iteam.Price}`);// =>  accumulator 0 and iteam price 2999, accumulator 2999 and iteam price 999 , accumulator 3998 and iteam price 1999 , accumulator 5997 and iteam price 12999
    return acc + iteam.Price;   
 },0);
 console.log(Total);// => 18996
 

