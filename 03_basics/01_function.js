
const saymyname = function(){
    console.log("a")
    console.log("n")
    console.log("u")
    console.log("j")
    console.log("s")
    console.log("i")
    console.log("n")
}

// saymyname -- reference
saymyname() // function call

const addnum = function( num1 , num2){
   const result = num1 + num2;
   return result;
}
console.log(addnum(3,6))

const currently = function(username = "sam"){
   if(!username){
      const r = "please enter the username"
        return r;
    }
    const result = `${username} just logged in `;
    return result;
}

console.log(currently(""))
// multiple arguments

const multiplearguments = function(val1,val2,...num){
    return num
}

console.log(multiplearguments(200,800,600,3535,67,856,54,65,7,568,5,334,6,3546,34,734,6,3))

// objects in function 
const user = {
    name : "anuj singh",
    age : 23,
    sex : "male" ,
}

const objectvalueinfunction = function(anyobject){
    console.log(`${anyobject.age} is my age , ${anyobject.name} is my name`)
}

objectvalueinfunction(user) //
//we can also create object directly in the function -- multiplearguments({
 // })
// array in function

const number = [200,700,300,800]

const arrayinfunction = function(anyarray){
 return anyarray[1];
}

console.log(arrayinfunction(number))

