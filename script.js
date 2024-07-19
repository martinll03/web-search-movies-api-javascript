
let resultContainer = document.getElementById('results');

document.getElementById('searchButton').addEventListener('click',searchMovies);
let api_key = '99a998bc6d3e72fad3ac368fcd839829';
let urlBase = 'https://api.themoviedb.org/3/search/movie';
let urlImg = 'https://image.tmdb.org/t/p/w200';

function searchMovies(){
    resultContainer.innerHTML='Cargando....';
    let searchInput = document.getElementById('searchInput').value;
    fetch(`${urlBase}?query=${searchInput}&api_key=${api_key}`)
    .then(response => response.json())
    .then(response => displayMovies(response.results))
};

function displayMovies(movies){
    resultContainer.innerHTML='';
    if(movies.length ===0){
        let parrafo =  document.createElement('p');
        parrafo.textContent = 'No hay peliculas a mostrar'
        resultContainer.appendChild(parrafo);
    }else {

        let parrafo =  document.createElement('p');
        parrafo.textContent = `si hay peliculas a mostrar cantidad de: ${movies.length}`
        resultContainer.appendChild(parrafo);

        movies.forEach(movie => {
            let movieDiv =  document.createElement('div');
            movieDiv.classList.add('movie');
            
            let title = document.createElement('h2');
            title.textContent = movie.title;

            let releaseDate = document.createElement('p');
            releaseDate.textContent = 'La fecha de lanzamiento fue: '+movie.release_date;

            let overview = document.createElement('p');
            overview.textContent = movie.overview;
        
            let posterPath = urlImg+movie.poster_path;
            let poster = document.createElement('img');
            poster.src = posterPath;

            movieDiv.appendChild(poster);
            movieDiv.appendChild(title);
            movieDiv.appendChild(overview);
            movieDiv.appendChild(releaseDate);
            
            resultContainer.appendChild(movieDiv);
            
        
        });
    }
}
