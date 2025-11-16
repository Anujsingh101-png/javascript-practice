const obj = {
    "i" : "india",
    "s" : " sexy",
    "doma" : "domacile",
}

for (const key in obj) {
    console.log(`for ${key} the name is ${obj[key]}`)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }