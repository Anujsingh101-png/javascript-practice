const mynum = [2345,3456,578,789]

const mynewnum = mynum.map((num) => {return num * 100 })
console.log(mynewnum)

const mynewnum1 = mynum
.map((num) => num * 1000)
.map((num) => num + 1000)
.filter((num) => num + 3)
console.log(mynewnum1)