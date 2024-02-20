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