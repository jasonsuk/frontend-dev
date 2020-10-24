const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const history = document.getElementById('history');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// Dummy transaction array
const dummyTransaction = [
    { id: 1, text: 'Flower', amount: -40 },
    { id: 2, text: 'Salary', amount: 6000 },
    { id: 3, text: 'Grocery', amount: -100 },
    { id: 4, text: 'Dinner', amount: -50 },
];

// Transaction varaible will get an array from local storage
let transactions = dummyTransaction;

// Display income, expense and balance
function updateTotal() {
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, amt) => (acc += amt), 0);
    const plus = amounts
        .filter((amt) => amt >= 0)
        .reduce((acc, amt) => (acc += amt), 0);
    const minus = amounts
        .filter((amt) => amt < 0)
        .reduce((acc, amt) => (acc += amt), 0);

    // Add values to DOM
    balance.innerText = `$${total.toFixed(2)}`;
    income.innerText = `$${plus.toFixed(2)}`;
    minus.innerText = `$${minus.toFixed(2)}`;
}

// ADD transaction to DOM
function addTransaction(transaction) {
    const sign = transaction.amount >= 0 ? '+' : '-';

    const li = document.createElement('li');
    li.classList.add(transaction.amount >= 0 ? 'plus' : 'minus');
    li.innerHTML = `${transaction.text} 
        <span>${sign}$${Math.abs(transaction.amount).toFixed(2)}
        </span><button class="btn-delete">x</button>`;
    history.append(li);
}

// Init the entire commends all together
function init() {
    transactions.forEach(addTransaction);
    updateTotal();
}

init();
