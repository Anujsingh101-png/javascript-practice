const name = "anuj singh"
const age  = "24";

// console.log(name + age + "anuj singh") => old way 

//mordern way
console.log(`my name is ${name} and my age is ${age}`);
const admin = new String("anuj-sing-hhs")

console.log(admin[10])
console.log(admin.toUpperCase())
console.log(admin.indexOf('s'))
console.log(admin.charAt(4))
const newstring = admin.substring(0,4)
console.log(newstring.substring(0,4))  // 4 is not considered
console.log(admin.slice(-10, 4));

const begin4 = "     anuj     "
console.log(begin4)
console.log(begin4.trim());

let url = "hfbvbvbui/ghdfugduygdugugu///fhguyve/454545/"
const url1 =  url.replace('454545','anuj')
console.log(url1);

console.log(url1.includes('singh'))
const cut = admin.split('-')
console.log(cut)

