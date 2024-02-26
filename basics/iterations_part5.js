//map() function return automatically
const myNumbers = [1, 2, 3, 4 ,5 ,6, 7 ,8, 9]

const newNums = myNumbers.map( (num) => (num + 10))

console.log(newNums);

console.log('-------------------------------------');
//chaining
//map() function, the first map() value is transferred to the next map() function
const newList = myNumbers
                .map( (num) => ( num * 10))
                .map( (num) => ( num + 1))
                .filter( (num) => ( num > 30))

console.log(newList);