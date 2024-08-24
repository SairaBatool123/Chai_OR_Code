function one() {
    const username = "saira"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    console.log(website);//error

    two() //yeh kabhi excute howa hi nhi //hitesh
}
one() //no-execution

if (true) {
    const userName = "sana"
    if (userName === "sana") {
        const website = " youtube"
        console.log(userName + website);
    }
    console.log(website); // error not accessable
}
console.log(userName); // error not accessable

// ********************* interesting *********************

// addone(5) // console.log bhi ker lo = 6

//  2 techniques
function addone(num) {
    return num + 1
}
addone(5)

// addTwo(5) error not accessiable

// variable mai bhi store kia ja sakta hai
const addTwo = function (num) {
    return num + 2
}
addTwo(5)