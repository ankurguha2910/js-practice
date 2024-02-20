console.log(2>1);// returns a boolean value
console.log(2>=1);// returns a boolean value
console.log(2<1);// returns a boolean value
console.log(2 == 1);// returns a boolean value
console.log(2 != 1);// returns a boolean value

console.log("-----------------------------------------------");
console.log("2" > 1); //retuns boolean true since js converts the second operand to string since the first operand is string itself
console.log("02" > 1);//retuns boolean true since js converts the second operand to string since the first operand is string itself
console.log("-----------------------------------------------");
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
The reason is that an equality check (==) and comparisons (>, < , >=, <=, !=) work differently.
Comparisons converts null to a number, treating it as 0.
That is why, console.log(null >= 0); returns true & console.log(null > 0); returns false
*/

console.log("-----------------------------------------------");
//returns boolean false for all the following cases when compared with undefined
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined >= 0);

console.log("-----------------------------------------------");
//strict comparison usng === operator which checks for both data and type equality

console.log("2" === 2); //returns false since both the operands type does not match