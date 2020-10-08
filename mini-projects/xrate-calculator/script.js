const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const swapBtn = document.getElementById('swap');
const rateText = document.getElementById('rate');

const apiKey = config.MY_KEY;
const baseUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/`;

function getExchangeRate() {
	const currency_one = currencyOne.value;
	const currency_two = currencyTwo.value;
	const url = baseUrl + currency_one;
	// console.log(url);
	fetch(url)
		.then((res) => res.json())
		.then((data) => {
			console.log(data);
			const rate = data.conversion_rates[currency_two];
			rateText.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
			amountTwo.value = (rate * amountOne.value).toFixed(2);
		}).catch(error => rateText.innerHTML = 'Sorry the exchange rate does not exist...');
}

amountOne.addEventListener('input', getExchangeRate);
amountTwo.addEventListener('input', getExchangeRate);
currencyOne.addEventListener('change', getExchangeRate);
currencyTwo.addEventListener('change', getExchangeRate);

swapBtn.addEventListener('click', (e) => {
	const temp = currencyOne.value;
	currencyOne.value = currencyTwo.value;
	currencyTwo.value = temp;
	getExchangeRate();
})

getExchangeRate();