// Primitive data types (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

let value = 120.4 
console.log(typeof value); //fraction value is also considered to be of Number type
console.log('------------------------------------------------');
let userName = "ankur"
console.log(typeof userName);
console.log('------------------------------------------------');
let age = 30
console.log(typeof age);
console.log('------------------------------------------------');
let isLoggedIn = false
console.log(typeof isLoggedIn);
console.log('------------------------------------------------');
let id = Symbol('123')
let anotherId = Symbol('123')
console.log(id === anotherId);
console.log(typeof id);
console.log(id);
console.log(typeof anotherId);
console.log(anotherId);
console.log('------------------------------------------------');
const num = 176538653568686524576535n //BigInt number can be created by adding 'n' at the last of any number
console.log(typeof num);

//Javascript is dynamically typed
console.log('------------------------------------------------');
//Reference or non-prmitive data types (call by reference)

// Array, Objects, Functions

//All the non-primitve datatypes are of object type that is why a type of an array is object and that of function is a function object
let heroes = ["Hesorham Hushiar", "Chandidasher Khuro", "Nidhiram Patkel", "Narahari Das"];
let myObj = {
    name: "Ankur",
    age: 30
}

let myFunction = function(){
    console.log('Hello world');
}

console.log(typeof heroes);
console.log(heroes);

console.log(typeof myObj);
console.log(myObj);

console.log(typeof myFunction);
console.log(myFunction);

console.log('------------------------------------------------');
//+++++++++++++++++++++Memory+++++++++++++++++++++++++++++++
// Stack memory(used for primitive data types), Heap memory (used for non-primitive data types)

let myName = "ankur"

let anotherName = myName

anotherName = "gogol" 

//since primitive data types sends a copy of the original memory that is why any modificaton done is only reflected on the copied instance and not on the original memory instance.

console.log(myName); //the original value remains the same
console.log(anotherName); // the modified value is reflected 

//Since non-primitive data types stores data in heap memory only reference is returned, thus multple instances of stack if points to the same data as in the heap, then it points to is's reference and not it's copy unlike primitive data types. Hence any changes made is directly reflected on the actual data.

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl.com"
}

let userTwo = userOne

userTwo.email = "ankur@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
console.log(userOne);