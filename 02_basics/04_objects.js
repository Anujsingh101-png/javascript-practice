const tenderuser = {} // non singolton obj
const tender2 = new Object()

tenderuser.ID = "djgvbukdb"
tenderuser.name = "dfjhidfhbi"
tenderuser.sex = "ejhgudtgh"

console.log(tenderuser)

// objects in objects
const user = {
    email : "dgfuyufvgugfvuguf",
    name : "anuj",
    type : {
        fullname : {
            class : "dfjkhgjthg",
            sex : "dfhjkfgibsdhb",
        }
    }
}
console.log(user.type.fullname.sex)

const obj1 = { a : 1 , b : 2 , c : 3}
const obj2 = { b : 34 , f : 5675 , r : "jhfgusdfuvgsdf"}

//const obj3 = {obj1 , obj2} // now object in a object
 console.log("obj3") 

 //adding the objects 
 const obj4 = Object.assign({},obj1,obj2)
console.log(obj4)

const obj5 = {...obj1,...obj2,}  // 90% of time it is being used
console.log(obj5)

// objects in array
const sexy = [
    {
        name : "fkhgjedghj",
        id : "fgbhs",
    },
     {
        name : "fkhgjedghj",
        id : "fgbhs",
    },
     {
        name : "fkhgjedghj",
        id : "fgbhs",
    },
     {
        name : "fkhgjedghj",
        id : "fgbhs",
    }
] 

console.log(sexy[1])

console.log(Object.keys(obj5))  // show in array
console.log(Object.values(obj5))
console.log(Object.entries(obj5));
console.log(obj5.hasOwnProperty('isL'));
