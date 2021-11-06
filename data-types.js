//---Number
let age = 21;
console.log(age);

//---Float
let priceMouse = 19.99;
console.log(priceMouse);

//---String
let name = 'Paulo Roberto';
console.log(name)

//---Boolean (True or False)
let trueName = true;
console.log(trueName)

let falseName = false;
console.log(falseName)

//---Date
let dateToday = new Date();
console.log(dateToday)

//---Function
let result = addNumbers(5, 2);

function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(result)

//---Array
let fruits = ["Banana", "Strawberry", "Pineapple"];
console.log(fruits)

//---> Object
const people = {
    name: 'Paulo Roberto',
    lastName: 'Moraes',
    age: 21
};
console.log(people)


//---> Special data types

//---> NaN (is number)
let num = NaN;
console.log(typeof num);  // "number"
console.log(num = NaN);  // false
console.log(num == NaN);  // false

//---> Null
let anyNumber = null;
console.log(anyNumber)

//---> Undefined 
let car;
car = undefined;
console.log(car)

//---> Typeof (check types)
console.log(typeof 1);
console.log(typeof 'Paulo Roberto');

//---> Instaceof  (identify prototype)
class Car {};
let car = new Car();
console.log(car instanceof Car);

//---> Strict equality (Comparing value and type)
console.log(20 === 20);
console.log('20' === 20);

//---> Loose equality (Compare values)
console.log(20 == 20);
console.log('1' == 1);
