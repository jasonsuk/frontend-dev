const main = document.getElementById('main');
const clear = document.getElementById('clear');
const addUser = document.getElementById('add-user');
const double = document.getElementById('double');
const showMillionaires = document.getElementById('show-millionaires');
const sort = document.getElementById('sort');
const calculateWealth = document.getElementById('calculate-wealth');

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

// ADD DATA APPLYING DOM ARRAY METHOD : FOR EACH
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

// DOUBLE MONEY APPLYING DOM ARRAY METHOD : MAP
// ACTIVATION WILL BE VISIBLE WHEN THERE IS DATA PRESENT
function doubleMoney() {
    data = data.map(person => {
        // SPREAD OPERATOR TO COPY THE EXISTING DATA
        return { ...person, wealth: person.wealth * 2 }
    })
    populateData(data)
}

// CLEAR ALL DATA
function clearUI() {
    return location.reload();
}


addUser.addEventListener('click', getRandomUser);
double.addEventListener('click', doubleMoney);
clear.addEventListener('click', clearUI);