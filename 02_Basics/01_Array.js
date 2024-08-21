// Array
// mixed , resizable , access myarray[0] , shellow copy (same refernce original value can change) , Deep Copy(do not same refernce)
let myArray = [0,1,2,3,4] //element 
let userArray = ["saira" , "sana" , 6, 7, true]

console.log(myArray) //[0,1,2,3,4]
console.log(myArray[0]) //0 

const myArray2 = new Array(1,2,3,4)
console.log(myArray2) //[1,2,3,4] 

//.......Array Methods......
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

// 2nd Part  
let nameIs = ["saira","sajida" , "sana" ,"sarah"]
let lastName = ["saba" , "Sadia" , "shanza"]
// nameIs.push(lastName)
console.log(nameIs) 
// [ 'saira', 'sajida', 'sana', 'sarah', [ 'saba', 'Sadia', 'shanza' ] ]  

// console.log(nameIs[4][0]);//saba

var allname = nameIs.concat(lastName)
console.log(allname);//[ 'saira', 'sajida', 'sana', 'sarah', 'saba', 'Sadia', 'shanza' ]
// OR 
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
console.log(Array.from("saira")); //[ 's', 'a', 'i', 'r', 'a' ]                  {} object  
console.log(Array.from({name: "saira"}));  // nhi bana paye ga to [] dye ga

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ];