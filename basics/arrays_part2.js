const marvel_heroes = ["ironman", "thor","spiderman"]
const dc_heroes = ["batman", "superman", "flash"]

marvel_heroes.push(dc_heroes) //in js array can also be pushed into an array. that is the new added element itself is an array is considered a separate element. push modifies the original array

console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);
console.log('--------------------------------------')
const all_heroes = marvel_heroes.concat(dc_heroes) //concat used to add each of the array elements separately to an array. concat does not modifies the original array

console.log(all_heroes);
console.log('--------------------------------------')
const all_new_heroes = [...marvel_heroes, ...dc_heroes] //(...) spread function does the same work as that of concat function
console.log(all_new_heroes);
console.log('--------------------------------------')
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [3, 4]]]
const real_another_array = another_array.flat(Infinity) //spreads all the elements of the array, if it contains nested array

console.log(real_another_array);
console.log('--------------------------------------')
console.log(Array.isArray("ankur"));//checks whether the element passed within the parenthesis of isArray() function is an array or not. Returns true if it is an array else false *** (important)
console.log('--------------------------------------')
console.log(Array.from("ankur"));//converts the element passed within the parenthesis of from() function to an array *** (important)
console.log('--------------------------------------')
console.log(Array.from({name: "ankur"}));//cannot convert this type of object. Retuns an empty array *** (important)
console.log('--------------------------------------')
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //of() function creates a new array of elements passed within the parenthesis *** (important)