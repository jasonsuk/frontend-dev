///// BRIEF SUMMARY ON 'element.classList' //////
// item, add, remove, toggle, contains, replace

const seatContainer = document.querySelector('.seat-container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('total-seat');
const amount = document.getElementById('total-price');
const movie = document.getElementById('movie');

let ticketPrice = +movie.value; //instead of parseInt
// console.log(typeof ticketPrice);

function saveMovieData(movieIndex, ticketPrice) {
	localStorage.setItem('selectedMovieIndex', movieIndex);
	localStorage.setItem('selectedMoviePrice', ticketPrice);
}

// Change the total count and price in .text-box
function changeTotal() {
	const seatSelected = seatContainer.querySelectorAll('.row .selected');
	const numSelected = seatSelected.length;

	// Get array to save index of selected seats
	// use .map instead of .forEach to return array

	// spread operator to
	// console.log(...seatSelected);
	const seatIndex = [ ...seatSelected ].map((seat) => [ ...seats ].indexOf(seat)); // return array
	// JSON.stringfy <-> JSON.parse when storing array
	localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

	count.innerText = numSelected;
	amount.innerText = numSelected * ticketPrice;
}

function populateUI() {
	const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
	console.log(selectedSeats);
	if (selectedSeats !== null && selectedSeats.length > 0) {
		seats.forEach((seat, index) => {
			if (selectedSeats.indexOf(index) > -1) {
				seat.classList.add('selected');
			}
		});
	}
	const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
	const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');
	if (selectedMovieIndex !== null) {
		movie.selectedIndex = selectedMovieIndex;
		ticketPrice = selectedMoviePrice;
	}
}

// When a movie is changed, ticketPrice is updated
movie.addEventListener('change', (e) => {
	ticketPrice = +e.target.value;
	// console.log(e.target.selectedIndex, ticketPrice);
	saveMovieData(e.target.selectedIndex, ticketPrice);
	changeTotal();
});

// Give interaction when seat is selected(clicked)
seatContainer.addEventListener('click', (e) => {
	// console.log(e.target);
	if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
		e.target.classList.toggle('selected');
	}
	changeTotal();
});

populateUI();
changeTotal();
