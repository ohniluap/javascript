const names = ['Cynthia', 'Glaucia', 'Diego'];
const data = [
    {name: "Cynthia", active: true},
    {name: "Glaucia", active: true},
    {name: "Diego", active: true},
];

//---> Loop while
let index = 0;
while (index < data.length) {
    const value = data[index];
    console.log(value.active);
    index++;
}


let index = 0;
while (index < names.length) {
    const name = names[index];
    console.log(name);
    index++;
}


//---> Loop for
for (let index = 0; index < names.length; index++) {
    const name = names[index];
    console.log(name);
}


for (let index = 0; index < data.length; index++) {
    const value = data[index];
    console.log(value);
}


//---> Loop for ... of
for (let xpto of names) {
    console.log(xpto)
}


for (let xpto of data) {
    console.log(value)
}