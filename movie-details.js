
const params = new URLSearchParams(location.search);
let imdbID = params.get("id");
const movieDetail = document.querySelector("#movie-detail");


if(imdbID) {
    searchMovie(imdbID.trim());
}


async function searchMovie(imdbID) {
   
    let response = await fetch(`https://www.omdbapi.com/?apikey=ec03133e&i=${imdbID}&plot=full`)
    let data = await response.json()
    console.log(data);

    if(data.Response === "True") {
        displayMovie(data)
    } else {
        console.log(data.Error);
        
    }
    

}



function displayMovie(data) {

    console.log("yah tak to pauch gyehia ");
    
   
    movieDetail.innerHTML = `   
        <div>
            <img src="${data.Poster}" alt="">
        </div>

        <div>
            <div>
                <h2>${data.Title}</h2>
                <section>
                    <p>${data.Released}</p>
                    <p>${data.Rated}</p>
                    <p>${data.Runtime}</p>
                    <p>${data.Genre}</p>
                    <p>IMDB: ${data.imdbRating} / 10</p>
                </section>
                <div>
                <p>plot Overview</p>
                <p> ${data.Plot}</p>
                </div>
            </div>

            <div>
                <section>
                    <p>Director</p>
                    <p>${data.Director}</p>
                </section>
                <section>
                    <p>Writer</p>
                    <p>${data.Writer}</p>
                </section>
            </div>

            <div>
                <p>Actors</p>
                <p>${data.Actors}</p>
            </div>

            <div>
                <section>
                    <p>language</p>
                    <p>${data.Language}</p>
                </section>
                <section>
                    <p>Country/p>
                    <p>${data.Country}</p>
                </section>
            </div>

        </div>

        <button>
          <a href=https://www.imdb.com/title/${data.imdbID} target="_blank">View on IMDB</a>
        </button>

    `
  
    
}