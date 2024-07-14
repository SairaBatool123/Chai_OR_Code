// String

var name = "sana"
var lastNo = 30

console.log("Your" + name + lastNo) //Yoursana30

// Modern Way String Interpolation placeholder
console.log(`Hello My Name is ${name} and my lastNo is ${lastNo}`) //Hello My Name is sana and my lastNo is 30

// another way of declared variable in js

let gameName = new String("sarah")
console.log(gameName) //[String: 'sarah'] position , length , alots of method/function in console 

console.log(gameName[0]) // key value access ==>s
console.log(gameName.__proto__) // another way ==>{} object

var namesAre1 = "saira sajida shafqat"
var namesAre2 = "saira-sajida-shafqat"
var forNewVar = "  sana  "
//Original value have not change because stack copy the value of the variable
console.log(gameName.length) //5
console.log(gameName.toLowerCase()) //sarah
console.log(gameName.toUpperCase()) //SARAH
console.log(gameName.charAt(4)) //h
console.log(gameName.indexOf("h")) //4
console.log(gameName.substring(0, 4)) //sara
console.log(gameName.slice(-5, 2)) //sa
console.log(forNewVar) //  sana  
console.log(forNewVar.trim()) //sana  start and end space remove
console.log(gameName.replace("rah", "na")) //sana
console.log((forNewVar.includes("batool"))); //false
console.log((forNewVar.includes("na"))); //true
console.log(namesAre1.split(" ")); //[ 'saira', 'sajida', 'shafqat' ]
console.log(namesAre2.split("-")); //[ 'saira', 'sajida', 'shafqat' ]

//Numbers AND Maths

var score = 1900000
console.log(score)

var number = new Number(100)
console.log(number); //[Number: 100] in console there is an avalible function 
console.log(number.toString().length) //3
console.log(number.toFixed(1)) //100.0
console.log(number.toFixed(2)) //100.00
console.log(number.toPrecision(2)) //1.0e+2
console.log(score.toLocaleString()); //1,900,000
console.log(score.toLocaleString("en-IN")); //19,00,000


// Maths console per likh do bhot sari value a jaye gi 
console.log(Math.abs(-4)) //4 Neg Positive convert ho jaye ga
console.log(Math.abs(4)) //4
console.log(Math.round(4.3)) //4
console.log(Math.round(4.5)) //5
console.log(Math.floor(4.5)); //4
console.log(Math.ceil(4.2)); //5
console.log(Math.max(4,3,5,6)); //3
console.log(Math.min(4,3,5,6)); //6
console.log(Math.random()); //0.20320402302 random aye gi between 0 and 1
console.log(Math.random()*6); //5.7010299315733555
console.log((Math.random()*10) + 1); //8.789661201050514  // 10 tk aye ga but 0 nhi aye ga confirm hai
console.log(Math.floor(Math.random()*10 + 1)); // ==> 7 // kahin bar shift kerne k bad bhi 0 dye sakta hai to + 1 

// find values between 10 to 20 minimum 10 to chahiye hi chahiye
var min = 10
var max = 20

                                           //range
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //12


// Date and Time 
// (jan,1,1970) date calculate hona start hoti hai and calculate always in millisecond
let myDate = new Date() //instant date with time
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
// 2024-07-13T01:43:42.320Z
// Sat Jul 13 2024 05:49:26 GMT+0500 (Pakistan Standard Time)
// Sat Jul 13 2024
// 2024-07-13T00:49:26.060Z
// 2024-07-13T00:49:26.060Z
// 7/13/2024
// 7/13/2024, 5:49:26 AM
// 05:49:26 GMT+0500 (Pakistan Standard Time)

console.log(typeof(myDate)); //object

let myCreateDate = new Date(2023, 0, 23) //single digit mai counting like array js take a month from 0 like jan 
console.log(myCreateDate); //2023-01-22T19:00:00.000Z
console.log(myCreateDate.toDateString()); //Mon Jan 23 2023

let myCreate = new Date(2023, 0, 23, 5, 3)
console.log(myCreate.toLocaleString()); //1/23/2023, 5:03:00 AM

// In Another Specific Formats 
let myCreatedDate1 = new Date("2023-01-23") //YY MM DD
console.log(myCreatedDate1.toDateString()); //Mon Jan 23 2023

let myCreatedDate2 = new Date("2023-01-23") //MM DD YY
console.log(myCreatedDate2.toDateString()); //Mon Jan 23 2023

let myTimeStamp1 = new Date() //2024-07-13T01:04:05.004Z
// OR 
let myTimeStamp = Date.now() //1720832786313
console.log(myTimeStamp) 
console.log(myTimeStamp1) 
console.log(myCreateDate.getTime()); //1674414000000 use for comparison from 1 jan
console.log(Math.floor(Date.now()/1000)); //milisec convert in second it gives decimal value OrMath.Round()


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); //6 //console.log(newDate.getMonth() + 1);

console.log(newDate.getDay()); //6 start from 0

// interesting here we can use parameters to custimize
newDate.toLocaleString('default'),{
    weekday : "long"
}

// Array
// mixed , resizable , access myarray[0] , shellow copy (same refernce original value can change) , Deep Copy(do not same refernce)
let myArray = [0,1,2,3,4] //element 
let userArray = ["saira" , "sana" , 6, 7, true]

console.log(myArray) //[0,1,2,3,4]
console.log(myArray.push(5)) //[0,1,2,3,4,5]
console.log(myArray.pop()) //[0,1,2,3,4]
console.log(myArray.unshift(4)) ////[4,0,1,2,3,4] time consuming every num charge there index
console.log(myArray.shift()) //[0,1,2,3,4]
console.log(myArray.includes(1)) //true
console.log(myArray.indexOf(9)) //-1
console.log(myArray.indexOf(3)) //3
console.log(myArray.join()) //0,1,2,3,4 newArr = myArray.join()  console.log(typeOf(newArr)) //string

//slice , splice

console.log("A " + myArray) //A 0,1,2,3,4


let mynew1 = myArray.slice(1,3)
console.log("B " + mynew1) // B 1,2
console.log("A " + myArray) // A 0,1,2,3,4
let mynew2 = myArray.splice(1,3) 
console.log("C " + mynew2) // C 1,2,3
console.log("A " + myArray) // A 0,4

let nameIs = ["saira","sajida" , "sana" ,"sarah"]
let lastName = ["saba" , "Sadia" , "shanza"]
// nameIs.push(lastName)
console.log(nameIs) 
// [ 'saira', 'sajida', 'sana', 'sarah', [ 'saba', 'Sadia', 'shanza' ] ]  

// console.log(nameIs[4][0]);//saba

var allname = nameIs.concat(lastName)
console.log(allname);//[ 'saira', 'sajida', 'sana', 'sarah', 'saba', 'Sadia', 'shanza' ]

//spread method
var allof = [...nameIs, ...lastName]
console.log(allof)

var myarr = [1,2,3, [4,5,6], 7 ,[6,7,[4,5]]]
var real = myarr.flat(Infinity)
console.log(real);
//   [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]

// is, from , of
console.log(Array.isArray("saira")); //false
console.log(Array.from("saira")); //[ 's', 'a', 'i', 'r', 'a' ]
console.log(Array.from({name: "saira"}));  // []

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ]

