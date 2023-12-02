import  { useState } from 'react'
import movieData from '../../Movies-sample.js'
import Movies from '../Movies/Movies.js'
import './App.css'

  

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
    //need to add a movie description to the chosenMovie view along with the other h2 elements once the fetch call is hooked up
      return (
        <main className='App'>
          <header>
            <h1 className='rancid' style={{ cursor: 'pointer' }} onClick={backToMain}>Rancid Tomatillos</h1>
          </header>
          {/* <input className='searchbar'></input> */}
          {chosenMovie ? (
        <main className='selectedView'>
          <div className="backdrop">
            <img className='selectedBackdrop' src={chosenMovie.backdrop_path} alt={chosenMovie.title}></img>
          <div className="overlay-content">
            <div className='display-poster'>
              <img className='movie-poster'src={chosenMovie.poster_path} alt={chosenMovie.poster_path}></img>
            </div>
            <div className="info-blurb">
              <h2 className='selectedTitle' title={chosenMovie.title}>Title: {chosenMovie.title}</h2>
              <h2 className='selectedRating' title={chosenMovie.average_rating}>Rating: {chosenMovie.average_rating.toFixed(1)}</h2>
              <h2 className='selectedRelease' title={chosenMovie.release_date}>Release: {chosenMovie.release_date}</h2>
            </div>
          </div>
          </div>
        </main>
          ) : (
            <Movies movies={movies} showDetails={showDetails} />
          )}
        </main>
      );
    
  }

export default App;
