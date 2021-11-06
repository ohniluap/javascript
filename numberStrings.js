//---> Conversions example

// Strings for integers "parseInte()"
var numberDecimal = parseInt('50');
console.log(numberDecimal);
console.log(typeof numberDecimal);

var hexadecimal = parseInt("0xF");
console.log(hexadecimal);

var alphabet = parseInt("ABCDE");
console.log(alphabet);

// Strings for floats "parseFloat()"
var mouse = parseFloat("29.90");
console.log(mouse);
console.log(typeof mouse);

var grape = parseFloat("5.00");
console.log(grape);
console.log(typeof grape);

var alphabet = parseFloat("ABC");
console.log(alphabet);

// Numbers for strings "toString()"
var num = 33;
var age = num.toString();
console.log(age);
console.log(typeof age);

// Literals template
const employee = {
    name: 'Dante',
    age: 40,
    profession: 'Software Engineer',
    wage: 10000.00
};

console.log(`The employee ${employee.name} is of age ${employee.age}. He works like ${employee.profession} and wins around R$ ${employee.wage}`); 