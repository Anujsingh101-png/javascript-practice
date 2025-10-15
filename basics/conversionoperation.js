let score = "33abc"

console.log(typeof score)

let onlynumber = Number(score)
console.log(typeof onlynumber)
//here output shows nah because score contain abc which is not a num 

console.log(onlynumber)
let onlystring = String(score)
console.log(onlystring)
// true => 1, false => 0
//(vise versa)
let num = 1
let bool = Boolean(num)
console.log(bool)
// "" => false
//"anuj" => true

// same goes for string

// operations
console.log("for operations")

let negval = -3
console.log(negval)


console.log(2+2)
console.log(2-2)
console.log(2**2)// power of 2
// ---
let str1 = "anuj"
let str = "singh"
console.log(str1 + str)


console.log("1" + 2)

console.log(3 + "3")

console.log("1" + 2 + 4)
console.log(1 + 2 + "4")
// For please be professional dont use messi code just for output write code in standared and clean version
console.log((1 + 2) + 76)

let gamecounter = 100
let gamecounter1 = 100
++gamecounter;
console.log(gamecounter)
gamecounter1++;
console.log(gamecounter1)