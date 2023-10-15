// Array

const myArr = [0, 1, 2, 3, 4, 5]
// const myHeors = ["ironman","loki","thor"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[]);


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.index(9));


// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



// slice, splice
 
// console.log("A ",myArr); // A [0,1,2,3,4,5]

// const myn1 = myArr.slice(1, 3)

// console.log(myn1); //[1,2]
// console.log("B ",myArr);  // B [0,1,2,3,4,5]

const myn2 = myArr.splice(1, 3)
console.log("C ",myArr);  // C [0,4,5]  // IMPORTANT
console.log(myn2);  // [1,2,3]