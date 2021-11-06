//---> Example one (Function)
function squareRoot(number) {
    return number * number
}

console.log(squareRoot(6));


//---> Example two (Function) 
function discountProductValue (price, discount) {
    let result = price * discount;
    console.log("You saved...: R$ " + result);
    return price - discount
}

console.log(discountProductValue(50, 0.2));


//---> Example three (Function return) 
function converterCelsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * 9 / 5 + 32;
    return fahrenheit
}

console.log(converterCelsiusToFahrenheit(40))