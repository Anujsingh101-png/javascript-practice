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