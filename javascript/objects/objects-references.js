let myAccount = {
    name: 'Tyler Bay',
    expenses:0,
    income:0,
    balance:0


}
let addIncome = function (account, amount){
    account.income = account.income + amount
}
let addExpense = function (account, amount){
    account.expenses = account.expenses + amount
}
//let balance = function (account){
   // account.balance = account.income - account.expenses
//}

let getSummary = function (account){
    let balance = account.income - account.expenses
    return `${account.name}'s account has $${balance}. $${account.expenses} are the expenses and $${account.income} is the income`



}
let resetAccount = function (account){
    account.expenses = 0
    account.income = 0
}
addIncome(myAccount, 8000)
addExpense(myAccount, 1200)
addExpense(myAccount, 800)
console.log (getSummary(myAccount))

resetAccount(myAccount)
console.log (getSummary(myAccount))