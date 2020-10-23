const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const shuffleBtn = document.getElementById('shuffleBtn');
const resultHeading = document.getElementById('result-heading');
const meals = document.getElementById('meals');
const singleMeal = document.getElementById('single-meal');


function displaySingleMeal(meal) {

    // Make an array of ingredients
    const mealIngredients = [];

    for(let i = 1 ; i <= 20 ; i ++) {
        if(meal[`strIngredient${i}`]) {
            let output = `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`;
            mealIngredients.push(output);
        } else {
            break;
        }
    }
    
    // Create DOM for #singleMeal
    singleMeal.innerHTML = `

        <div class="single-meal">
            <h2>${meal.strMeal}</h2>
            <img src=${meal.strMealThumb} alt="${meal.strMeal}"/>
            <div class="single-meal-description">
                ${meal.strArea ? `<h3>${meal.strArea}</h3>` : ''}
                ${meal.strCategory ? `<h3>${meal.strCategory}</h3>` : ''}
            </div>
            <div class="single-meal-instruction">
                <p>${meal.strInstructions}</p>
            </div>
            <div class="single-meal-ingredients">
                <ul>
                    ${mealIngredients.map(i => 
                        `<li>${i}</li>`).join('')
                    }
                </ul>
            </div>
        </div>

    `
}

function fetchRandomMeal() {

    searchInput.value = '';
    resultHeading.innerHTML = '';
    meals.innerHTML = '';


    const urlRandom = 'https://www.themealdb.com/api/json/v1/1/random.php';
    fetch(urlRandom)
        .then(res => res.json())
        .then(result => {
            // console.log(result);

            displaySingleMeal(result.meals[0]);
        })
}

function fetchMealById(id) {
    const urlById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(urlById)
        .then(res => res.json())
        .then(result => {
            // console.log(result.meals[0]);
            const meal = result.meals[0];
            console.log(meal);
            displaySingleMeal(meal);            

        })
}

function displayMeals(input) {
    const baseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
    fetch(baseUrl)
        .then(res => res.json())
        .then(result => {
            console.log(result);
            resultHeading.innerHTML = `<h2> Search result for '${input}'</h2>`

            if(result.meals === null) {
                resultHeading.innerHTML = `<h2>No result found. Please try again</h2>`;
                meals.innerHTML = '';

            } else {
                meals.innerHTML = result.meals.map(meal => 
                    `
                        <div class="meal">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                            <div class="meal-info" data-mealID="${meal.idMeal}">
                                <h3 class="meal-name">${meal.strMeal}</h3>
                            </div>
                        </div>
                    `)
                    .join('');
            }

            // Clear search
            searchInput.value = '';

        });
}

// Show Menu Searched
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if(searchInput.value) {
        displayMeals(searchInput.value);
    } else {
        alert('Please enter a meal to search');
    }
    
})

// Show Single Menu Details 
meals.addEventListener('click', (e) => {
    const mealInfo = e.path.find(item => {
        // console.log(item);
        if(item.classList) {
            return item.classList.contains('meal-info');
        } else {
            return false;
        }
    })
    
    // console.log(mealInfo);
    const id = mealInfo.getAttribute('data-mealid');
    
    fetchMealById(id);

})


// Show Random Menu

shuffleBtn.addEventListener('click', fetchRandomMeal);
