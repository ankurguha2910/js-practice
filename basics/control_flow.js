const temperature = 41
if(temperature === 40){
    console.log("temperature less than 50");
}else{
    console.log("temperature greater than 50");
}

/*
Comparisn operators:
<, >, <=, >=, !=, ===, ==, !==
*/
console.log("----------------------------------------");

const balance = 1000

if(balance < 500){
    console.log("less than 500");
} else if(balance < 750){
    console.log("less than 750");
}else if(balance < 900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}

console.log("----------------------------------");
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allowed to buy courses");
}

console.log("----------------------------------");

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}