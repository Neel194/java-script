// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Neel",
    "full name": "Neel Patel",
    [mySym]: "mykey1",
    age: 19,
    location: "Gujarat",
    email: "neel@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(typeof JsUser.mySym); //string
console.log(JsUser[mySym]);

JsUser.email = "Neel1@google.com"
// Object.freeze(JsUser)
JsUser.email = "Neel1@chatgpt.com"

console.log(JsUser["email"]); //google one because of freeze

JsUser.greeting = function() {
    console.log("Hello Js User");
}
JsUser.greetingTwo = function() {
    console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting); 
console.log(JsUser.greeting()); 
console.log(JsUser.greetingTwo()); // Hello Js User
