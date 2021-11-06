//---> Creating array with data
let arr1 = ["Paulo", 21, true];
console.log(arr1);

//---> Array length
console.log(arr1.length);

//---> Array index
console.log(arr1[1]);
console.log(Object.keys(arr1));   // directly access the object key
console.log(Object.values(arr1));   // directly access the value object


//---> Inserting data into the created array
let arrayLength = 2
let arr2 = Array(arrayLength);  // setting array size

arr2[0] = 55
arr2[1] = true

console.log(arr2);


let arr3 = [];  // without setting array size

arr3[0] = 33
arr3[1] = true
arr3[2] = "Paulo Roberto"

console.log(arr3);


//---> inserting data into array already with data
let arr4 = ["Paulo", 21, true];

arr4.push(33, "Roberto")

console.log(arr4);

// With spread operator (ES6)

let arr5 = ['A', 'B'];
let arr6 = [...arr5,'C', 'D'];
console.log(arr6);

//---> Concatenating arrays

let numbers = [1, 2];
let moreNumbers = [3, 4];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers);


let data = ["Paulo", 21, true];
let moreData = ["Claudia", 15, false];

data.push(...moreData);

console.log(data);