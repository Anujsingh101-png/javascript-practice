console.log("maths")

const num = 100
console.log("maths")

const num1 = new Number(100) // now it only take number value
console.log(num1)

console.log(num1.toString().length)
console.log(num1.toFixed(2))  // now it only show desimal value upto 2.

const num2 = 234.549 
console.log(num2.toPrecision(5));

const num3 = 1000000000
console.log(num3.toLocaleString('en-IN'))

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4)) // only change - => +
console.log(Math.round(8.97))
console.log(Math.ceil(8.1))
console.log(Math.floor(8.1))
console.log(Math.max(86,657,6785,345))
console.log(Math.min(86,657,6785,345));


console.log(Math.random());  //it generate any random value
console.log((Math.random() * 10) + 1 ); // *10 is for generating value up to 1 decimal place but what if the valve is 0.045 so we add + 1 to it . 
console.log(Math.floor((Math.random() * 10) + 1));
 // now generating random values within range max and min

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min);