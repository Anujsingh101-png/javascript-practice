let mydate = new Date()
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleDateString())
console.log(mydate.toTimeString())
console.log(mydate.toISOString())

console.log(typeof mydate)

let mycdate = new Date(2005,7,24)
let myc1date = new Date(2005 , 7 , 24 , 5 , 45 , 60)
let myc2date = new Date("2005-07-24")
console.log(mycdate.toDateString())
console.log(myc1date.toLocaleString())
console.log(myc2date.toDateString())
console.log(mycdate.toDateString());

// these are generally use in poll and like ticket boolking
let mytimestamp = Date.now()
console.log(mytimestamp)   // provide value of time form jan 1970 till now in miliseconds
console.log(mycdate.getTime()) // provide value of time form mydate till now in millisec.
console.log(Math.floor(Date.now()/1000)) // provide value of time form 1 jan 1970 till now in sec.


let newdate = new Date()
console.group(newdate)
console.log(newdate.getHours())

// for creating your costumise date type
mydate.toLocaleString('default',{
    weekday: "long",
})