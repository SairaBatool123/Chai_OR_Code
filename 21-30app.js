// .............For Loop............

let array = "sana"

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element)
    //s
    //a
    //n
    //a 
}

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element)
    // 0
    // 1
    // 2
    // 3
    // 4
    // 5
    // 6
    // 7
    // 8
    // 9
    // 10
}

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("Its my favorite Number")
    }
    console.log(element)
    // 1
    // 2
    // 3
    // 4
    // Its my favorite Number
    // 5
    // 6
    // 7
    // 8
    // 9
    // 10
}

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop value is ${i}`)
    for (let j = 0; j <= 10; j++) {
        // console.log(`inner loop value is ${j} and inner loop ${i}`)
        console.log(i + "*" + j + "=" + i * j)
    }
}

let myArray = ["saira", "sajida", "shafqat"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    // saira
    // sajida
    // shafqat
}

//break AND continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`)
        break
    }
    console.log(i)
    // 1
    // 2
    // 3
    // 4
    // Detected 5
}

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log(`Detected 5`)
        continue
    }
    console.log(i)
    // 1
    // 2
    // 3
    // 4
    // Detected 5
    // 6
    // 7
    // 8
    // 9
    // 10
}