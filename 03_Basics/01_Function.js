//Functions
function sayMyName() {
    console.log("s")
    console.log("a")
    console.log("n")
    console.log("a")
}

// reference //execution() 
sayMyName()
//pass
function addTwoNum(num1, num2) { //Function definition (parameters)
    console.log(num1 + num2) //return
}
// addTwoNum() //NaN when we Call (Argument) (number hi nhi diya)
// addTwoNum(3,7) //10
// const resultIs = addTwoNum(5, 5) //10 hum (variable mai store kerwa saktyen hain)
// console.log(`Your result is ${resultIs}`); //undefined

// Another Ways 
function addTwoNum(num1, num2) {
    // var result = num1 + num2
    // return result
    // OR 
    return num1 + num2
} //both result are diff in function / out function
const result = addTwoNum(3, 5)
console.log("Result Is", result) //Result Is 8
//return karyen gye to ap os ko variable mai store or direct console.log dono ker saktye hain

function myfunction(yourName) { //(samjh lon ga)
    return `${yourName} is your name` //add ker don ga
}
console.log(myfunction("saira")); //saira is your name
console.log(myfunction()); //undefined is your name

function Userpass(usernameIs) { //!usernameIs  !undefined  (undefined = false)
    if (usernameIs === undefined) {
        console.log("please enter a username");
        return //please enter a username
    }
    return usernameIs + "Your Password in your username" //(yeh kabhi run na ho)
}
// console.log(Userpass("")) // Your Password in your username
console.log(Userpass()) //undefined

// .................................................part # 2..........................................
// rest operator(spread operator) ...
function calculateCartPrice1(...num1) {
    return num1
}
console.log(calculateCartPrice1(200, 300, 400)); //[200,300,400]

function calculateCartPrice(value1, value2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 2000)); //[400,2000] rest values

const user = {
    name: "saira", 
    price: 99
}
function handleObject(anyobject){
console.log(`User name is ${anyobject.name} and price is ${anyobject.price}`)
}
// handleObject(user)
// OR 
handleObject({
    user:"ali",
    price : 122
})

const myNewArry = [200,300,40,500]
function returnSecValue(){
    return getArray[1]
}
console.log(returnSecValue(myNewArry));
console.log(returnSecValue[200,300,40,500]); //400


// function one() {
//     const username = "saira"
//     function two() {
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);//error
//     two()
// }
// one()

// if(true){
//     const userName = "sana"
//     if(userName === "saira"){
//         const website = " youtube"
//         console.log(userName + website);
//     }
//     console.log(website);
// }
// console.log(userName);

// //  2 techniques
// function addone(num){
//     return num + 1
// }
// addone(5)

// // variable mai bhi store kia ja sakta hai
// const addTwo = function(num){
//     return num + 2
// }
// addTwo(5)
