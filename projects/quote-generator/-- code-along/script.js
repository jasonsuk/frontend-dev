// Get Quote From API
// Some free apis however may generate CORS error 
// Then, create proxyUrl and add it up to the url

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// Helper function - Show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Helper function - hide loading
function complete() {
    if( !loader.hidden ) {
        quoteContainer.hidden = false;
        loader.hidden = true;
    }
}

// fetch data
async function getQuote() {
    // adding loading function
    loading();

    // quick fix for CORS error - suggest to create own proxy
    // new proxy url is created using heroku app
    const proxyUrl = 'https://guarded-gorge-71659.herokuapp.com/' // before to close with "/"
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);
        const data = await response.json();
        //console.log(data);

        // If quoteAuthor is blank, add "Unknown"
        if ( data.quoteAuthor === "" ) {
            authorText.innerText = "Unknown";
        } else {
            authorText.innerText = data.quoteAuthor;
        }

        // Reduce font size for long quote
        if ( data.quoteText.length > 50 ) {
            quoteText.classList.add('long-quote')
        } else {
            quoteText.classList.remove('long-quote')    
        }

        quoteText.innerText = data.quoteText;

        

    } catch (error) {
        getQuote() // in case that there is a token error with the api
        console.log('.....where is quote???', error)
    }

    // stop loader when fetching quote successfully
    complete();
}

// Tweet Quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`; // use ` to create a template string
    // open a new tab
    window.open(twitterUrl, '_blank');
}

// Events Listeners
newQuoteBtn.addEventListener('click', getQuote);
twitterBtn.addEventListener('click', tweetQuote);

// On Load
getQuote();
// loading();