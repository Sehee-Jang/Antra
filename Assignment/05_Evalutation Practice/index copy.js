// CONST
const domSelectors = {
    'slideCnt': '.slide_cnt'
}

// Data
// let movies = [{
//     "id": 1,
//     "imgUrl": "",
//     "name": "Movie Title",
//     "outlineInfo": "qwerqwer qwerqwer"
// },{
//     "id": 2,
//     "name": "Movie Title",
//     "outlineInfo": "qwerqwer qwerqwer"
// },{
//     "id": 3,
//     "name": "Movie Title",
//     "outlineInfo": "qwerqwer qwerqwer"
// },{
//     "id": 4,
//     "name": "Movie Title",
//     "outlineInfo": "qwerqwer qwerqwer"
// },{
//     "id": 5,
//     "name": "Movie Title",
//     "outlineInfo": "qwerqwer qwerqwer"
// }]

// function Prev() {
//     alert('left')
//     const sliderbtn = document.querySelector('.movie_item');
//     // sliderbtn.style.left = "-100px";
// }


// function Next() {
//     alert('right')
//     // const sliderbtn = document.querySelector(domSelectors.sliderBtn);
//     // sliderbtn.style.left = "-100px";
// }



function generateMovieItem(movie) {
    return `
        <li id="movie-${movie.id}" class="movie_item">
            <img src="${movie.imgUrl}" alt="" />
            <p class="movie_title">${movie.name}</p>
            <p class="movie_info">${movie.outlineInfo}</p>
        </li>
    `
}

function generateMovieList(movies) {
    return movies.map(movie => generateMovieItem(movie)).join('')
}

function renderMovieList(movies) {
    const tmp = generateMovieList(movies);
    const ele = document.querySelector(domSelectors.slideCnt);
    render(ele, tmp)
}

function render(element, template) {
    element.innerHTML = template;
}

// APIs
function getMovieList(){
    return fetch('http://localhost:3000/movies')
        .then((response) => response.json())
        .then(json => console.log(json))       
}

// init
renderMovieList(movies);
getMovieList().then(movies => {
    movie = movies;
    renderMovieList(movies);
})