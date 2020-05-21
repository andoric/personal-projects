let greetUser = function() {
    console.log('Welcome user!')
}

greetUser()

let square = function(num){
    let result = num*num
    console.log(result)
    return result
}

let value = square(3)
let otherValue = square(7)
console.log(value)
console.log(otherValue)

let convertFahrenheitToCelsius = function(fahrenheit){
    let result = (fahrenheit-32)*5/9
    return result
}
let temp = convertFahrenheitToCelsius(32)
let otherTemp = convertFahrenheitToCelsius(68)
console.log(temp)
console.log(otherTemp)