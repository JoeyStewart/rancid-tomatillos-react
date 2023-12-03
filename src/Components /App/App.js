import  { useState, useEffect } from 'react'
import movieData from '../../Movies-sample.js'
import Movies from '../Movies/Movies.js'
import './App.css'

  

 function App(){
  const [movies, setMovies] = useState([])
  const [chosenMovie, setChosenMovie] = useState(null);
  const [error, setError] = useState('')
  // console.log()
  function showDetails(movieId) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error code: ${response.status}`);
        }
          return response.json();
        })
      .then(data => setChosenMovie(data.movie))
  }
  console.log(chosenMovie)
    // const chosenMovie = movies.find((movie) => movie.id === movieId);
    // setChosenMovie(chosenMovie);

    useEffect(() => {
      getMovies()
    }, [])

    const getMovies= () => {
      fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if(!response.ok) {
          console.log("<----error", error)
          throw new Error (`${error}: Failed attempt to get information, try again.`)
        }
        return response.json()
      })
      .then(moviesData => {
        console.log("<---movie data", moviesData)
        setMovies(moviesData.movies)
      })
      .catch(error => {
        console.log('<---catch error', error)
        setError(error.message)
      })
    }


    function backToMain() {
      // setMovies([]); 
      setChosenMovie(null); 
  }
  
      return (
        <main className='App'>
          <header>
            <h1 className='rancid' style={{ cursor: 'pointer' }} onClick={backToMain}>Rancid Tomatillos</h1>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Limelight&display=swap" rel="stylesheet"></link>
          </header>
          {/* <input className='searchbar'></input> */}
          {chosenMovie ? (
        <section className='selectedView'>
          <div className="backdrop">
            <img className='selectedBackdrop' src={chosenMovie.backdrop_path} alt={chosenMovie.title}></img>
          <div className="overlay-content">
            <div className='display-poster'>
              <img className='movie-poster'src={chosenMovie.poster_path} alt={chosenMovie.poster_path}></img>
              <h4 className='tagline'>{chosenMovie.tagline}</h4>
            </div>
            <div className="info-blurb">
              <h2 className='selectedTitle' title={chosenMovie.title}>{chosenMovie.title}</h2>
              <h3 className='selectedOverview' title={chosenMovie.overview}>{chosenMovie.overview}</h3>
              <h3 className='selectedRating' title={chosenMovie.average_rating}>Rating: {chosenMovie.average_rating.toFixed(1)}</h3>
              <h4 className='selectedRelease' title={chosenMovie.release_date}>Release: {chosenMovie.release_date.slice(0,4)}</h4>
              {/* <h5 className='selectedGenres'>{chosenMovie.genres}</h5> */}
            </div>
          </div>
          </div>
        </section>
          ) : (
            <Movies movies={movies} showDetails={showDetails} />
          )}
        </main>
      );
    
  }

export default App;
