## Movie Search Web App

Create an app applying key JavaScript concepts in practice, code along The Modern Javascript Bootcamp Course (2020)[https://www.udemy.com/course/javascript-beginners-complete-tutorial/]

### Basic functionality of the application
Users can type a movie of interest in search bar and the details will be fetched and displayed.
For instant movie comparision, the screen will show the movie results in two different vertically seperated sections.

### Description on logic flow
1. The user type `a movie title` in a search bar, and the best matched data will be fetched.
2. In order to prevent fetching redundant data, delay functionality will be added.
3. Autocomplete function is embedded to react to the input, and facilitate the search. Navigation bar will appear listing a few matches.
4. Once the user clicks on a movie, more details will be fetched.

### Key Concepts
1. Use `Axios` module and its `params` object.
2. Delay fetching data by using setTimeOut() function - Debouncing an input

