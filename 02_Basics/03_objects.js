// Objects are create two ways : 1. Using Object Literals, 2.Using Constructor

// singleton Concept
// Object.create thi Constructor rite object bane, Singleton concept aani andar j aave


// object literals

const mySym = Symbol("key1")

// Object key ane value na form ma aave
// Key is always String format by default

const JsUser = {
    name: "Mohit",
    "full name": "Mohit Sabhadiya",
    [mySym]: "mykey1",
    age: 18,
    location: "Surat",
    email: "mohit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log|(JsUser["full name"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])
// console.log(JsUser[mySym]);


// Object ni value ne '.' thi access kari shakay.
// Athva to variable_name[key] aana thi pn access thay.

// JsUser.email = "mohit@chatgpt.com";
// Object.freeze(JsUser); // While object ne freeze karvama aave tyare teni koi pn value change kari shakay nay
// JsUser.email = "mohit@google.com";
// console.log(JsUser);

// function ne variable ni jem traet karo to pn chale
JsUser.greeting = function(){
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JsUser, ${this.name}`);
}
// console.log(JsUser.greeting); // [Function (anonymous)] function nu reference aave
console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo); // [Function (anonymous)] function nu reference aave
console.log(JsUser.greetingTwo());
