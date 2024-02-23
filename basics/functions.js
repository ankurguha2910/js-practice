function addTwoNumbers(number1, number2){
    //console.log(number1 + number2);
    console.log("Sum of two numbers");
    return (number1 + number2)
}

// addTwoNumbers(3, 3)
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

let result = addTwoNumbers(9,9)
console.log(result);

console.log('---------------------------------')

function userLoginMessage(username){
    if(username === undefined){
        console.log("Enter an user name");
        return
    }
    return `${username} just logged in.`
}

console.log(userLoginMessage("ankur"));// if no arugment is passed then the default value is undefined

console.log('---------------------------------')

function calculatePrice(val1, val2, ...num1){
    //... in the function defination is the rest operator which collects all the arguments passed to the function and creates an array of those arguments
    return num1
}

console.log(calculatePrice(100, 200, 500, 2000, 600, 9));

console.log('---------------------------------')

const user = {
    username: "ankur",
    age: 30
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
}

//object passed to a function
handleObject(user)
console.log('---------------------------------')
handleObject({
    username: "gogol",
    age: 30
})
console.log('---------------------------------')
//array passed to a function
const myArray = [100, 600, 900]

function returnThirdElement(returnarray){
    return returnarray[2]
}

console.log(returnThirdElement(myArray));
console.log('---------------------------------')
console.log(returnThirdElement([300,600,1200]));