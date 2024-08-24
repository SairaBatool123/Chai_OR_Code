const user = {
    username: "saira",
    price: 99,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to our website`);
        console.log(this); //current context ko refer kerna ho to (context ki bat kerta hai)
    }
}
user.welcomeMessage() //saira welcome to our website
user.username = "sam"
user.welcomeMessage()
// this 
console.log(this);  //{} (node enviroment empty object)
console.log(this);  // window...(browser global object)


//arrow function mai this nhi hota hai
function chai() {
    //let username = "sana"
    // console.log(this.username); //undefined (function k ander hum use nhi ker pa rahye hain)
    console.log(this);
}
chai()
//node enviroment k ander jb function k ander to bhot sari values a rahi hain


// const chai1 = function () {
//     let nameij = "sana"
//     console.log(this.nameij);
// }
// chai1() //undefined


const chai1 = () => {
    let nameij = "sana"
    console.log(this.nameij);
    console.log(this); //{}
}
chai1() //undefined


// syntax Of arrow-function 
// () => {

// }


//explicitily return
// variable mai bhi store ker saktyen hain 
const addTwo = (num1, num2) => {
    return num1 - num2
}
console.log(addTwo(5, 5)); //0


//implicit return (mai maan leta hon ap ko likhne ki zaroorat nhi hai) one line statement
const addTwo2 = (num1, num2) => num1 - num2
// OR 
// const addTwo2 = (num1, num2) => (num1 - num2)

console.log(addTwo2(5, 5)); //0

// arrow-function for object ({}) (must)
const addTwo3 = (num11, num12) => ({ loginName: "saira" })
console.log(addTwo3(2, 2)); //{ loginName: 'saira' }


// const ArrayIs = [2, 4, 5, 6] 

// ArrayIs.forEach(function(){})
// ArrayIs.forEach(() => {})
// ArrayIs.forEach(() => ())
