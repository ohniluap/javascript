//---> Example var:
 var name = 'Paulo Roberto';
console.log('My name is...:', name);


function printName() {
    var name = 'Paulo Roberto';
    console.log('My name is...: ', name);
}

printName(); 

//---> Example let:
 function printName() {
    for (let age = 21; age <= 50; age++) {
        console.log('Age within the for...: ', age);
    }
}

printName(); 


//---> Example const: 
const people = {
    name: 'Paulo Roberto',
    age: 21
}

function printDataPeople() {
    console.log(`My name..: ${people.name} and age are... ${people.age}`);
}

printDataPeople();