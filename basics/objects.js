//object literals
const mySym = Symbol("key1") //defining a symbol
const newUser = {
    name: "ankur",
    [mySym]: "value1",//to add a symbol as a key to an object key needed to be enclosed within square brackets
    age: 30,
    location: "kolkata",
    email: "ankur.g@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Friday", "Saturday"]
}
console.log('----------------------------------------')
console.log(newUser['email']);
console.log('----------------------------------------')
console.log(typeof newUser[mySym]);
console.log(newUser[mySym]);//accessing a symbol type key of an object
console.log('----------------------------------------')
//update a key of an object
newUser['email'] = "ankur@gmail.com"
console.log(newUser['email']);
console.log('----------------------------------------')
//freeze an object, so that changes made are not reflected
Object.freeze(newUser)
newUser['email'] = "ankur@yahoo.com"//changes made are not reflected
console.log(newUser['email']);
console.log('----------------------------------------')
console.log(newUser);

console.log('----------------------------------------')

const anotherObject = {
    name: "gogol",
    age: 30,
    location: "kolkata",
    email: "gogol@gmail.com"
}

anotherObject.greeting = function(){
    console.log('Hello from function');
}

anotherObject.greeting2 = function() {
    console.log(`Hello user ${this.name}`);
}

console.log(anotherObject.greeting());
console.log(anotherObject.greeting2());