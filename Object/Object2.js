/************* 👇 Singleton 👇 **************/ 
// Object Create

// const tinderUser1 = {} // Non Singleton Created

const tinderUser = new Object() // Singleton Object Created
console.log(tinderUser);// => {}

 // Adding the element in the tinderUser object.
tinderUser.id=101;
tinderUser.name = "Abhishek yadav";
tinderUser.age = 22;
tinderUser.userLongin = false
console.log(tinderUser);// => { id: 101, name: 'Abhishek yadav', age: 22, userLongin: false }
console.log(Object.keys(tinderUser));// => [ 'id', 'name', 'age', 'userLongin' ] ----> return only keys
console.log(Object.values(tinderUser));// => [ 101, 'Abhishek yadav', 22, false ]-----> return only values
console.log(Object.entries(tinderUser));// => [ [ 'id', 101 ], [ 'name', 'Abhishek yadav' ] [ 'age', 22 ], [ 'userLongin', false ]]

/** hasOwnProperty() ek method hai jo batata hai:
"Kya is object ke paas yeh property directly exist karti hai?"
🧠 Meaning:
true => agar property object ke andar directly hai.
false => agar property object ke andar nahi hai.
*/
console.log(tinderUser.hasOwnProperty("name"));// => true
console.log(tinderUser.hasOwnProperty("Lastname"));// => false

const regularUser = {
    Email : "Abhishek@gmail.com",
    fullName :{
        userFullName : {
            FirstName : "Abhishek",
            LastName : "Yadav"
        }
    }
}
console.log(regularUser);/** => {
    Email: 'Abhishek@gmail.com',
  fullName: { userFullName: { FirstName: 'Abhishek', LastName: 'Yadav' } }
}**/
console.log(regularUser.Email);// => Abhishek@gmail.com
console.log(regularUser.fullName);// =>{ userFullName: { FirstName: 'Abhishek', LastName: 'Yadav' } }
console.log(regularUser.fullName.userFullName);// => { FirstName: 'Abhishek', LastName: 'Yadav' }




const obj1= {1:"a",2:"b",3:"h",4:"i"};
const obj2 = {5:"s",6:"h",7:"e",8:"k"};

/** Explanation:
Yaha humne obj1 aur obj2 ko as values dala ek new object obj3 ke andar.
Result: obj3 ke andar 2 keys ban gayi: obj1 and obj2
Dono ki value unke original objects hain. */
const obj3 = {obj1,obj2};
console.log(obj3);// => { obj1: { '1': 'a', '2': 'b', '3': 'h', '4': 'i' }, obj2: { '5': 's', '6': 'h', '7': 'e', '8': 'k' }}


/*** Object.assign() ka use hum tab karte hain jab hume:
🔄 2 ya usse zyada objects ko combine (merge) karna ho
📋 ek object ki properties ko copy karna ho kisi dusre object me
 ***/
const obj4 = Object.assign(obj1,obj2)
console.log(obj4);// => { '1': 'a','2': 'b', '3': 'h', '4': 'i', '5': 's', '6': 'h', '7': 'e', '8': 'k'}


/**✅ Explanation:
Yahaan humne {} — empty object ko target banaya.
obj1 aur obj2 ke properties usme copy ho gayi.
obj5 ek naya object bana, aur original obj1 ya obj2 unchanged rahe. */
const obj5 = Object.assign({},obj1,obj2);
console.log(obj5);// => { '1': 'a', '2': 'b', '3': 'h', '4': 'i', '5': 's', '6': 'h', '7': 'e', '8': 'k'}


/** The spread operator is written as three dots ....
💡 Meaning:Spread ka matlab hota hai — "spread out / faaila dena" ek array ya object ke andar ke values ko alag-alag nikalna. */
const obj6 = {...obj1,...obj2}
console.log(obj6);// =>{ '1': 'a', '2': 'b', '3': 'h', '4': 'i', '5': 's', '6': 'h', '7': 'e', '8': 'k'}



const course = {
    courseName : "JS in Hindi",
    Price : "1000",
    courseInstructor : "Hitesh Sir"
}
console.log(course);// =>{ courseName: 'JS in Hindi', Price: '1000', courseInstructor: 'Hitesh Sir'}
console.log(course.courseInstructor);// => Hitesh Sir

const {courseName} = course // ----> we also print output like this
console.log(courseName);// =>JS in Hindi

const {courseName:name} = course
console.log(name);// => JS in Hindi 
