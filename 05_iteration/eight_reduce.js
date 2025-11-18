let arr = [1,2,3]

const mynum = arr.reduce((acc , currentval) => {
   console.log(`accumulator : ${acc} === currnetval ${currentval}`);
    return acc + currentval
} ,0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

