let score = "33"
let score1 = "33abc"
let s3 = null
let s4 = undefined
let s5 = true

console.log(typeof score);

let scoreInNumber = Number(score);
console.log(typeof scoreInNumber);
console.log(scoreInNumber)

let score1InNumber = Number(score1);
console.log(typeof score1InNumber);
console.log(score1InNumber);//string if type converted to nuber returns NaN

let s3InNumber = Number(s3);
console.log(typeof s3InNumber);
console.log(s3InNumber); //null if type converted to number returns 0

let s4InNumber = Number(s4);
console.log(typeof s4InNumber);
console.log(s4InNumber); //undefined if type converted to number returns NaN


let s5InNumber = Number(s5);
console.log(typeof s5InNumber);
console.log(s5InNumber); //boolean true if type converted to number returns 1 and boolean false returns 0


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn); //numeric 1 if type coverted to boolean returns true and numeric 0 returns false

let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2);
console.log(typeof booleanIsLoggedIn2);
console.log(booleanIsLoggedIn2); //empty string if type converted to boolean returns false

let isLoggedIn3 = "ankur"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3);
console.log(typeof booleanIsLoggedIn3);
console.log(booleanIsLoggedIn3);//non-empty string if type converted to boolean returns true


let number = 33
let strngNumber = String(number)
console.log(typeof strngNumber);
console.log(strngNumber);// a numeric value if type converted to string returns the numeric value with no difference only the type is converted to string



//----------------------------Operations----------------------------------------

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2); // 2 to the power of 2
console.log(2**3); // 2 to the power of 3
console.log(2/2); // quotient
console.log(2%3); // remainder

let str1 = "hello "
let str2 = "ankur"
let str3 = str1 + str2 //string concatenation
console.log(str3);


console.log(1 + "2");
console.log("1" + 2);
console.log("1" + 2 + 3) //if first operand is string then the following operands are converted to string and concatenated
console.log(1 + 2 + "4");
console.log(1 - 2 + "3"); //if the first operand is number then depending on the operation it executes and concatenates a string if present