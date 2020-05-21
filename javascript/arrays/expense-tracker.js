const account = {
    name: 'Tyler Bay',
    expenses: [],
    income:[],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    
    },
    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount

        })
    },
    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0
        this.income.forEach(function(income){
            totalIncome = totalIncome + income.amount 
        })

        this.expenses.forEach(function(expense){
            totalExpenses = totalExpenses + expense.amount
        })
        balance = totalIncome - totalExpenses      
        return `${this.name} has a balance of $${balance} with:
         $${totalIncome} in income.
         $${totalExpenses} in expenses.`
            
    }, 

    
}


account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 2200)


console.log(account.getAccountSummary())