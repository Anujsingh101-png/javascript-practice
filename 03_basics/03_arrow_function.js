const one = {
    name : "anuj singh",
    age : 23,

     chai : function(){
      console.log(`${this.name} , welcome to wonderland`)  // for using the contest within that scope
      console.log(this)
    }
}
one.chai()
one.name = "ajay"
one.chai()

console.log(this)

function g(){
  const a = "anuj"
  console.log(this.a)
  console.log(this)
}

g()

const sex = (num1,num2) => {
  return num1 + num2;
}

const porn = (num1,num2) => (num1 + num2)


const read = (num1,num2) => ({name : "anuj singh"})

console.log(g(),sex(36,3647),porn(347,46),read())