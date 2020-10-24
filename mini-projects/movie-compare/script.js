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
`

const searchMovie = async (input) => {

    const response = await axios.get(baseUrl, {
        params : {
            apikey : API_KEY,
            s: input
        }
    });

    return response.data.Search;
}
    
const input = document.querySelector('#input');
const onInput =  ( async (e) => {
    
    const movies = await searchMovie(e.target.value);

    if(!movies) {
        dropdown.classList.remove('is-active')
        return;
    }
    
    contents.innerHTML = '';    

    movies.forEach(movie => {

        const item = document.createElement('a');
        const imgSrc = movie.Poster === 'N/A' ? ' ' : movie.Poster;

        item.classList.add('dropdown-item');

        item.innerHTML = `
        <img src=${imgSrc}>
        <span>${movie.Title}</span>
        `;

        const contents = document.getElementById('contents');
        const dropdown = document.getElementById('dropdown');

        contents.appendChild(item);
        dropdown.classList.add('is-active');
    });
    
});

input.addEventListener('input', debounce(onInput, 500));

// When click on any blank window area, the dropdown disappers
document.addEventListener('click', (e) => {
    // console.log(e.target);
    if(!autocomplete.contains(e.target)) {
        document.getElementById('dropdown').classList.remove('is-active');
    }
})
