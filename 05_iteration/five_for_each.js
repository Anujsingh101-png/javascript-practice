const a = ["fgh","dsghtedhrth","tyhtfhtyhre","ruytuityuf"]

a.forEach((item) => {
    console.log(item)
})

function it(items){
 console.log(items)
}

a.forEach(it)

a.forEach((i,b,a) => {
    console.log(i,b,a)
})

const nf = [
    {
        "name" : "1nf",
        "work" : "atomic",
    } ,
    {
        "name" : "2nf",
        "work" : "prim at -> non prime / prime",
    }
    ,
    {
         "name" : "bcnf",
         "work" : "non p , prime -> prime "
    }
]

nf.forEach((it) => {
    console.log(it.name,"=>",it.work)
})