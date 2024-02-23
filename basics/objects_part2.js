//singleton (objects those are created using constructor)

const newUser = new Object() //an object created using a constructor is called a singleton object

//adding properties (key and values) to an object
newUser.id = "a0001"
newUser.name = "ankur"
newUser.isLoggedIn = false

console.log(newUser);

console.log('-------------------------------------------------');

const anotherUser = {
    email: "anotherUser@gmail.com",
    fullname: {
        userFullName: {
            firstName: "ankur",
            lastName: "guha"
        }
    }
}

console.log(anotherUser.fullname.userFullName.firstName); //accessng firstName from the nested object using the . operator

console.log('-------------------------------------------------');

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//combining more than one objects

const obj4 = Object.assign({},obj1,obj2,obj3) //assign() function returns a new objecting adding all the object properties into one removing the duplicates and in an ascending order with respect to the key

console.log(obj4);

console.log('-------------------------------------------------');

const obj5 = {...obj1, ...obj2, ...obj3} //combining more than one object using the spread operator(...)

console.log(obj5);

console.log('-------------------------------------------------');
//accessing array of objects
const response = [
    {
        id: "001",
        name: "a",
        email: "a@gmail.com"
    },
    {
        id: "002",
        name: "b",
        email: "b@gmail.com"
    },
    {
        id: "003",
        name: "c",
        email: "c@gmail.com"
    }
]
console.log(response[0].email); //accessing the value of the first object among the array of objects

console.log('-------------------------------------------------');
console.log(Object.keys(newUser)); // fetch the keys of an object passed wthin the paranthesis of keys() function. Returns the keys in an array format
console.log(Object.values(newUser)); // fetch the values of an object passed wthin the paranthesis of values() function. Returns the values in an array format
console.log(Object.entries(newUser)); // fetch the key and values of an object passed within the parenthesis of entries() function. Returns the key and value pairs together in an array format within an array

console.log('-------------------------------------------------');

//check wheteher an object has a key or not. Returns true if found else false if not found
console.log(newUser.hasOwnProperty('age'));

console.log('-------------------------------------------------');
//object destructuring

const medicineInfo = {
    medName: "Sompraz D 40",
    batch_id: "MED000SOM001"
}

const {medName: Medicine} = medicineInfo
console.log(Medicine);