// .................................................part # 2..........................................

// rest operator(spread operator) ...
function calculateCartPrice1(...num1) {
    return num1
}
console.log(calculateCartPrice1(200, 300, 400)); //[200,300,400]

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 2000)); //[400,2000] rest values

const user = {
    name: "saira",
    price: 99
}
function handleObject(anyobject) {
    console.log(`User name is ${anyobject.name} and price is ${anyobject.price}`)
}
handleObject(user) //User name is saira and price is 99 // (type safety check ker lena 'prices? wrong') 
// OR (direct object bhi pass ker saktye hain)
handleObject({
    username: "ali",
    price: 122
})

// *********************************Array************

const myNewArry = [200, 300, 40, 500]
function returnSecValue() {
    return getArray[1]
}
console.log(returnSecValue(myNewArry));
console.log(returnSecValue[200, 300, 40, 500]); //400


