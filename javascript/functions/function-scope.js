let convertFahrenheitToCelsius = function(fahrenheit){
    let celsius = (fahrenheit-32)*5/9
    if (celsius<= 0){
        let isFreezing = true
        
    }
    return celsius
}
let temp = convertFahrenheitToCelsius(32)
let otherTemp = convertFahrenheitToCelsius(68)
console.log(temp)
console.log(otherTemp)