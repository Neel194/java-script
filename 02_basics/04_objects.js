// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Neel1"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname1: {
        userfullname: {
            firstname: "Neel",
            lastname: "Patel"
        }
    }
}

// console.log(regularUser.fullname1);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

// const obj3 = { obj1, obj2}
// const Obj3 = Object.assign(obj1,obj2)
// const Obj3 = Object.assign({},obj1,obj2)

const Obj3 = {...obj1,...obj2}
// console.log(Obj3);

const users = [
    {
        id: 1,
        email: "n@gmail.com"
    }
]

// users[1].email
// console.log(tinderUser);

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); //[ '123abc', 'Neel1', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Neel1' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true
console.log(tinderUser.hasOwnProperty('isLogged')); //false