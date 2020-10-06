const movie = document.getElementById('movie');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const container = document.querySelector('.seat-container');
const totalSeat = document.getElementById('total-seat');
const totalPrice = document.getElementById('total-price');

function saveMovieData(idx, price) {
	localStorage.setItem('selectedMovieIndex', idx);
	localStorage.setItem('selectedMoviePrice', price);
}

function changeTotal() {
	const seatSelected = container.querySelectorAll('.seat.selected');
	const numSelected = seatSelected.length;
	// saving index to local storage
	let seatIndex = [ ...seatSelected ].map((seat) => [ ...seats ].indexOf(seat));
	localStorage.setItem('selectedSeats', JSON.stringify(seatIndex));

	totalSeat.innerText = numSelected;
	totalPrice.innerText = numSelected * movie.value;
}

function populateUI() {
	let storedSeats = localStorage.getItem('selectedSeats');
	if (storedSeats !== null && storedSeats.length > 0) {
		seats.forEach((seat, i) => {
			if (storedSeats.indexOf(i) !== -1) {
				seat.classList.add('selected');
			}
		});
	}
	let storedIndex = localStorage.getItem('selectedMovieIndex');
	let storedPrice = localStorage.getItem('selectedMoviePrice');
	if (storedIndex !== null) {
		movie.selectedIndex = storedIndex;
		movie.value = storedPrice;
	}
}

movie.addEventListener('change', function(e) {
	saveMovieData(e.target.selectedIndex, e.target.value);
	changeTotal();
});

container.addEventListener('click', function(e) {
	if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
		e.target.classList.toggle('selected');
	}
	changeTotal();
});

populateUI();
