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
        onMovieSelect(movie, summaryEl);
    },
});
createAutoComplete({
    ...autocompleteConfig,
    root: document.querySelector('#autocomplete-right'),
    onItemSelect(movie) {
        document.querySelector('.tutorial').classList.add('is-hidden');
        const summaryEl = document.querySelector('#summary-right');
        onMovieSelect(movie, summaryEl);
    },
});

// HELPER : WHEN A MOVIE IS CLICKED ON DROPDOWN MENU
const onMovieSelect = async (movie, summaryEl) => {
    const response = await axios.get(baseUrl, {
        params: {
            apiKey: API_KEY,
            i: movie.imdbID,
        },
    });
    summaryEl.innerHTML = movieSummaryTemplate(response.data);
};

const movieSummaryTemplate = (movieSummary) => {
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
        <article class="notification is-primary">
            <p class="title">${movieSummary.Awards}</p>
            <p class="subtitle">Awards</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieSummary.BoxOffice}</p>
            <p class="subtitle">Box office</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieSummary.MetaScore}</p>
            <p class="subtitle">Meta score</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieSummary.imdbRating}</p>
            <p class="subtitle">imdb rating</p>
        </article>
        <article class="notification is-primary">
            <p class="title">${movieSummary.imdbVotes}</p>
            <p class="subtitle">imdb votes</p>
        </article>
    `;
};
