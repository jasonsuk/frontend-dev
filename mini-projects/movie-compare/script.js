// OMDb API
const API_KEY = config.API_KEY;
const baseUrl = 'http://www.omdbapi.com/';

// LOGIC FLOW
// 1. users search movie by title
// 2. fetch possible movie data & show basic search result (title, year)
// 3. uses click on a movie of interest -
// 4. fetch details of the movie of interest (by id)

const autocompleteConfig = {
    async fetchData(searchInput) {
        const response = await axios.get(baseUrl, {
            params: {
                apikey: API_KEY,
                s: searchInput,
            },
        });
        if (response.data.Error) {
            return [];
        }
        return response.data.Search;
    },
    renderItems(movie) {
        const imgSrc = movie.Poster === 'N/A' ? ' ' : movie.Poster;
        return `
        <img src=${imgSrc}>
        <span>${movie.Title} (${movie.Year})</span>
        `;
    },
    inputValue(movie) {
        return movie.Title;
    },
};

createAutoComplete({
    ...autocompleteConfig,
    root: document.querySelector('#autocomplete-left'),
    onItemSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        const summaryEl = document.querySelector('#summary-left');
        onMovieSelect(movie, summaryEl, 'left');
    },
});
createAutoComplete({
    ...autocompleteConfig,
    root: document.querySelector('#autocomplete-right'),
    onItemSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        const summaryEl = document.querySelector('#summary-right');
        onMovieSelect(movie, summaryEl, 'right');
    },
});

let leftMovie;
let rightMovie;

// HELPER : WHEN A MOVIE IS CLICKED ON DROPDOWN MENU
const onMovieSelect = async (movie, summaryEl, side) => {
    const response = await axios.get(baseUrl, {
        params: {
            apiKey: API_KEY,
            i: movie.imdbID,
        },
    });

    summaryEl.innerHTML = movieSummaryTemplate(response.data);

    if (side === 'left') {
        leftMovie = response.data;
    } else {
        rightMovie = response.data;
    }

    if (leftMovie && rightMovie) {
        runComparison();
    }
};

const runComparison = () => {
    console.log('Time for a comparison!');
    // Instead of manipulating DOMs one by one
    // set global attributes to templates and retrieve them in loop

    const leftMovieArticles = document.querySelectorAll(
        '#summary-left .notification'
    );
    const rightMovieArticles = document.querySelectorAll(
        '#summary-right .notification'
    );

    leftMovieArticles.forEach((leftMovieArticle, index) => {
        const rightMovieArticle = rightMovieArticles[index];
        // console.log(leftMovieArticle, rightMovieArticle);

        const leftMovieStat = leftMovieArticle.dataset.value;
        const rightMovieStat = rightMovieArticle.dataset.value;

        if (leftMovieStat > rightMovieStat) {
            leftMovieArticle.classList.remove('is-primary');
            leftMovieArticle.classList.add('is-warning');
        } else if (leftMovieStat < rightMovieStat) {
            rightMovieArticle.classList.remove('is-primary');
            rightMovieArticle.classList.add('is-warning');
        } else {
            return;
        }
    });
};

const movieSummaryTemplate = (movieSummary) => {
    const boxOffice = parseInt(
        movieSummary.BoxOffice.replace(/\$/g, '').replace(/,/g, '')
    );
    const metaScore = parseInt(movieSummary.Metascore);
    const imdbRating = parseFloat(movieSummary.imdbRating);
    const imdbVotes = parseFloat(movieSummary.imdbVotes.replace(/,/g, ''));

    const awards = movieSummary.Awards.split(' ').reduce((prev, word) => {
        const value = parseInt(word);

        if (isNaN(value)) {
            return prev;
        } else {
            return prev + value;
        }
    }, 0);

    return `
        <article class="media">
            <figure class="media-left">
                <p class="image">
                    <img src="${movieSummary.Poster}">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <h1>${movieSummary.Title}</h1>
                    <h4>${movieSummary.Genre}</h4>
                    <p>${movieSummary.Plot}</p>
                </div>
            </div>
        </article>
        <article data-value="${awards}" class="notification is-primary">
            <p class="title">${movieSummary.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article data-value="${boxOffice}" class="notification is-primary">
            <p class="title">${movieSummary.BoxOffice}</p>
            <p class="subtitle">Box office</p>
        </article>
        <article data-value="${metaScore}"class="notification is-primary">
            <p class="title">${movieSummary.Metascore}</p>
            <p class="subtitle">Meta score</p>
        </article>
        <article data-value="${imdbRating}" class="notification is-primary">
            <p class="title">${movieSummary.imdbRating}</p>
            <p class="subtitle">imdb rating</p>
        </article>
        <article data-value="${imdbVotes}" class="notification is-primary">
            <p class="title">${movieSummary.imdbVotes}</p>
            <p class="subtitle">imdb votes</p>
        </article>
    `;
};
