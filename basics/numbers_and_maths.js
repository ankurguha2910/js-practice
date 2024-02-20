const score = 100
console.log(score);
const balance = new Number(300)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //fix places after decimal point

const anotherNumber = 29.3987 
console.log(anotherNumber.toPrecision(3)); 

//precision gives priority to numbers before decimal point, but if the number of digits count in the non-fractonal part is known before-hand then the precision value is set greater than that of count to get the precision after decimal place 

const anotherNewNumber = 129.48
console.log(anotherNewNumber.toPrecision(3));

const otherNumber = 10000000
console.log(otherNumber.toLocaleString('en-IN')); //returns the numeric value as the local country number format


//+++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //neegative value is made positive but positive value remains same
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.max(3,-99,12,7));
console.log(Math.min(-9,0,-1,12,29));

console.log(Math.random()); //returns a random number between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 50
//to find a random number within a range
console.log(Math.floor(Math.random() * (max - min + 1)) + min);