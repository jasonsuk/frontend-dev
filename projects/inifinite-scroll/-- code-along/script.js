const loader = document.getElementById('loader');
const imageContainer = document.getElementById('image-container');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let imgArray = [];

// unsplash API
const myKey = 'V-oeV896TdWRZR0xA6wh8w0XELwK24LhTo2iM2T85-E';
const maxCount = 30;
const myQuery = 'bali';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${myKey}&count=${maxCount}&query=${myQuery}`;

// Check if all images were loaded
function imageLoaded() {
	imagesLoaded++; // must be initialized to 0 for every load
	console.log(imageLoaded);
	if (imagesLoaded === totalImages) {
		ready = true;
		loader.hidden = true;
		console.log('ready = ', ready);
	}
}

function setAttributes(element, attributes) {
	for (const key in attributes) {
		element.setAttribute(key, attributes[key]);
	}
}

// Create tags that contain photos
function displayPhotos() {
	imagesLoaded = 0;
	totalImages = imgArray.length;
	console.log('total images', totalImages);
	imgArray.forEach((photo) => {
		// Create 'a tag' in which 'img' tag will be located
		const link = document.createElement('a');
		setAttributes(link, {
			href: photo.links.html,
			target: '_blank'
		});
		// link.setAttribute('href', photo.links.html);
		// link.setAttribute('target', '_blank');
		const img = document.createElement('img');
		setAttributes(img, {
			src: photo.urls.regular,
			alt: photo.alt_description,
			title: photo.alt_description
		});
		// img.setAttribute('src', photo.urls.regular);
		// img.setAttribute('alt', photo.alt_description);
		// img.setAttribute('title', photo.alt_description);

		// place 'img' tag inside 'a' tag AND both in their parent
		link.appendChild(img);
		imageContainer.appendChild(link);

		img.addEventListener('load', imageLoaded);
	});
}

// fetch photos
async function getPhotos() {
	const response = await fetch(apiUrl);
	imgArray = await response.json();
	//console.log(data);
	displayPhotos();
}

// Check to see if scrolling near bottom of page -> Load more photos
// HTML DOM events : https://www.w3schools.com/jsref/dom_obj_event.asp
window.addEventListener('scroll', () => {
	//console.log('scrolled');
	if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
		ready = false;
		getPhotos();
	}
	//console.log('more loaded - max 30 photos per load)
});

getPhotos();
