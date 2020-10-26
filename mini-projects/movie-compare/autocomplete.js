const createAutoComplete = ({ root }) => {
    root.innerHTML = `
        <div class="dropdown">
            <input type="text">
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content"></div>
            </div>
        </div>
    `;

    console.log(root);

    const input = root.querySelector('input');
    const dropdown = root.querySelector('.dropdown');
    const contents = root.querySelector('.dropdown-content');

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

    // EVENT LISTENERS

    input.addEventListener('input', debounce(onInput, 500));

    // When click on any blank window area, the dropdown disappers
    document.addEventListener('click', (e) => {
        // console.log(e.target);
        if (!root.contains(e.target)) {
            dropdown.classList.remove('is-active');
        }
    });
};
