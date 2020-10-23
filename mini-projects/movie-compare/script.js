// OMDb API
const API_KEY = config.API_KEY;
const baseUrl = 'http://www.omdbapi.com/';

// LOGIC FLOW
// 1. users search movie by title 
// 2. fetch possible movie data & show basic search result (title, year)
// 3. uses click on a movie of interest -
// 4. fetch details of the movie of interest (by id)

const searchMovie = async (searchInput) => {
    const response = await axios.get(baseUrl, {
        params : {
            apikey : API_KEY,
            s: searchInput
        }
    });

    console.log(response);
}


const input = document.querySelector('input');
const onInput = (e => searchMovie(e.target.movie));
input.addEventListener('input', debounce(onInput, 500));

