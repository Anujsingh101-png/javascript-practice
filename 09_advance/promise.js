const promise1 = new Promise(function(resolve,reject){
// Do asyn tasks 
// database , networking , criptograpghy
setTimeout(function(){
    console.log("this is producing code");    
    resolve()
}, 2000)
}
)

promise1.then(function(){  // also apply . then directly to producing code
    console.log("this is consuming code");
})

const promise2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("this is prodecing result");
        resolve({ name: "anuj singh" , sex : "male"})
    } , 2000)
})
promise2.then(function(user){
    console.log(user);  
})

const promise3 = new Promise(function(reject,resolve){
setTimeout(function(){  // data featching from database
let ERROR = false
if(!ERROR){
    resolve({ name: "anuj singh" , sex : "male"})
}else{

    reject("failed")
}
}, 5000)
})

promise3.then((user) => {
    console.log(user);
    return user.name
}).then((name) =>
{
    console.log(name);
    
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log("jskaghfsghuigugrfiurviaruifgieruogeuio")
})


console.log("asyn working");

// asyn method

const promise4 = new Promise(function(reject,resolve){
setTimeout(function(){  // data featching from database
let ERROR = true
if(!ERROR){
    resolve({ name: "raja" , sex : "others"})
}else{

    reject("kutta")
}
}, 5000)
})

async function datafetch() {
    try {
        const response = await promise4
        console.log(response);
        
    } catch(error) {
        console.log(error);
        
    }
}

datafetch()

// api
async function data() {
    try {
        const dt = await fetch('https://jsonplaceholder.typicode.com/users')
        const ans = await dt.json()
        console.log(ans);
        
    } catch (error) {
        console.log("error");
    }
}

data()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.