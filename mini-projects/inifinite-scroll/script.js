const myKey = 'V-oeV896TdWRZR0xA6wh8w0XELwK24LhTo2iM2T85-E';
const maxCount = 30;
const myQuery = 'bali';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${myKey}&count=${maxCount}&query=${myQuery}`;

const photoContainer = document.getElementById('photo-container');
const loader = document.getElementById('loader');

let photoArray = [];
let ready = false;
let imgLoaded = 0;
let totalLoaded = 0;

function imageLoaded() {
	imgLoaded++;
	console.log('imaged loaded');
	if (imgLoaded === totalLoaded) {
		loader.hidden = true;
		ready = true;
		console.log('ready to load the next batch: ', ready);
	}
}

function loadAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

function showPhotos() {
	imgLoaded = 0;
	totalLoaded = photoArray.length;
	console.log('total photos loaded: ', totalLoaded);
	photoArray.forEach((photo) => {
		const link = document.createElement('a');
		loadAttributes(link, {
			href: photo.links.html,
			target: '_blank'
		});
		const image = document.createElement('img');
		loadAttributes(image, {
			src: photo.urls.regular,
			alt: photo.alt_description,
			title: photo.alt_description
		});
		link.appendChild(image);
		photoContainer.appendChild(link);

		image.addEventListener('load', imageLoaded);
	});
}

async function fetchPhotos() {
	const response = await fetch(apiUrl);
	photoArray = await response.json(); // fetched as array
	showPhotos();
}

window.addEventListener('scroll', () => {
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
		ready = false;
		fetchPhotos();
	}
});

fetchPhotos();
