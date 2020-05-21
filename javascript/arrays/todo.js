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

const removeToDo = function(toDo, toDoText){
    
    const index = toDo.findIndex(function(toDo){        
        return toDo.text.toLowerCase() === toDoText.toLowerCase()
    })
    if (index > -1){
        toDo.splice(index, 1)

    } 

}

const getThingsToDo = function(toDo){
    return toDo.filter(function(stillToDo){
        return !stillToDo.completed
    })
}

const sortToDos = function(toDo){
    toDo.sort(function(a,b){
        if (!a.completed && b.completed){
            return -1 
        } else if (a.completed === true && b.completed === false){
            return 1
        } else {
            return 0
        }
    })

}


// const remove = removeToDo(toDo, 'groceries')


sortToDos(toDo)
console.log(toDo)
//console.log(getThingsToDo(toDo))


