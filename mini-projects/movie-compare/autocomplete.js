const createAutoComplete = ({
    root,
    fetchData,
    renderItems,
    inputValue,
    onItemSelect,
}) => {
    root.innerHTML = `
        <label><b>Search For an item</b></label>
        <input type="text" class="input">
        <div class="dropdown">
            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                <div class="dropdown-content"></div>
            </div>
        </div>
    `;

    const input = root.querySelector('input');
    const dropdown = root.querySelector('.dropdown');
    const contents = root.querySelector('.dropdown-content');

    // WHEN INPUT VALUE IS DETECTED
    const onInput = async (e) => {
        const items = await fetchData(e.target.value);

        if (!items) {
            dropdown.classList.remove('is-active');
            return;
        }

        contents.innerHTML = '';
        items.forEach((item) => {
            const option = document.createElement('a');

            option.classList.add('dropdown-item');
            option.innerHTML = renderItems(item);

            // When an item selected,
            // close dropdown and update input value
            option.addEventListener('click', (e) => {
                dropdown.classList.remove('is-active');
                input.value = inputValue(item);
                onItemSelect(item);
            });

            contents.appendChild(option);
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
