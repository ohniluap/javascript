/* --> Operators

<       smaller 
<=      lesser equal
>       bigger
>=      greater equal
==      equal values
===     equal values and typing
&&      and
||      or 
!==     not equal
!       denial

*/

// Denial 
const active = true;
if (!active) {
    console.log('IF!');
} else {
    console.log('Else');
}

// check equality
const status = 200;
if (status === 200) {
    console.log('OK!');
} else if (status === 400) {
    console.log('Error!');
}else {
    console.log('Unknown status');
}

// not necessary "{}" if using a single line
const status = 200;
if (status === 200) console.log('OK!');
else if (status === 400) console.log('Error!');
else console.log('Unknown status');

// ternary operator (? = true and : = false)
const status = 200;
const message = (status === 200) ? 'OK!' : 'Error!'; 
console.log(message);

// check string equality
const name = "Paulo";
if (name === "Paulo") {
    console.log('True!');
} else {
    console.log('False')
}

// check number and string equality
const name = "42";
if (name === 42) {
    console.log('True!');
} else {
    console.log('False.')
}

// and -- or
const status = 400;
const active = false
if (status === 200 && active === true) {
    console.log('True!')
} else {
    console.log('False.')
}

const status = 400;
const active = false
if (status === 200 || active === true) {
    console.log('True!')
} else {
    console.log('False.')
}


// lower value
const num1 = 200;
if (num1 < 300) {
    console.log('True!')
} else {
    console.log('False.')
}


// less equal value
const num1 = 200;
if (num1 <= 300) {
    console.log('True!')
} else {
    console.log('False.')
}

// highest value
const num1 = 200;
if (num1 > 300) {
    console.log('True!')
} else {
    console.log('False.')
}

// greater equal value 
const num1 = 200;
if (num1 >= 300) {
    console.log('True!')
} else {
    console.log('False.')
}

// different value
const num1 = 200;
if (num1 !== 300) {
    console.log('True!')
} else {
    console.log('False.')
}