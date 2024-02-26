const userEmail ="ankur.g@gmail.com"

if (userEmail) {
    console.log("Email found");
}else{
    console.log("Don't have user email");
}

/*
falsy values:
false, 0, -0, BigInt 0n, ""(empty string), null, undefined, Nan

truthy values:
"0", "false", " ", [](empty array), {}(empty object), function(){}(empty function) 
*/

console.log("-------------------------------------");
//check if array is empty
const emptyArray = []
if(emptyArray.length === 0){
    console.log("Array is empty");
}

console.log("-------------------------------------");
//check if object is empty
const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty");
}

//special cases
/*
false == 0  implies true
false == '' implies true
0 == '' implies true
*/
console.log("-------------------------------------");
//Nullish Coalescing Operator (??) : null, undefined
//this operator checks if null value is received it safety checks that value, so that there is no run time error at the time of program execution and it is handled accordingly  
let val1;
val1 = 5 ?? 10

val1 = null ?? 9

val1 = undefined ?? 15

val1 = null ?? 10 ?? 30 //the first non-null value is considered

console.log(val1);

console.log("-------------------------------------");
//Ternary operator

const price = 100

price <= 80 ? console.log("less than 80") : console.log("more than 80");

