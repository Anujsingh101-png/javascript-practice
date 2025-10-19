const marvel = ["ironman" , "thor" , "moonknight"]
const dc = ["batman","superman","flash"]

//marvel.push(dc)
//console.log(marvel) // here dc array is stored in marvel array as an element

//console.log(marvel[3][2])

const myh = marvel.concat(dc)
console.log(myh)
 
const myheros = [...dc,...marvel,...myh]  // no limitation on joining the arrays
console.log(myheros)

const myrel = [1,2,3,4,[4,5,6,7],[1,2,3,[1,9,67,5,4]]]
const myreal = myrel.flat(Infinity) // mergen all array with infinity depth
console.log(myreal)

console.log(Array.from("anuj singh"))  // converting this string into array
console.log(Array.from({name : "anuj singh"})) // intersting

let a = 200
let b = 300
let c = 400;

console.log(Array.of(a,b,c));