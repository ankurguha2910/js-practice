let newDate = new Date();
console.log(typeof newDate); // object
console.log('---------------------------------');
console.log(newDate); // 2024-02-20T16:37:38.790Z
console.log('---------------------------------');
console.log(newDate.toString()); // Tue Feb 20 2024 16:37:38 GMT+0000 (Coordinated Universal Time)
console.log('---------------------------------');
console.log(newDate.toDateString()); // Tue Feb 20 2024
console.log('---------------------------------');
console.log(newDate.toISOString()); // 2024-02-20T16:37:38.790Z
console.log('---------------------------------');
console.log(newDate.toJSON()); // 2024-02-20T16:37:38.790Z
console.log('---------------------------------');
console.log(newDate.toLocaleDateString()); // 2/20/2024
console.log('---------------------------------');
console.log(newDate.toLocaleString()); // 2/20/2024, 4:37:38 PM

console.log('---------------------------------');
let newCreatedDate = new Date(2023, 0, 23) //year, month, date (month is 0 indexed)
console.log(newCreatedDate.toDateString());
console.log('---------------------------------');
let newDate1 = new Date(2024, 1, 21, 16, 15, 0)
console.log(newDate1.toLocaleString());
console.log('---------------------------------');
let myCreatedDate = new Date("01-14-2024") //month-date-year
console.log(myCreatedDate.toLocaleString());
console.log('---------------------------------');
let myTimeStamp = Date.now()
//get the date and time equivalent in milliseconds
console.log(myTimeStamp);
console.log('---------------------------------');
console.log(myCreatedDate.getTime());
console.log('---------------------------------');
//get any date and time equivalent in seconds
console.log(Math.floor(Date.now()/1000));

console.log('---------------------------------');
let myDate = new Date()
console.log(myDate.getMonth() + 1); //get the month number (1 has been added for better understanding)
console.log(myDate.getDay()); //get the current day, day count starts from Monday(1)

console.log('---------------------------------');

//customize a day according to user need
let customDate = myDate.toLocaleString('default', {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
})
console.log(customDate);