const user = {
    username: "ankur",
    age: 30,
    email: "ankur.guha1@gmail.com",
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the world of javascript`);
    }
}

user.welcomeMessage()
user.username = "gogol"
user.welcomeMessage()

console.log(this);// in node environment when we execute this keyword; it refers to an empty object because there is no global context present

//But in browser js engine; if we execute console.log(this); it returns the global object that is the Window object
console.log('----------------------------------------')
function coffee(){
    let username = "ankur"
    console.log(this); //in node environment, inside a function this keyword returns a global object with certain values 
    console.log(this.username)//this keyword only refrences the global context in case of an object but not for a function, hence it returns undefined
}

coffee()
console.log('----------------------------------------')
const func2 = function(){
    let username = "ankur"
    console.log(this.username); //this keyword does not work for this type of function declaration
    console.log(this); //in node environment, inside a function declared in the above way, this keyword returns a global object with certain values
}

func2()
console.log('----------------------------------------')
const fun3 = () => {
    let username = "ankur"
    console.log(this);//this keyword does not work inside arrow function also, it returns an empty object
}

fun3()

console.log('----------------------------------------')
//basic arrow function or explicit return
//if we use curly braces we need to write the return keyword
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,3))

console.log('----------------------------------------')
//implicit return arrow function
//if we use parenthesis we need not write the return keyword
//const addThree = (num1, num2, num3) => num1 + num2 + num3
const addThree = (num1, num2, num3) => (num1 + num2 + num3) //same as above line onle parenthesis,() added
console.log(addThree(3, 6, 9))

console.log('----------------------------------------')
//return an object from an implicit return arrow function. The object cannot be returned without the parenthesis
const returnObject = () => ({username: "ankur"})
console.log(returnObject());