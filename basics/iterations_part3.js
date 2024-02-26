//for of loop
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}
console.log("---------------------------------------");
const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet === ' '){
        continue
    }
    console.log(`Each character is ${greet}`);
}

console.log("---------------------------------------");

//maps
//value in maps are unique
const map = new Map()
map.set('IN',"India")
map.set("USA","United States of America")
map.set("FR","France")

console.log(map);
console.log("---------------------------------------");

for (const [key, value] of map) {
    console.log(key + ' : ' + value);
}

//for-in loop cannot be used for maps

console.log("---------------------------------------");

//objects are not iterable using for of loop
const myObj = {
    game1 : "IGI",
    game2: "Max Payne"
}
/*
for (const [key, value] of myObj) {
    console.log(key + ' : ' + value);
}
*/

//for-in loop
for (const key in myObj) {
    console.log(`The value of ${key} is ${myObj[key]}`);
}

console.log("---------------------------------------");

const programming = ["js", "java", "cpp", "python", "c", "php"]
for (const key in programming) {
    console.log(`The programming languages are ${programming[key]}`);
}

console.log("---------------------------------------");
//forEach
//using call back function on array
programming.forEach( function (item) {
    console.log(item);
})

console.log("---------------------------------------");
//usng call back arrow function on array
programming.forEach( (value) => {
    console.log(value);
})

console.log("---------------------------------------");
//usng user defined function on array
function printItem(item){
    console.log(item);
}

programming.forEach(printItem) //need to give the reference of the function, no need to execute it

console.log("---------------------------------------");
//the foreach() function stores the item along with its index and the complete array
programming.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

console.log("---------------------------------------");

const myCoding = [
    {
        languageName: "JavaScript",
        fileExtension: "js"
    },
    {
        languageName: "Java",
        fileExtension: "java"
    },
    {
        languageName: "Python",
        fileExtension: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(`The language is ${item['languageName']} and the file extension is .${item.fileExtension}` );
})
