import  { useState } from 'react'
import movieData from '../../Movies-sample.js'
import Movies from '../Movies/Movies.js'

  
function App(){
  const [movies, setMovies] = useState(movieData.movies)
  const [chosenMovie, setChosenMovie] = useState(null);

  function showDetails(movieId){
    console.log(movieId)
    const chosenMovie = movies.find(movie => movie.id === movieId)
    console.log(chosenMovie)
    setChosenMovie(showMovie);
  }

  return(
    <main className='App'>
      <h1>Rancid-Tomatillos</h1>
      <p>Movie Time!</p>
      {chosenMovie ? (
        <main>
          <h2 title={chosenMovie.title}>Title: {chosenMovie.title}</h2>
          <h2 title={chosenMovie.average_rating}>Rating: {chosenMovie.average_rating}</h2>
          <h2 title={chosenMovie.release_date}>Release: {chosenMovie.release_date}</h2>
           <img src={chosenMovie.backdrop_path}></img>
        </main>
           
      ) : (
            <Movies movies={movies} showDetails={showDetails} />
          )}
    </main>
  );
}

export default App;
