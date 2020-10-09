const input = document.getElementById('input');
const message = document.getElementById('message');
const region = document.getElementById('region');
const subregion = document.getElementById('subregion');
const sunset = document.getElementById('sunset');
const sunrise = document.getElementById('sunrise');
const apiUrl = 'https://restcountries.eu/rest/v2/all';

function getCountryData() {
	const countryList = []
	fetch(apiUrl)
		.then((res) => res.json())
		.then((data) => {
			data.forEach((country) => {
				const countryName = String(country.name).toLocaleLowerCase();
				const inputName = String(input.value).toLocaleLowerCase()

				if (countryName.includes(inputName)) {

					message.innerHTML = country.name;
					region.innerHTML = country.region;
					subregion.innerHTML = country.subregion;
				}
			})
		}).catch(error => console.log('Failed to fetch data...'))
}

function validateInput() {
	if (!input.value.length > 0 || input.value === 'unidentified') {
		message.innerHTML = 'Hi...! Feel free to play with country name here'
	}
}

document.body.addEventListener('mouseover', validateInput);
input.addEventListener('input', (e) => {
	getCountryData();
	validateInput();
})
