// singelton

// objects literals
const mysym = Symbol("mykeys")

const myobj = {
    name : "anuj",
    [mysym] : "mykeys",
    section : "it1",
    course : "btech",
    gmail : "anujsingh@gmail.com",
    lstloggin : ["monday","sunday","tuesday"],
};

console.log(myobj.lstloggin)
console.log(myobj["lstloggin"])  // more useful
console.log(myobj[mysym]) 

myobj.gmail = "anujsinghchatgpt"
//Object.freeze(myobj) // now we cant change any value from this
myobj.gmail = "anujsinghchatgpt5434646+"
console.log(myobj)

myobj.greeting = function(){
    console.log("hi my name is anuj singh");
}
myobj.greetingtwo = function(){
console.log(`hi my name is ,${this.name}`);
}

console.log(myobj.greeting())
console.log(myobj.greetingtwo())