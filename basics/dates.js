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
let newCreatedDate = new Date(2023, 0, 23) //year, month, date
console.log(newCreatedDate.toDateString());