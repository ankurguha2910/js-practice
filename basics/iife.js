//Immediately Invoked Function Expressions (IIFE)
//remove global scope pollution(variables/declaration) we use iife
//the function is executed immediately

(function coffee(){
    //named IIFE
    console.log('Connected');
})();
//there must be an ending ; after the end of an IIFE or between two IIFE ***
console.log('-----------------------------------');

//using arrow function, passing a parameter to the function
//Also called unnamed IFFE
((name) => {
    console.log(`Hello, ${name} welcome to programming`);
})("ankur")