/*Prefer not to use var because of issuse in block scope and functional scope */
console.log("Saira")

// Variable
const accountId = 123345;
let accountEmail = "sairabatool787@gmail.com";
var accountPassword = "Saira123gggg";
let acountstate;

// accountId = 3;
accountPassword = 23
accountEmail = "sajidabaool123@gmail.com";

// console.log(accountId)
// console.log(accountEmail);
// console.log(accountPassword);

console.table([accountId,accountEmail,accountPassword,acountstate])

// "use strict"; treat all JS code as newer version

// alert("Hello") // not run on terminal we will write on console
// alert(3+3) //we are using nodejs , not a browser


// DataType
let name ="Saira"
let age = 18;
let isLoggedIn = false;

// number = 2 to power of 53
// bigint  trading,sockmarking
// string = ""
// boolean = true / false ;
// null //represent empy value Or we assign var name = null
// undefined not define in variable
//symbol uniquness

// object 
// console.log(typeof null); //object

// let score = "33";
// console.log(typeof score); 
// console.log(typeof (score)); //Methods

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

let string = "saira"
let conversionString = Boolean(string)
console.log(conversionString);
console.log(typeof conversionString)

// let numberIs = 4
// let stringNum = String(4)
// console.log(stringNum)
// console.log(typeof(stringNum))