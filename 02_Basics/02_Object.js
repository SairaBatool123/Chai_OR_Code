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

// .................................................................. PART # 2 .................................................................................
// const tinderUser = new Object() //{} (empty object) singleton
const tinderUser = {} //{} non-singleton
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

console.log(regularUser.fullName.userfullname); //{ firstName: 'saira', lastName: 'batool' }

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

//target and source
// const obj3 = {obj1 , obj2} //object in object
// const obj3 = Object.assign({}, obj1, obj2) //for the granted {} { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const obj3 = { ...obj1, ...obj2 } //90% use latest version
console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const users = [
    {
        id: 1,
        email: "saira34@gmail.com"
    },
    {
        id: 1,
        email: "saira34@gmail.com"
    },
    {
        id: 1,
        email: "saira34@gmail.com"
    }
]
users[1].email //loop through
console.log(tinderUser); //{ id: '123abc', name: 'ali', age: 18 }

console.log(Object.keys(tinderUser)); //[ 'id', 'name', 'age' ]
console.log(Object.values(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'ali' ], [ 'age', 18 ] ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'ali' ], [ 'age', 18 ] ]
console.log(tinderUser.hasOwnProperty('name')); //true
// inspect se important methods dekh saktye hain looping top kerne k liye bhi kuch methods hotyen hain...77 

// .................................................................. PART # 3 .................................................................................

const course = {
    courseName : "Web Dev",
    price : "999",
    courseIntructor : "sir hitesh"
}
// course.courseInstructor
// course[1].courseInstructor
const {courseIntructor} = course
// const {courseIntructor : instructor} = course //destructure
console.log(courseIntructor) //sir hitesh
console.log(instructor); //sir hitesh

// const navbar = () => {

// }
// navbar(company = "saira_brand")

// {
//     "name" : "saira" ,
//    "price" : 'free'
// } // JSON structure

// API in Array Format 
[
    {},
    {},
    {}
]
// famouse API random user me result(sample response)