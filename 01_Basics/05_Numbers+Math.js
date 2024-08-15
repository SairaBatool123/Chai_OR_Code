//Numbers AND Maths
var score = 1900000
console.log(score)

var number = new Number(100)
console.log(number); //[Number: 100] in console there is an avalible function 
console.log(number.toString().length) //3 character (string)
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