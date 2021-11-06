const x = 0;
const y = null;
const z = undefined; 
const w = "";

console.log(Boolean(x))
console.log(Boolean(y))
console.log(Boolean(z))
console.log(Boolean(w))

// for denial using !
if (!x) console.log('x has a value');
else console.log('x does not have a value')

// check equality
const name = 'paulo';
if (name === 'Paulo') {
    console.log('The values are the same')
} else console.log('Values not are the same')

// localeCompare

// returns negative value if they are different and positive if they are equal
const name = 'paulo';
console.log(name.localeCompare('Paulo'));


const status = 500;
if (status === 200) {
    console.log('OK!');
} else if (status === 400 || status === 500) {
    console;log('Error!')
} else {
    console.log('Unknown status');
}


const status = 200;
switch (status)  {
    case 200:
        console.log('OK!');
        break;
    case 400:
    case 500:
        console.log('Error!')
        break;
        default:
            console.log('Unknown value');
            break;
}

