const toDo = [{
    text:'cook',
    completed: false
    }, {
    text:'clean',
    completed: false
    },{
    text:'groceries',
    completed: true
    },{
    text:'build table',
    completed: false
    }, {
    text:'learn programming',
    completed: false}]


const incomplete = toDo.filter(function(x){
    return !x.completed
})

const summary = document.createElement('h2')
summary.textContent = `you have ${incomplete.length} todos left `
document.querySelector('body').appendChild(summary)

toDo.forEach(function(x){
    const add = document.createElement('p')
    add.textContent = x.text
    document.querySelector('body').appendChild(add)

})

document.querySelector('button').addEventListener('click', function(e){
    console.log('adding new toDo')
})