// primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); //false

const bigNumber = 73929892229282939898383292082n



// Refrence (Non primitive)

// array, objects, functions

const heros = ["iron-man","thor","strange"]
let myObj = {
    name: "neel",
    age: 19,
}

const myFunction = function(){
// console.log("Hello World");
}

console.log(typeof bigNumber); 



// ---------------------------
// Memory 
// Stack(Primitive), Heap(Non-Primitive)

// Stack = copy the value and return copy value
// Heap = return original value


