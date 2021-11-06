//---> Using the operator +
let str1 = 'Hello, ';
let str2 = 'Mundo!';
let str3 = str1 + str2;

console.log(str3)
console.log(str1 + str2);
console.log(str1 + 'Grande ' + str2)

//---> Attention with numbers
let num1 = 1;
let num2 = '1';

console.log(num1 + num2);
console.log(num1 + 1);

//---> Avoiding problems with numbers
let str1 = '0';
let num1 = 1;
let num2 = 2;
let num3 = '3';

console.log(str1.concat(num1, num2, num3))



