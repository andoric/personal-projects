let add = function(a, b, c){
    return a+b+c

}

let result = add(1, 10, 5)
console.log(result)

let getScoreText = function(name = 'anon', score = 0){
    return `Name:${name}       Score:${score}`
    //return 'Player: ' + name +'             Score: '+score
}
let scoreText = getScoreText(undefined, 6000)
console.log(scoreText)


let getTip = function(total, tipPercent = 0.25){
    tipValue = total * tipPercent 
    return `A ${tipPercent * 100}% tip on $${total} would be $${tipValue} for a total of $${total + tipValue}`
    
}
let tip = getTip(100, 0.15)

console.log(tip)
let name = 'Jen'
console.log(`hey, my name's ${name}!`)