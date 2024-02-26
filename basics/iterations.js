//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best");
    }
    console.log(element);
}

//console.log(element); //element cannot be accessed because it is in the block scope of the for loop
console.log("--------------------------------------------")
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop value ${j} for ${i} iteration`);
        console.log(`${i} * ${j} = `+ (i * j));
    }
}

console.log("--------------------------------------------")

const heroes = ["superman", "batman", "spiderman"]
console.log(heroes.length);
for (let i = 0; i < heroes.length; i++) {
    const element = heroes[i];
    console.log(element);
}

console.log("--------------------------------------------")

for (let i = 0; i < 10; i++) {
    if(i == 5){
        console.log(`${i} detected`);
        //break //breaks and stops the iteration and moves out of the loop
        continue //skips the current iteration
    }
    console.log(`Value of i is ${i}`);
}