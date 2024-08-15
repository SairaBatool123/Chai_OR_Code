// ............Conversion..............

let score = "33";
let valueIntNumber = Number(score);
console.log(typeof (valueIntNumber))

// const {score} = req.body;

// Be Carefull (INVESTIGATION OF NaN)
let score1 = "33abc"; //true=1 false/null=0 undefined=NaN string not converting "sana" = NaN
let valueIntNumber1 = Number(score1);
console.log(typeof (valueIntNumber1)) //number
console.log(valueIntNumber1) //NaN

//"33"=> 33
//"33abc" => NaN
// 1 = true
// 0 = false
// "" = false
// "sana" = true

let string = "saira"
let conversionString = Boolean(string)
console.log(conversionString); //true
console.log(typeof conversionString) //Boolean

let numberIs = 4
let stringNum = String(4)
console.log(stringNum) //4
console.log(typeof(stringNum)) //string

// ............Operation..............

let value = 3
let negValue = -value
console.log(negValue) //-3

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
let number = 10
// number++ OR ++number
console.log(number); //11

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

// treated as zero when occur > and < in =(equal) 1 because this converted in number and undefined with all operation is equal false
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

//summary avoid null and undefine with conversion

// == easily conversion
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

// what ever in parenthesis {} we called as objects key-values
let myObj = {
    greeting : "Hi",
    age : 20,
}

var myFunction = function(){
    console.log("Hello World");
} //function but not primitive is always in object so we call objectfunction

var bigNumber = 1234454354657678n
console.log(typeof(bigNumber)) //undefined

var nullValue = null
console.log(typeof(nullValue)) //object

// TypeOf Operator... https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
