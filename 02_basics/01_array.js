// Arrays

const myarr = [23,553,77,4,34,6] // indexed at 0;
const myarr1 = ["anuj","singh"]
const myarr2 = new Array(1,34,5456,67,78,54,34);
console.log(myarr[3]);

// Arrays methors
myarr.push(23)
myarr.push(54)
myarr.pop()
console.log(myarr)

myarr.unshift(33)
myarr1.shift()
console.log(myarr)
console.log(myarr1)

console.log(myarr.includes(34))
console.log(myarr.indexOf(4))

const arr = myarr2.join()   // convert myarr2 into string

console.log(arr)

// slice / splice
const myna = [0,1,2,3,4,5,6]

const A = myna.slice(0,4)  // excluded index 4
console.log("A ", A)

const B = myna.splice(0,4)  // it cuts the elements form original array myna from 0 to 4.
console.log("B " , B)

console.log(myna)

