//fiilter() function returns automatically
//filter() function mainly depends on the conditional statement
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//using filter() function
const result = myNumbers.filter( (num) => (num > 3))
console.log(result);

console.log('------------------------------------------')
//using forEach() function
const newNumbers = []

myNumbers.forEach( (num) => {
    if(num > 3){
        newNumbers.push(num)
    }
})

console.log(newNumbers);

console.log('------------------------------------------')

const books = [
    {
        title: "Book1",
        genre: "History",
        published: 1981,
        edition: 2008
    },
    {
        title: "Book2",
        genre: "Fiction",
        published: 1990,
        edition: 2010
    },
    {
        title: "Book3",
        genre: "Non-Fiction",
        published: 1999,
        edition: 2012
    },
    {
        title: "Book4",
        genre: "Science",
        published: 1991,
        edition: 2024
    },
    {
        title: "Book5",
        genre: "Fiction",
        published: 1993,
        edition: 2023
    },
    {
        title: "Book6",
        genre: "Biography",
        published: 1999,
        edition: 2022
    }
]

let fictionBooks = books.filter( (book) => ( book.genre === 'Fiction'))
let oldEditionBooks = books.filter( (book) => (book.edition < 2000))
let userBooks = books.filter( (book) => {
    return book.published >= 1990 && book.genre === 'Science'
})
console.log(fictionBooks);
console.log('------------------------------------------')
console.log(oldEditionBooks);
console.log('------------------------------------------')
console.log(userBooks);

