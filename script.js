let money = prompt('Your monthly budget:')
let time = prompt('Write date in YYYY-MM-DD format')
let debet = prompt('Обязательный платеж')
let value = prompt('Сумма')
let debet2 = prompt('Обязательный платеж')
let value2 = prompt('Сумма')

let appData = {
    budget: money,
    date: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}
appData.expenses[debet] = +value
appData.expenses[debet2] = +value2

let sumexp = 0
for (key in appData.expenses) {
    sumexp += appData.expenses[key]
}


let total = ((money - sumexp) / 30)
alert(total)
