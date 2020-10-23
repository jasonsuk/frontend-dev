// Delaying search input 
// Refactorted with debounce function 
const debounce = (func, delay=1000) => {
    let timeOutId;
    return (...arg) => {
        if(timeOutId) clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            func.apply(null, ...arg);
        }, delay);
    }
}

// Before refactoring
// let timeOutId;
// const onInput = (e) => {
//     if(timeOutId) clearTimeout(timeOutId);

//     timeOutId = setTimeout(() => {
//         searchMovie(e.target.value);
//     }, 1000);
// }