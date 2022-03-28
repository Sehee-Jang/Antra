// CONST
const domSelectors = {
    'slideCnt': '.slide_cnt',
    'btn': '.btn',
    'prev': ".prev",
    'next': ".next"
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

let left_value = 0;

function Prev() {
    const sliderbtn = document.querySelector(domSelectors.slideCnt);
    left_value = left_value + 360;

    if(count > 3) {
        count --;
        sliderbtn.style.left = left_value+"px";
    }

}


function Next() {
    const sliderbtn = document.querySelector(domSelectors.slideCnt);
    left_value = left_value - 360;
    if(left_value < -1800) {
        left_value = -1800;
    }
    if(count < movies_list.length - 1) {
        count ++;

    }
    sliderbtn.style.left = left_value+"px";   
    console.log(count);
}

const prev = document.querySelector(domSelectors.prev);
const next = document.querySelector(domSelectors.next);

prev.addEventListener('click', PrevButton);
function PrevButton() {
    if(count === 3) {
        prev.style.display = "none";   
    }
    if(count < 8) {
        next.style.display = "block";
    }
}

next.addEventListener('click', NextButton);
function NextButton() {
    if(count === 8) {
        next.style.display = "none";   
    } 

    if(count > 3) {
        prev.style.display = "block";
    }
}



let count = 3; // 버튼을 누르면 내가 어디에 있는지 확인
let movies_list;

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
    return movies.map(movie => generateMovieItem(movie)).join('') // movies안에 데이터와 movie를 맵핑 시킨 후 Arrary를 반환
}

function renderMovieList(movies) {
    const tmp = generateMovieList(movies); //tmp[1]: generateMovieList안의 데이터를 tmp에 string array로 저장
    const ele = document.querySelector(domSelectors.slideCnt); // slindeCnt클래스 
    render(ele, tmp)
}

function render(element, template) {
    element.innerHTML = template;
}

// APIs
// Request부터 Response까지 데이터 플로우 설명
function getMovieList(){
    return fetch('http://localhost:3000/movies') // fetch후
        .then((response) => response.json()) // 성공하면 response를 리턴하겠다
        // .then(json => console.log(json))       
}

// init

/* 1 */
getMovieList().then(movies => { // Entry Point: getMovieLlist를 호출함 - 만약 성공하면 return을 movies로 부르겠다
    movies_list = movies;
    renderMovieList(movies); // renderMovieList를 movies parameter를 이용해호출하겠다.
})