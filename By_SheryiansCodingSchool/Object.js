//************************ 👇 Object 👇***********************/

/**
 👉 JavaScript me object ek data structure hai jo key-value pairs me data store karta hai.
 👉 Key (property name) → hamesha string ya symbol hota hai.
 👉 Value → kuch bhi ho sakti hai (string, number, array, function, dusra object, etc).

 Real-life example:
 👉 Socho tumhare paas ek student ka record hai — naam, age, marks. Ye sab ek hi jagah store karna ho, to hum object use karenge.
 */

//**********************👇creating object👇***********************

 let obj = {
   FirstName : "Abhishek",
   LastName : "Yadav",
   PhoneNo : 9321571477,
 };

 // ******************* 👇 Access object 👇**********************

  let obj1 = {
   FirstName : "Abhishek",
   LastName : "Yadav",
   PhoneNo : 9321571477,
   Age : 21,
 };
 //  Simple hai, jab property ka naam fixed ho aur ek valid variable name ho.
 // Aur jab (obj1.FirstName) . use karte ha to yo . ka bad wala vatiable ka naam search karta ha objeect ka {} braket ke undar.
 console.log(obj1.FirstName); // => Abhishek

 // Aur jab kiase variable me store karo ga tab square [ ] use karte ha.
 let aa = "Age" ;
 console.log(obj1[aa]); // => 21
 console.log(obj1["LastName"]); // => Yadav
 console.log(obj1["PhoneNo"]); // => 9321571477
 

 let person = { "first name": "Amit" };
console.log(person["first name"]); // ✅ Works
// console.log(person.first name); ❌ Error

//******************** 👇 nesting and deep access 👇********************/

let person1 = {
  "first-name" : "Harsh",
    Name : {
        First : "Abhishek",
        Last : "Yadav"
    },
    Contact : {
        Phone : {
            Primary : 9321571477,
            Secondary : 9082828491,
        },
        Email : "Abhishek@gmail.com",
        Instragram : "abhishek_yadav_7727",

    },
}

console.log(person1.Contact.Phone.Primary); // => 9321571477
console.log(person1.Contact.Instragram); // => abhishek_yadav_7727

let {Email,Instragram} = person1.Contact;
console.log(Email," + ",Instragram); // => Abhishek@gmail.com + abhishek_yadav_7727

let { Phone: { Primary, Secondary } } = person1.Contact;
console.log(Primary, Secondary);  // => 9321571477 9082828491

let {"first-name":FirstName} = person1;
console.log("first:",FirstName); // => Harsh


console.log("********************************************************");


//********************* 👇 Looping ( forEach , object keys , entries) 👇 *********************/

 let obj2 = {
   FirstName : "Abhishek",
   LastName : "Yadav",
   PhoneNo : 9321571477,
   Age : 21,
 };
 for(let val in obj2){
    //console.log(val); // => FirstName  LastName  PhoneNo  Age ---> here only key print.
    console.log(val,":",obj2[val]); // => FirstName : Abhishek LastName : Yadav PhoneNo : 9321571477 Age : 21 ---> here key and value both print.
    
 }

let person2 = {
    Name : {
        First : "Abhishek",
        Last : "Yadav"
    },
    Contact : {
        Phone : {
            Primary : 9321571477,
            Secondary : 9082828491,
        },
        Email : "Abhishek@gmail.com",
        Instragram : "abhishek_yadav_7727",

    },
}

for(let key in person2.Name){
    console.log(key,":",person2.Name[key]); // => First : Abhishek  Last : Yadav
}

for(let key in person2.Contact){
    console.log(key,":",person2.Contact[key]); // => Phone : { Primary: 9321571477, Secondary: 9082828491 } Email : Abhishek@gmail.com  Instragram : abhishek_yadav_7727    
}


// object keys 👇

//Object.keys(obj) → yeh object ke saare keys (property names) ko array me return karta hai.
// aap ko jab object ka ek key banana ho tab use ho ga.

let obj3 = {
   FirstName : "Abhishek",
   LastName : "Yadav",
   PhoneNo : 9321571477,
   Age : 21,
 };
 let ans = Object.keys(obj3);
 console.log(ans); // => [ 'FirstName', 'LastName', 'PhoneNo', 'Age' ] ---> pura keys ko ek array me retutn karta ha

// entries 👇

/**
  entries: Ye function object ko array of arrays me convert karta hai jaha:
 👉 Har chhote array ka pehla element hota hai → key
 👉 Aur dusra element hota hai → value
 */

