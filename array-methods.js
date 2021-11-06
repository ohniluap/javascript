//---> Adding value to end of array (push method)
const array1 = ['A', true, 2];
console.log(array1.push('new'));
console.log(array1);

// removing last added value (pop method)
console.log(array1.pop());
console.log(array1);

//---> Adding value at the beginning of the array (method unshift)
const array2 = ['B', false, 3];
console.log(array2.unshift('value'));
console.log(array2);

// Removing the first value from the array (method shift)
console.log(array2.shift());
console.log(array2);

//---> Joining and creating a new array (method concat)
const array1 = ['A', true, 2];
const array2 = ['B', false, 3];

let newArray = array1.concat(array2);
let newArray2 = array2.concat([1, 2, 4])

console.log(newArray); 
console.log(newArray2); 