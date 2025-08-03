// Dates

const myDate = new Date() 

console.log(typeof myDate);// => object.

console.log(myDate);// => 2025-07-18T11:04:41.549Z

console.log(myDate.toString());// => Fri Jul 18 2025 16:38:24 GMT+0530 (India Standard Time).

console.log(myDate.toDateString());// => Fri Jul 18 2025

console.log(myDate.toLocaleString());// => 18/7/2025, 4:47:02 pm.


console.log(myDate.toLocaleDateString());// => 18/7/2025

// you can also creat own date jo bhi tum chaho
let myCreatedDate = new Date (2025,6,1);
console.log(myCreatedDate);// => 2025-07-31T18:30:00.000Z

console.log(myCreatedDate.toDateString());// => Tue Jul 01 2025.

// her Date and time both are declear.
let myCreatedDate1 = new Date (2025,6,1,5,30);
console.log(myCreatedDate1.toLocaleString());// => 1/7/2025, 5:30:00 am

let myCreatedDate2 = new Date("2025-05-11");
console.log(myCreatedDate2.toLocaleString());// => 11/5/2025, 5:30:00 am

let myCreatedDate3 = new Date("12-04-2024");
console.log(myCreatedDate3.toLocaleString());// => 4/12/2024, 12:00:00 am
console.log(myCreatedDate3.getDate());// 4 (only date)
console.log(myCreatedDate3.getTime());// 1733250600000


let myTimeStamp = Date.now()
console.log(myTimeStamp);  // => 1752847544609 (yeh number har second badlega) 


console.log(Math.floor(Date.now()/1000));

let newDate = new Date() // this method return current date and time.
console.log(newDate);
console.log(newDate.getDate());// => 18
console.log(newDate.getDay());// => 5
console.log(newDate.getMonth());// => 6 (month satat with 0 not 1 Ex:(0,jan)(1,fab)(2,march)ect.)
console.log(newDate.getMinutes());// => 17

let newDate1 = new Date(); // current date

let formatted = newDate1.toLocaleString('en-IN', {
    Date:"",
   weekday: "long"  // 👈 weekday this means: "Tuesday", "Wednesday", etc.
});

console.log(formatted);// => Friday



