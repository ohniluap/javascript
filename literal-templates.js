let str1 = 'Javascript';
let str2 = 'cool';

//---> Without literal templates
console.log("I'm writing codes in", str1)
console.log("I'm writing codes in" + str1)

//---> With literal templates
console.log(`I'm writing coders in ${str1}`);

//---> Concatenation of variables with literal templates
console.log(`Formatting strings in ${str1} is ${str2}!`)

//---> Break line
console.log("We can skip lines using the \/n \n\nThat way")

console.log(`We can skip lines using the



That way`)

//---> Expressions with literal templates
let bool1 = true;

const getValue = (num) => {
    return num + num
}

console.log(`The opossite of true is ${!bool1}`)
console.log(`1 + 1 = ${1 + 1}`);
console.log(`Result: ${getValue(10)}`)