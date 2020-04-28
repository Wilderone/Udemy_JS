let money, time;

function start() {
    money = +prompt('Your monthly budget:', '')
    time = prompt('Write date in YYYY-MM-DD format', '')

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Your monthly budget:')
        console.log(money)
    }
}
start()

let appData = {
    budget: money,
    date: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true

};


function chooseExp() {
    while (Object.keys(appData.expenses).length < 2) {
        let a = prompt('Обязательный платеж')
        let b = prompt('Сумма')
        if ((typeof (a) === 'string') && (typeof (a) != null) && (typeof (a) != null
            && a != '' && b != '' && a.length < 50)) {
            console.log('done')
            appData.expenses[a] = b
        }
    }

}
function chooseOptExp() {
    for (let i = 0; i < 3; i++) {
        let quest = prompt('Необязательный расход:')
        let expens = +prompt('Сумма')
        if ((typeof (quest) == 'string') && (typeof (quest) != null) && quest != '' && !isNaN(expens)) {
            appData.optionalExpenses[quest] = [expens];
        } else {
            continue;
        }
    }
}
chooseOptExp();

function detectDayBudget() {
    let sumexp = 0
    for (key in appData.expenses) {
        sumexp += +appData.expenses[key]
    }

    let total = ((money - sumexp) / 30).toFixed()

    return total

}
chooseExp();
alert(detectDayBudget());


function checkSavings() {
    if (appData.savings) {
        let save = +prompt('Сумма накоплений?'),
            percent = +prompt('какой процент?')
        appData.monthIncome = save / 100 / 12 * percent
        alert('Доход в месяц: ' + appData.monthIncome);
    }
}
checkSavings();

function detectLevel() {
    let welth = detectDayBudget();
    if (welth <= 100) {
        alert('Budget too low');
    } else if (welth > 100 && welth < 2000) {
        alert('You are a middle-class!')
    } else if (welth > 2000) {
        alert('You are rich!')
    }
}
detectLevel();
