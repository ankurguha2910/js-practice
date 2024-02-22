const myArr = [0,1,2,3,4,5]

const myArr2 = ["shaktiman","popeye"]

const myArr3 = new Array(0,1,2)
console.log('---------------------------------------------')
console.log(myArr[3]);
console.log('---------------------------------------------')
//array methods
myArr.push(6) //add elemets to an array
myArr.push(7)
myArr.pop()//removes last element from an array
console.log('---------------------------------------------')
myArr.unshift(9)//insert an element at the beginning of an array and shifts rest of the elements to the right
myArr.shift()//removes the first element of an array and shifts rest of the elements to the left
console.log(myArr)
console.log('---------------------------------------------')
console.log(myArr.includes(9));//search if an element exist. Returns true if found else false if not found
console.log('---------------------------------------------')
console.log(myArr.indexOf(9));//returns the index of an element. Returns the index if element found else -1 if not found
console.log('---------------------------------------------')
const newArr = myArr.join() //binds an array and changes the array elements to string
console.log(typeof newArr);
console.log(newArr);
console.log('---------------------------------------------')
//slice, splice
console.log("A ", myArr);
const A1 = myArr.slice(1,3)//returns the element staring from index 1 and 2 excluding index 3. It does not modifies the original array
console.log(A1);
console.log("B ", myArr);
const A2 = myArr.splice(1,3)//removes the portion of the array from index 1,2 and 3, thus modifying the original array. It manipulates the original array
console.log(A2);
console.log("C ", myArr);
