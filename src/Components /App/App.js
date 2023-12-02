import  { useState } from 'react'
import movieData from '../../Movies-sample.js'
import Movies from '../Movies/Movies.js'

  

 function App(){
     
      const [movies, setMovies] = useState(movieData.movies)
      const [chosenMovie, setChosenMovie] = useState(null);
      console.log()
      function showDetails(movieId) {
        const showMovie = movies.find((movie) => movie.id === movieId);
        setChosenMovie(showMovie);
      }

        function backToMain() {
          setMovies(movieData.movies); 
          setChosenMovie(null); 
      }
    
      return (
        <main className='App'>
          <header>
            <h1 className='rancid' style={{ cursor: 'pointer' }} onClick={backToMain}>Rancid Tomatillos</h1>
          </header>
          {chosenMovie ? (
            <main className='details'>
              <h2 title={chosenMovie.title}>Title: {chosenMovie.title}</h2>
              <h2 title={chosenMovie.average_rating}>Rating: {chosenMovie.average_rating.toFixed(1)}</h2>
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
