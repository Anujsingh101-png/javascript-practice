const mynum = [54,236,367,568,789,790]
const values = mynum.forEach((i) => {
    //console.log(i)
     return i;
})
console.log(values)

const value = mynum.filter((i) => {
    return i > 200;
} )

console.log(value)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userdata = books.filter((bk) => {
    return bk.genre === 'History';
  })
 console.log(userdata)


 let userdata2 = books.filter((bk) => {
    return bk.publish >= 2000 && bk.genre === 'Science'
 })

 console.log(userdata2)

