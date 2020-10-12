const inputCountry = document.getElementById('inputCountry');
const message = document.getElementById('message');
const region = document.getElementById('region');
const subregion = document.getElementById('subregion');
const sunset = document.getElementById('sunset');
const sunrise = document.getElementById('sunrise');
const confirm = document.getElementById('confirm');


// FETCH COUNTRY DATA AND SAVE IT AS ARRAY

let data = [];

async function fetchCountryData() {
	const countryUrl = 'https://restcountries.eu/rest/v2/all';
	const response = await fetch(countryUrl);
	const data = await response.json();

	data.map((country) => {
		const countryObj = {
			name: country.name,
			region: country.region,
			subregion: country.subregion,
			lat: country.latlng[0],
			lng: country.latlng[1]
		}
		addData(countryObj)
	})
}

function addData(obj) {
	data.push(obj);
}

// FETCH SUNRISE / SUNSET DATA
async function fetchSunData(latitude, longitude, date = 'today') {
	let lat = parseFloat(latitude);
	let lng = parseFloat(longitude);
	const sunUrl = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${date}`

	const response = await fetch(sunUrl);
	const data = await response.json();

	// console.log(data.results);
	// display sunset/sunrise time in UTD -> need to convert
	sunset.innerHTML = data.results.sunset;
	sunrise.innerHTML = data.results.sunrise;
}

// INTERACTIVE TO SHOW A COUNTRY THAT BEST MATCHES
function findCountry(embededData = data) {

	clearResults();

	data.forEach((country) => {
		const name = String(country.name).toLowerCase();
		const input = String(inputCountry.value).toLowerCase();
		if (input.length > 2 && name.includes(input)) {
			message.innerHTML = country.name;
		}
	})
}

function clearResults() {
	region.innerHTML = '';
	subregion.innerHTML = '';
	sunrise.innerHTML = '';
	sunset.innerHTML = '';
}

// DISPLAY RESULTS THAT MATCH WITH A COUNTRY
function populateData() {
	data.map((country) => {
		const name = String(country.name).toLowerCase();
		const bestMatch = String(message.innerHTML).toLowerCase();

		if (name === bestMatch) {
			region.innerHTML = country.region;
			subregion.innerHTML = country.subregion;
			// console.log(country.lat, country.lng);
			fetchSunData(country.lat, country.lng);
		}
	})
}


// EVENTS

// fetch and load data when window opens
window.addEventListener('load', fetchCountryData);

// interactive for user to see best match country
inputCountry.addEventListener('input', findCountry);

// display results when user confirms the country
confirm.addEventListener('click', populateData);