let obj4 = {
   FirstName : "Abhishek",
   LastName : "Yadav",
   PhoneNo : 9321571477,
   Age : 21,
 };
 
 let ans1 = Object.entries(obj4);
 console.log(ans1);
    /** => output:-
  let obj3 = {
   FirstName : "Abhishek",
   LastName : "Yadav",
   PhoneNo : 9321571477,
   Age : 21,
 };
   */
 

 //********************* 👇 Coping object( spread ,object.assign,deep clone) 👇********************/
 
 // 1. spread ... 👇
 
 /**
  ... ka matlab hota hai "isko spread (phaila do)" — matlab object ya array ke andar 
    jo values hain unko unpack karke new object/array me daal dena.
  */
 // spread me nested object copy nahi karta ha kyu ki kuch bhi change karaga to orginal object me bhi change ho jaya ga.
 
    let obj5 = {
   FirstName : "Abhishek",
   LastName : "Yadav",
   PhoneNo : 9321571477,
   Age : 21,
 };

 let obj6 = {...obj5} // object ko kar skte ha obj5 copy kiya obj6 me
 console.log(obj6); // => { FirstName: 'Abhishek', LastName: 'Yadav', PhoneNo: 9321571477, Age: 21 }

 // 2. object.assign 👇

/**
 Object.assign(target, ...sources) ek method hai jo source object(s) ki properties ko target object me copy karta hai.
 Ye shallow copy banata hai (nested objects reference se copy hote hain).
 */

  let obj7 = {
   FirstName : "Abhishek",
   LastName : "Yadav",
   PhoneNo : 9321571477,
   Age : 21,
 };
 
 let obj8 = Object.assign({},obj7) // object ko kar skte ha obj7 copy kiya obj8 me
 console.log(obj8); // => { FirstName: 'Abhishek', LastName: 'Yadav', PhoneNo: 9321571477, Age: 21}

  let obj9 = Object.assign({price : Infinity},obj7) // kuch bhi add kar na ha to kar skte ha.
 console.log(obj9);

// 3.  Deep Clone (Deep Copy) 👇

 /** 
 👉 Deep clone me poora object, including nested objects and arrays, alag memory location me copy hota hai.
 👉 Matlab ek object me change karoge to dusre me koi effect nahi hoga — chahe wo kitna bhi nested ho.
  */

let person3 = {
    Name : {
        First : "Abhishek",
        Last : "Yadav"
    },
    Contact : {
        Phone : {
            Primary : 9321571477,
            Secondary : 9082828491,
        },
        Email : "Abhishek@gmail.com",
        Instragram : "abhishek_yadav_7727",

    },
}

 let x = JSON.parse(JSON.stringify(person3))
 console.log(x); 
 /**  Output:
  {
  Name: { First: 'Abhishek', Last: 'Yadav' },
  Contact: {
    Phone: { Primary: 9321571477, Secondary: 9082828491 },
    Email: 'Abhishek@gmail.com',
    Instragram: 'abhishek_yadav_7727'
  }
}
  */

//*********************** 👇 optional changing 👇 **************************/

/**
 👉 Optional chaining ka use tab hota hai jab tum kisi nested object ka property access karna 
    chahte ho lekin tum sure nahi ho ki wo property exist karti hai ya nahi.
 👉 Ye error throw karne ke bajay undefined return karta hai.
 */

 let person4= {
    Name : {
        First : "Abhishek",
        Last : "Yadav"
    },
    Contact : {
        Phone : {
            Primary : 9321571477,
            Secondary : 9082828491,
        },
        Email : "Abhishek@gmail.com",
        Instragram : "abhishek_yadav_7727",

    },
}
console.log(person4.Contact?.Phone?.Primary); // => 9321571477
console.log(person4.contact?.Phone?.Primary); // => undefined

//************************* 👇 computed properties 👇**************************/ 
/**
   Computed properties ka matlab hota hai — hum property ka naam runtime (code chalne ke time) 
   pe decide karte hain, kisi variable ya expression se.

 */
// Computed property banane ke liye square brackets [] ka use hota hai:
   let key = "email";
 let person5 = {
    name: "Abhishek",
    [key]: "abhishek@gmail.com" // Yaha [key] ka matlab hai ki object ka property name key variable ka value hoga.


};

console.log(person.email); // abhishek@gmail.com

