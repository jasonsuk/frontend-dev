const balance = document.getElementById('balance');
const income = document.getElementById('income');
const expense = document.getElementById('expense');
const history = document.getElementById('history');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// Dummy transaction array for testing
// const dummyTransaction = [
//     { id: 1, text: 'Flower', amount: -40 },
//     { id: 2, text: 'Salary', amount: 6000 },
//     { id: 3, text: 'Grocery', amount: -100 },
//     { id: 4, text: 'Dinner', amount: -50 },
// ];
// let transactions = dummyTransaction;

// Transaction varaible will get an array from local storage
const localStorageTransaction = JSON.parse(localStorage.getItem('transactions'));
let transactions = localStorage.getItem('transactions') !== null ? localStorageTransaction : [];

// Save data to local storage
function saveToLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

// Generate a random ID
function generateID() {
    const randomID = Math.floor(Math.random() * 10000000000);
    for (let trans of transactions) {
        if (trans.id === randomID) {
            continue;
        } else {
            return randomID;
        }
    }
}

// Add new transaction
function addTransaction() {
    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please enter text and amount');
    } else {
        let newTrans = {
            id: generateID(),
            text: text.value,
            amount: +amount.value,
        };

        transactions.push(newTrans);
        saveToLocalStorage(transactions);

        displayTransactions(newTrans);
        updateTotal();

        text.value = '';
        amount.value = '';
    }
}

// Display income, expense and balance
function updateTotal() {
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, amt) => (acc += amt), 0);
    const plus = amounts.filter((amt) => amt >= 0).reduce((acc, amt) => (acc += amt), 0);
    const minus = amounts.filter((amt) => amt < 0).reduce((acc, amt) => (acc += amt), 0);

    // Add values to DOM
    balance.innerText = `$${total.toFixed(2)}`;
    income.innerText = `$${plus.toFixed(2)}`;
    expense.innerText = `$${minus.toFixed(2)}`;
}

// ADD transaction to DOM
function displayTransactions(transaction) {
    const sign = transaction.amount >= 0 ? '+' : '-';

    const li = document.createElement('li');
    li.classList.add(transaction.amount >= 0 ? 'plus' : 'minus');
    li.innerHTML = `${transaction.text} 
        <span>${sign}$${Math.abs(transaction.amount).toFixed(2)}
        </span><button class="btn-delete" 
        onclick=deleteTransaction(${transaction.id})>x</button>`;
    history.append(li);
}

// Delete transaction when clicked
function deleteTransaction(id) {
    transactions = transactions.filter((transaction) => transaction.id !== id);
    // console.log(transactions);
    init();
}

// Init the entire commends all together
function init() {
    history.innerHTML = '';

    transactions.forEach(displayTransactions);
    saveToLocalStorage(transactions);
    updateTotal();
}

// Add transaction when submitted
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTransaction();
});

init();
