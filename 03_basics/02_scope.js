let a = 344   // here veriable is defined in global scope
const y = 34235432

if(true){
    let x = 5454
     console.log(a)
}

console.log(y)
// console.log(x)   // here the veriable is defind in block scope

// in function
function one(){
    const a = "anuj singh"
   // console.log(x)
    function two(){
        console.log(a)  // same parent child concept
        let x = 345
    }

    two()
}

one()

// in if else
    if(true){
        const a = "anuj singh"
        if(a === "anuj singh"){
            const b = "riya"
            console.log(a + b)
        }
   // console.log(b)

    }
  //  console.log(a)

  // methods of writing function
 
 addnum(5)  
 
  const addnum = function(num){   // decleare function in variable
     return num + 1;
  }

 subnum(5)

  function subnum(num){         // decleare function  
    return num - 1;
  }

  