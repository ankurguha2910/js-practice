const myNums = [1, 2, 3]

const total = myNums.reduce( (acc, currval) => {
    console.log(`acc value : ${acc} and current value : ${currval}`)
    return (acc + currval)
}, 0)
console.log(total);

console.log("--------------------------------");
//using arrow function
const sum = myNums.reduce( (acc, currval) => (acc + currval),0)
console.log(sum);

console.log("--------------------------------");
const shoppingCart = [
    {
        itemName: "iPhone 15 Pro",
        price: 150000
    },
    {
        itemName: "Screen guard",
        price: 700
    },
    {
        itemName: "Back Cover",
        price: 1000
    }
]

let payAmount = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)

console.log(payAmount);