const name = "ankur"
let age = 30

console.log(name + " is aged " + age); // not used nowadays

console.log(`${name} is aged ${age}`); //string interploation using `

//declaring a string using objects
const gameName = new String('Project IGI')
console.log(typeof gameName);
console.log(gameName[0]); //since each character of the string is stored in a key-value pair format; that is why we can access them with respect to their key
console.log(gameName.__proto__);

console.log(gameName.length); //access the length property of the object

console.log(gameName.toUpperCase()); //change the string to uppercase, but the original string remains same because String is a primitive data type which is stored in stack memory and changes are made on a copy of the original instance

console.log(gameName.charAt(3)); // returns the character present on the position passed through the charAt() function

console.log(gameName.indexOf('j')); // returns the position of the character passed through the indexOf() function

let newString = gameName.substring(0,3) // in substring negative value has no impact, it ignores the negative value and starts from 0
console.log(newString);

const anotherString = gameName.slice(-11,3) // in slice function we can use negative value
console.log(anotherString);

const anotherNewString = "    ankur    "
console.log(anotherNewString);
console.log(anotherNewString.trim()); //trim() function eleminates spaces at the befiining and at the tail end of any string


const url = "https://ankur.com/ankur%20guha"
console.log(url.replace('%20','-')); //replace character(s) with another character(s) in a string

console.log(url.includes('gogol')); // if the string passed through the includes() functon is present in the string

console.log(url);

const newGameName = "Max-Payne-2"
console.log(newGameName.split('-')); // split the string based on '-', therby returning an array of splitted values