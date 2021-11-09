//--> object called: book

const book = {
    title: "Eloquente JavaScript",
    author: "Marijn Haverbeke",
    isAvailable: true
}

// JSON stringify

const bookToJSON = JSON.stringify(book);
console.log(bookToJSON)

// JSON stringify to JSON parse

const jsonObjt = '{"title":"Eloquente JavaScript","author":"Marijn Haverbeke","isAvailable":true}'
const book = JSON.parse(jsonObjt);
console.log(book);

// Take a property of the object

const jsonObjt = '{"title":"Eloquente JavaScript","author":"Marijn Haverbeke","isAvailable":true}'
const book = JSON.parse(jsonObjt);
console.log(book.title);