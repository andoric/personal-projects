const notes = [{
    title: 'My next trip',
    body: 'I would like to go to spain'
},{
    title:'habits to work on',
    body:'exercise. eat a bit better'

},{
    title: 'office modification',
    body:'get a new seat'
}]

document.querySelector('button').addEventListener('click', function(e){
    e.target.textContent = 'loading'
})