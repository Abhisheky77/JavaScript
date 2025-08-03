
//************* 👇 for loop 👇 *************/

/** for...of loop JavaScript me use hota hai iterable values (like array, string, etc.) ko one-by-one access karne ke liye.
 syntax :
 for (let variable of iterable) {
   // code to run
}
👉 variable – har iteration me ek value lega
👉 iterable – array, string, map, set, etc. jise hum loop me chalayenge **/ 

/** 👇 Different between for loop and for of loop 👇. 
for loop index-based hota hai, jisme hum manually loop ka start, end, aur step control karte hain.
for...of loop directly array ya string ke value ko access karta hai, bina index ke — simple aur readable hota hai.
Jab sirf values chahiye ho, for...of use karo. Jab index ya loop control chahiye ho, for use karo. ✅
 */

const fruits =["Apple","Banana","Pineapple","Mango"]

for(let num of fruits){
    console.log(num);  // => Apple , Banana , Pineapple , Mango
}

const name = "Abhishek"
for(let i of name)
{
    console.log(i);// => A b h i s h e k
}

//************* 👇 Map() 👇 ****************/
 /** 1. Map ek built-in object hai jo key-value pairs store karta hai.
2. Isme keys kuch bhi ho sakti hain (string, number, object, function, etc.).
3. Order preserved rehta hai — jisme aapne data daala, waise hi milega.
4. dublicate value store nahi karta ha map
 */
const x = new Map()
x.set("In" , "India")
x.set("USA" , "United States of America")
x.set("Fr" , "France")
x.set("In" , "India") // dublicate value store nahi karta ha map

//console.log(x);// => Map(3) { 'In' => 'India', 'USA' => 'United States of America', 'Fr' => 'France'}

for(const key of x){
    console.log(key);// => [ 'In', 'India' ] [ 'USA', 'United States of America' ] [ 'Fr', 'France' ] 
}

for(const [key , value] of x){
    console.log(key, ":-", value); // => In :- India , USA :- United States of America , Fr :- France  
}



//*************** 👇 Object 👇 ******************/
//❌ Nahii, aap for...of loop directly kisi plain JavaScript object {} par use nahi kar sakte — kyunki object iterable nahi hota.

// object() method me forin loop use karta ha.

/* 👇 for...in loop 👇
for...in loop JavaScript me use hota hai object ke keys (properties) ko iterate (loop) karne ke liye.
Yeh loop har ek key (property name) ko access karta hai. */

const myObj ={
    js : "javaScript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}
for (const key in myObj) {
   console.log(key); // => js , cpp , rb , swift. ----> only key value print kiya ha.
}

for( const key in myObj)
{
    console.log(`${key} shortcuts for ${myObj[key]}`); // => js shortcuts for javaScript , cpp shortcuts for c++ , rb shortcuts for ruby , swift shortcuts for swift by apple
}


/*********** 👇 Array 👇 *************/

const programming = ["Python","Java","Python","c++"]

for (const num in programming) {
    console.log(num); // => 0 , 1 , 2, 3 -----> only key value print kiya ha.
    console.log(programming[num]); // => Python , Java , Python , c++.
    
}



/*********** 👇 forEach() ek array method hai. 👇
Ye array ke har element par ek baar function run karta hai.
Aapko value, index, aur array ka access milta hai.v */
programming.forEach(function ( val) {
    console.log(val); // => c++ , Python , Java , Python ,c++.
});

programming.forEach(function ( val , index) {
    console.log(index + "->" + val);// => 0->Python , 1->Java , 2->Python ,3->c++.
});

programming.forEach((iteam, index , arr) => {
    console.log(iteam, index , arr); // => Python 0 [ 'Python', 'Java', 'Python', 'c++' ] ,Java 1 [ 'Python', 'Java', 'Python', 'c++' ] ,Python 2 [ 'Python', 'Java', 'Python', 'c++' ] ,c++ 3 [ 'Python', 'Java', 'Python', 'c++' ] 
});


const mycoading = [
    {
        lanuageName : "javaScript",
        lanuagefile : "js"
    },

    {
        lanuageName : "java",
        lanuagefile : "java"
    },
    {
         lanuageName : "python",
        lanuagefile : "py"
    },  
]
mycoading.forEach((iteam) => {
    console.log(iteam.lanuageName);// => javaScript , java , python
    console.log(iteam.lanuagefile);// => js , java , py
    
}) 

