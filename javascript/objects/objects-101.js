let myBook = {
    title: '1984',
    author:'George Orwell',
    pageCount:326
}
console.log(myBook.title)

let person = {
    name: 'Morgan',
    age: 21,
    location: 'Ottawa'
}
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age = person.age+1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)