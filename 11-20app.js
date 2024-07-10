// String

var name = "sana"
var lastNo = 30

console.log("Your"+ name + lastNo) //Yoursana30

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
console.log(gameName.substring(0,4)) //sara
console.log(gameName.slice(-5,2)) //sa
console.log(forNewVar) //  sana  
console.log(forNewVar.trim()) //sana  start and end space remove
console.log(gameName.replace("rah","na")) //sana
console.log((forNewVar.includes("batool"))); //false
console.log((forNewVar.includes("na"))); //true
console.log(namesAre1.split(" ")); //[ 'saira', 'sajida', 'shafqat' ]
console.log(namesAre2.split("-")); //[ 'saira', 'sajida', 'shafqat' ]