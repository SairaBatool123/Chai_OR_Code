// Date and Time 

// (jan,1,1970) date calculate hona start hoti hai and calculate always in millisecond
let myDate = new Date() //instant date with time
console.log(myDate);// 2024-07-13T01:43:42.320Z
console.log(myDate.toString());// Sat Jul 13 2024 05:49:26 GMT+0500 (Pakistan Standard Time)
console.log(myDate.toLocaleString());// 7/13/2024, 5:49:26 AM
console.log(myDate.toDateString());// Sat Jul 13 2024
console.log(myDate.toISOString());// 2024-07-13T00:49:26.060Z
console.log(myDate.toJSON());// 2024-07-13T00:49:26.060Z
console.log(myDate.toLocaleDateString());// 7/13/2024
console.log(myDate.toTimeString());// 05:49:26 GMT+0500 (Pakistan Standard Time)

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
let myTimeStamp = Date.now() //1720832786313 in milisecond
console.log(myTimeStamp) 
console.log(myTimeStamp1) 
console.log(myCreateDate.getTime()); //1674414000000 use for comparison from 1 jan
console.log(Math.floor(Date.now()/1000)); //milisec convert in second it gives decimal value Or Math.Round()


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); //6 //console.log(newDate.getMonth() + 1); this use for not confuse our user

console.log(newDate.getDay()); //6 start from 0

// interesting here we can use parameters to custimize
newDate.toLocaleString('default'),{
    weekday : "long"
}
