let a = 300
//in js th curly braces implies scope
if(true){
    let a = 30
    console.log("Inner ", a);//block scope
}

console.log(a); //global scope

//there is a difference between browser scope and code level scope

console.log('-------------------------------------------');
//scopes in nested functon
function one(){
    let username = "ankur"

    function two(){
        let title = " guha"
        console.log(username + title);
    }
    //console.log(title); //cannot be accessed outside the block scope
    two()
}

one()
console.log('-------------------------------------------');
//scopes if if statement
if(true){
    let username = "ankur"
    if(username === "ankur"){
        let title = " guha"
        console.log(username + title);
    }
    //console.log(title); //cannot be accessed outside the block scope
}
//console.log(username); //cannot be accessed outside the block scope

console.log('-------------------------------------------');

//defining function in two ways

//1st way
//in this approach we can call the function before defining it
console.log(addOne(2))
function addOne(num){
    return num + 1
}

//addOne(2)

//2nd way 
//in this approach we cannot call the function before defining it

const addTwo = function(num){
    return num + 2
}

addTwo(4)