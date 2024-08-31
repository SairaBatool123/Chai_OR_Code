// Programming Practice 

// ************************console******************

// on console you wrote console.log(window) => object
console.log(window.document)
console.log(document)
console.dir(document)
console.log(document.baseURI)
console.dir(document.links[2])
document.getElementById('firstHeading') //yeh pori heading lye aye ga jis mai yeh id hoi
document.getElementById('firstHeading').innerHTML = "<h1>Code</h1>" 

document.getElementById('title') //h1 pora lye aye ga
document.getElementById('title').innerHTML='<h1>Chai OR Code</h1>'

// -------------------------Part # 2-----------------------

document.getElementById('title').id //id ki value dega => 'title'
document.getElementById('title').class //undefined
document.getElementById('title').className //'heading'
document.getElementById('title').getAttribute('id') //'title'
document.getElementById('title').getAttribute('class') //'heading'
document.getElementById('title').setAttribute('class' , 'trst') //undefined but html mai set ho gai hogi (value overwrite ker deta hai)
const title = document.getElementById('title') //title or h1 pora lye aye ga
title.style.backgroundColor = 'red' //(in every line you could use title.style... any thing you want)

// get Value 
title.textContent //(jitna text html mai nazar a raha hai otna hi nazar aye ga)  //'Dom Learning'
title.innerHTML //(is mai wo os content k ander ki html bhi jese span ka tag bhi bana ker dye ga or styling wegera bhi sb dekhaye ga)  //'Dom Learning'
title.innerText //(mai koi span don os mai styling none don wo nazar nhi aye ga but is se dekhai dye ga console mai) //'Dom Learning'

// (HTML ko support kerta hai Baki nhi kertye)
document.getElementsByClassName('heading') //Html collection dye ga

document.querySelector('h2') //<h2>Hi</h2>
document.querySelector('#title') //<h1></h1> jitna hai sb kuch a jaye ga
document.querySelector('.heading') //<h1></h1> jitna hai sb kuch a jaye ga
document.querySelector('input')
document.querySelector('input[type:password]') //attribute (pora input ka tag dye dye ga)
document.querySelector('p:first-child')
const myul = document.querySelector('ul')
myul.querySelector('li') //first item select hoga
const turnInGreen = myul.querySelector('li')
turnInGreen.style.backgroundColor = 'green'
turnInGreen.style.padding = '10px'
turnInGreen.innerText //'one'
turnInGreen.innerText = 'five' //'five'
var templist = document.querySelectorAll('li') // (Node list) sare li dye dye ga
// collection of html mil jatyen hain or yeh jb mil jaye to check karo prototype mai map function hai nhi hai to yeh array nhi hai array mai bydefault miltyen hain 
templist[2].style.color="blue"
// OR 
templist.forEach(function (l){ //call back function
    l.style.backgroundColor= 'pink' //shift + enter
})
// querySelectorAll se NodeList aye gi ap ko var_name[] dena hoga lazmi 
var templists = document.querySelectorAll('h1') //sare li dye dye ga
templists[0].style.color="blue" //chahye aik bhi kiu na ho
const myArray=Array.from(templist) //converted in array =>map , push , foreach
myArray.forEach(function(li){
    li.style.color = 'orange'
})

myH2.forEach(function (h){
    h.style.color='red'
    h.style.backgroundColor='blue'
    h.innerText = "saira"
})


