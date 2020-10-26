// OMDb API
const API_KEY = config.API_KEY;
const baseUrl = 'http://www.omdbapi.com/';

// LOGIC FLOW
// 1. users search movie by title
// 2. fetch possible movie data & show basic search result (title, year)
// 3. uses click on a movie of interest -
// 4. fetch details of the movie of interest (by id)

const autocomplete = document.getElementById('autocomplete');
autocomplete.innerHTML = `
    <div class="dropdown" id="dropdown">
        <input type="text" id="input">
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content" id="contents"></div>
        </div>
    </div>
`;

const searchMovie = async (movieInput) => {
    const response = await axios.get(baseUrl, {
        params: {
            apikey: API_KEY,
            s: movieInput,
        },
    });
    return response.data.Search;
};

const input = document.getElementById('input');
const dropdown = document.getElementById('dropdown');
const contents = document.getElementById('contents');

// WHEN INPUT VALUE IS DETECTED
const onInput = async (e) => {
    const movies = await searchMovie(e.target.value);

    if (!movies) {
        dropdown.classList.remove('is-active');
        return;
    }

    contents.innerHTML = '';
    movies.forEach((movie) => {
        const item = document.createElement('a');
        const imgSrc = movie.Poster === 'N/A' ? ' ' : movie.Poster;

        item.classList.add('dropdown-item');
        item.innerHTML = `
        <img src=${imgSrc}>
        <span>${movie.Title}</span>
        `;

        // When a movie selected,
        // close dropdown and update input value
        item.addEventListener('click', (e) => {
            dropdown.classList.remove('is-active');
            input.value = `${movie.Title}`;
            onMovieSelect(movie);
        });

        contents.appendChild(item);
        dropdown.classList.add('is-active');
    });
};

// HELPER : WHEN A MOVIE IS CLICKED ON DROPDOWN MENU
const onMovieSelect = async (movie) => {
    const response = await axios.get(baseUrl, {
        params: {
            apiKey: API_KEY,
            i: movie.imdbID,
        },
    });

    console.log(response.data);
    const summary = document.getElementById('movieSummary');
    summary.innerHTML = movieSummaryTemplate(response.data);
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

// EVENT LISTENERS

input.addEventListener('input', debounce(onInput, 500));

// When click on any blank window area, the dropdown disappers
document.addEventListener('click', (e) => {
    // console.log(e.target);
    if (!autocomplete.contains(e.target)) {
        document.getElementById('dropdown').classList.remove('is-active');
    }
});
