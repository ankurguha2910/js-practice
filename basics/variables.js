const accountId = 1433
let email = "ankur.guha16@gmail.com"
var password = "12345678"
city = "Kolkata" //prefer not to use this way
let state;

//accountId = 2 //not allowed

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, email, password, city, state])