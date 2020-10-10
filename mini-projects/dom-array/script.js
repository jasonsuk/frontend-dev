const main = document.getElementById('main');
const clearBtn = document.getElementById('clear');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sortBtn');
const calculateWealthBtn = document.getElementById('calculate-wealth');

// WHEN SAVING DATA FETCHED FROM API

let data = []

// THIS TIME, USE ASYNC/AWAIT INSTEAD OF PROMISE(.then)
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();

    // console.log(data.results[0]);
    // notice that forEach / map is not used here 
    // -> we are saving a randomly generated user to array
    const user = data.results[0];
    const randomUser = {
        name: `${user.name.first} ${user.name.last}`,
        wealth: Math.floor(Math.random() * 1000000)
    }
    // console.log(randomUser);
    addData(randomUser);
}

// ADD DATA | DOM ARRAY METHOD : FOR EACH
function addData(obj) {
    // ADD AND SAVE USER IN ARRAY
    data.push(obj);

    populateData(data);
}

// MANIPULATE DOM TO ADD DATA
function populateData(addedData = data) {

    // CLEAR ITEM FIRST
    main.innerHTML = '<h3><strong>Person</strong>Wealth</h3>';

    addedData.forEach(person => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${person.name}</strong>${formatMoney(person.wealth)}`;
        main.appendChild(element);
    })
}

// FORMAT MONEY
// Retrieved from https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(money) {
    return '$ ' + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// DOUBLE MONEY | DOM ARRAY METHOD : MAP
// ACTIVATION WILL BE VISIBLE WHEN THERE IS DATA PRESENT
function doubleMoney() {
    data = data.map(person => {
        // SPREAD OPERATOR TO COPY THE EXISTING DATA
        return { ...person, wealth: person.wealth * 2 }
    })
    populateData(data)
}

// SORT BY WEALTH | DOM ARRAY METHOD : SORT
let order = false;
function sortWealth() {
    order = !order;
    data = data.sort((a, b) => {
        let boolAsc = (a.wealth - b.wealth);
        let boolDesc = (b.wealth - a.wealth);
        return (order) ? boolDesc : boolAsc;
    })
    populateData(data);

}

// SHOWING RESULTS BASED ON RULE | DOM ARRAY METHOD : FILTER
function showMillionaires() {
    data = data.filter((person) => {
        return Number(person.wealth) > 1000000;
    })
    populateData(data);
}

// RETURN SINGLE RESULT FROM ARRAY | DOM ARRAY METHOD : REDUCE
function calculateWealth() {
    const sum = data.reduce((acc, person) => {
        return acc += person.wealth;
    }, 0)

    const wealthElement = document.createElement('div');
    wealthElement.innerHTML = `<h3><strong>Total wealth: </strong>${formatMoney(sum)}</h3>`;

    const wealthElementAttr = `
        background-color: #FEFEE3;
        margin-top: 5px;
        padding: 3px 0px;
        font-weight: 700;
    `
    wealthElement.style.cssText = wealthElementAttr;
    main.appendChild(wealthElement);
}


// CLEAR ALL DATA
function clearUI() {
    return location.reload();
}

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortWealth);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);

clearBtn.addEventListener('click', clearUI);