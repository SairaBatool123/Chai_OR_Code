// Programming Practice 

// on console you wrote console.log(window) => object
// console.log(window.document)
// console.dir(document)
// console.dir(document.links[2])
// document.getElementById('firstHeading') //yeh pori heading lye aye ga jis mai yeh id hoi
// document.getElementById('firstHeading').innerHTML = "<h1>Code</h1>" 

// ************************console******************
document.getElementById('title') //h1 pora lye aye ga
document.getElementById('title').id //'title'
document.getElementById('title').class //undefined
document.getElementById('title').className //'heading'
document.getElementById('title').getAttribute('id') //'title'
document.getElementById('title').getAttribute('class') //'heading'
document.getElementById('title').setAttribute('class' , 'trst') //undefined (value overwrite ker deta hai)
