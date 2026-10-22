// https://omdbapi.com/?apikey=ec03133e&s=avenger&page=3
const movieForm = document.querySelector("#movie-form");
const movieInput = document.querySelector("#movie-input");
const movieHub = document.querySelector("#movieHub");


movieForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let quary = movieInput.value.trim()

    if (!quary) {   //quary == false
        return
    }

    // console.log(quary);
    searchMovies(quary)
})


async function searchMovies(movieName) {
    movieHub.innerHTML = `<div class="loader"></div>`
    let response = await fetch(`https://www.omdbapi.com/?apikey=ec03133e&s=${encodeURIComponent(movieName)}`)
    let data = await response.json()
    //console.log(response);
    
    console.log(data);
    if(data.Response === "True") {
        displayMovie(data.Search)
    } else {
        movieHub.innerHTML = `<p>${data.Error}</p>`
        
    }
    

}

function displayMovie(movies) {
    movieHub.innerHTML = ""
    movies.forEach((movie) => {
        let div = document.createElement("div");
        div.dataset.imdbID = movie.imdbID;
        div.setAttribute("class", "movie-cart")
        div.innerHTML = `
       <div>
            <img src=${movie.Poster} alt="" width="200px" height="300px" >
         </div>
        <div>
            <p>${movie.Title}</p>
            <p>${movie.Year}</p>
        </div>
    
    `
    movieHub.append(div)
    });


}

movieHub.addEventListener('click', (e) => {
    e.stopPropagation();
    const movieCart = e.target.closest(".movie-cart");

    const imdbID = movieCart.dataset.imdbID;
    console.log(imdbID);
    location.href = `movie-details.html?id=${imdbID}`
    
})