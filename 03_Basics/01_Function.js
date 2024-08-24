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
addTwoNum() //NaN when we Call (Argument) (number hi nhi diya)
addTwoNum(3,7) //10
const resultIs = addTwoNum(5, 5) //10 hum (variable mai store kerwa saktyen hain)
console.log(`Your result is ${resultIs}`); //undefined
//function k ander jo hai wahin return bhi kerta hai nhi nhi var mai!

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
console.log(myfunction("")); // is your name
console.log(myfunction()); //undefined is your name

function Userpass(usernameIs) { //!usernameIs  !undefined  (undefined = false)
    if (usernameIs === undefined) {
        console.log("please enter a username");
        return 
    }
    return usernameIs + "Your Password in your username" //(yeh kabhi run na ho)
}
console.log(Userpass()) //please enter a username //undefined

/* argument don gi to defualt value overwrite ho jaye gi or default value hum parameter mai (usernameIs = "sam") is tarah dyen gye or yeh if mai jaye ga nhi or line no 44 run ker dye ga */
