const container = document.querySelector('.container');
const dayEl = document.getElementById('day');
const hourEl = document.getElementById('hour');
const minEl = document.getElementById('min');
const secEl = document.getElementById('sec');
const messageEl = document.getElementById('message');
const loader = document.getElementById('loader');
const dateSelect = document.getElementById('dateSelect');

// Automate the update of year
const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;
messageEl.innerText = nextYear;

// New Year
const newYear = new Date(`January 1 ${nextYear} 00:00:00`);

const anniversary = {
    'New Year': newYear,
    'First Day We Met': new Date(`November 30 ${currentYear}`),
};

// Customization
// i.e. wedding anniversary, birthdays, the first time we met...

// Change the year if it is passed
const getAccurateDate = (date) => {
    return new Date() > date ? new Date(date.setFullYear(nextYear)) : date;
};

const renderAnniversaryOptions = () => {
    const options = Object.keys(anniversary);
    options.forEach((item) => {
        dateSelect.innerHTML += `
        <option class="dateOption" value="${getAccurateDate(
            anniversary[item]
        )}">${item}</option>
    `;
    });
};

// Loader
const toogleLoader = () => {
    loader.className = 'loading show';

    setTimeout(() => {
        loader.className = 'loading hide';
        container.style.display = 'flex';
    }, 1000);
};

// Countdown functionality

const renderDateInDom = (day, hour, min, sec) => {
    dayEl.innerText = day < 10 ? `0${day}` : day;
    hourEl.innerText = hour < 10 ? `0${hour}` : hour;
    minEl.innerText = min < 10 ? `0${min}` : min;
    secEl.innerText = sec < 10 ? `0${sec}` : sec;
};

const updateCountdown = (dateSelected) => {
    const currentTime = new Date();
    const countdown = dateSelected - currentTime; // in millisec

    const day = Math.floor(countdown / 1000 / 60 / 60 / 24);
    const hour = Math.floor(countdown / 1000 / 60 / 60) % 24;
    const min = Math.floor(countdown / 1000 / 60) % 60;
    const sec = Math.floor(countdown / 1000) % 60;

    renderDateInDom(day, hour, min, sec);
};

// Stop countdown
let countdown;

const activateCountdown = (dateSelected) => {
    toogleLoader();
    countdown = setInterval(() => {
        updateCountdown(dateSelected);
    }, 1000);
};

const stopCountdown = (countdown) => {
    clearInterval(countdown);
};

// Change Message
const changeMessage = (text) => {
    console.log(text.length);
    if (text.length > 10) {
        messageEl.style.fontSize = '10rem';
    } else {
        messageEl.style.fontSize = '20rem';
    }
    messageEl.innerText = text;
};

// Event listener when changing anniversary
dateSelect.addEventListener('change', (e) => {
    let textSelected = e.target.options[e.target.selectedIndex].text;
    let dateSelected = new Date(e.target.value);
    changeMessage(textSelected);
    stopCountdown(countdown);
    activateCountdown(dateSelected);
});

activateCountdown(newYear);
renderAnniversaryOptions();