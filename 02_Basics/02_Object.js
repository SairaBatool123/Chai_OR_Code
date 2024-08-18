// Object.create //(Constructor Method)

const mySym = Symbol("key1")
// Object Literals
const detail = {
    name: "Saira",
    age: 20,
    [mySym]: "mykey", //[Symbol(key1)]: 'mykey'
    // mySym : "mykey",  // mySym: 'mykey',  
    location: "Pakistan",
    email: "sairagoogle.com",
    isLogin: false,
    lastLoginDays: ["monday", "saturday"]
}

console.log(detail.email) //sairagoogle.com
console.log(detail["email"]); //sairagoogle.com
console.log(detail[mySym]); //mykey

detail.name = "sajida"
// Object.freeze(detail)
detail.age = 12
console.log(detail);

detail.greeting = function () {
    console.log("Hi");
}

detail.greetingTwo = function () {
    console.log(`hello ${this.name}`);
}

console.log(detail.greeting) // function (anonymous)
console.log(detail.greeting()) // Hi
console.log(detail.greetingTwo()) // hello sajida

// myArray = ["h","i"]
// myArray[0] OR myArray[1]


// const tinderUser = new Object() //{} (empty object)
const tinderUser = {} //{}
tinderUser.id = "123abc"
tinderUser.name = "ali"
tinderUser.age = 18
console.log(tinderUser) // { id: '123abc', name: 'ali', age: 18 }

const regularUser = {
    email: "sairabatool787@gmail.com",
    fullName: {
        userfullname: {
            firstName: "saira",
            lastName: "batool"
        }
    }
}

console.log(regularUser.fullName.userfullname);
