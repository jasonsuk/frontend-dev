const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const getLoader = document.getElementById('loader');

function loading() {
	quoteContainer.hidden = true;
	getLoader.hidden = false;
}

function complete() {
	if (!getLoader.hidden) {
		quoteContainer.hidden = false;
		getLoader.hidden = true;
	}
}

async function quoteCreator() {
	loading();

	const url = 'https://type.fit/api/quotes';

	try {
		const fetchPromise = fetch(url);
		fetchPromise
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const quotes = data.map((quote) => quote.text);
				const authors = data.map((author) => author.author);

				index = Math.floor(Math.random() * quotes.length);

				const quote = quotes[index];
				const author = authors[index];
				// console.log(index, quote, author);

				if (author === '') {
					quoteText = 'Unknown';
				} else {
					quoteAuthor.innerText = author;
				}

				quoteText.innerText = quote;

				if (quote.length > 50) {
					quoteText.classList.add('long-quote');
				} else {
					quoteText.classList.delete('long-quote');
				}
			});
	} catch (error) {
		quoteCreator();
		console.log('Hmmm...there must be something wrong', error);
	}

	complete();
}

function shareTweet() {
	const tweetQuote = quoteText.innerText;
	const tweetAuthor = quoteAuthor.innerText;
	const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetQuote}-${tweetAuthor}-`;
	window.open(tweetUrl, '_blank');
}

twitterBtn.addEventListener('click', shareTweet);
newQuoteBtn.addEventListener('click', quoteCreator);

//on load
quoteCreator();
