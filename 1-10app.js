/*Prefer not to use var because of issuse in block scope and functional scope */
console.log("Saira")

// Variable
const accountId = 123345;
let accountEmail = "sairabatool787@gmail.com";
var accountPassword = "Saira123gggg";
let acountstate;

// accountPassword = 23
// accountEmail = "sajidabaool123@gmail.com";
// console.log(accountEmail);
// console.log(accountPassword);

// const accountId = 123345;
// accountId = 3; //not allowed
// console.log(accountId) //Error because const mai update nhi ho sakta


console.table([accountId,accountEmail,accountPassword,acountstate])

// "use strict"; treat all JS code as newer version

// alert("Hello") // not run on terminal we will write on console
// alert(3+3) //we are using nodejs , not a browser


// DataType
let name ="Saira"
let age = 18;
let isLoggedIn = false;

// number = 2 to power of 53
// bigint  trading,stockmarking
// string = ""
// boolean = true / false ;
// null //represent empty value Or we assign var name = null
// undefined not define in variable or variable declear kr k chor diya or nichye call ker liya
//symbol uniquness
// object console.log(typeof null); //object

// let score = "33";
// console.log(typeof score); 
// console.log(typeof(score)); //Method

// ............Converstion..............

// let valueIntNumber = Number(score);
// console.log(typeof (valueIntNumber))

// // Be Carefull (INVESTIGATION)
// let score1 = "33abc"; //put this and answer it true=1 false/null=0 undefined=NaN string not converting "sana" = NaN
// let valueIntNumber1 = Number(score1);
// console.log(typeof (valueIntNumber1)) //number?
// console.log(valueIntNumber1) //NaN

// 1 = true
// 0 = false
// "" = false
// "sana" = true

// let string = "saira"
// let conversionString = Boolean(string)
// console.log(conversionString);
// console.log(typeof conversionString)

// let numberIs = 4
// let stringNum = String(4)
// console.log(stringNum)
// console.log(typeof(stringNum))

// ............Operation..............
// let value = 3
// let negValue = -value
// console.log(negValue) //-3

// Basic Operations / Arithmetic Operations

console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2%2)
console.log(2/2)
console.log(2**2)

// problem 
console.log("2" + 2) //22
console.log(2 + "2") //22
console.log(2 + 1 + "2") //32
console.log("2" + 2 + 1) //221

// Good Practice 
console.log((2+3) * 4 % 2)

// prefix and postfix read from mdn documentation
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment

// ............Comparision..............
// console.log(2>1)
// console.log(2<1)
// console.log(2<=1)
// console.log(2!=1)
// console.log(2==1)

// problem when we are not comparing same data type 
console.log("2">1) //true
console.log("02">1) //true

// treated as zero when occur > and < in =(equal) 1 because this converted in number and undefine with all operation is equal false
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

//summary avoid null and undefine with conversion


// strick check  === datatype and value
console.log("2" === 2); //false

// NOTES REVIEW FROM YOUR COPY
var id = Symbol("123")
var yourId = Symbol("123")

console.log(id === yourId) //false

var bigNumber = 1234454354657678n
console.log(bigNumber) //1234454354657678n

// Array , Objects , Functions

var heros = ["salman khan" , "fahad" , "fawad"]

// what ever in parenthesis {} we called as objects 
let myObj = {
    greeting : "Hi",
    age : 20,
}

var myFunction = function(){
    console.log("Hello World");
} //function but not primitive is always in object so we call objectfunction

var bigNumber = 1234454354657678n
console.log(typeof(bigNumber)) //undefined / BigInt

var nullValue = null
console.log(typeof(nullValue)) //object

// TypeOf Operator... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

