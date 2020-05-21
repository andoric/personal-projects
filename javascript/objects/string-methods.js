let name = 'Tyler Bay'
console.log(name.length)

name.toUpperCase()

console.log(name.toLowerCase())

let password = 'abc123password123'
console.log(password.includes('password'))

let isValidPassword = function(password){
    let lowerPass = password.toLowerCase()
    return password.length > 8 && !lowerPass.includes('password')

    }


   


console.log(isValidPassword('111222'))
console.log(isValidPassword('111222111'))
console.log(isValidPassword('111222Password'))
