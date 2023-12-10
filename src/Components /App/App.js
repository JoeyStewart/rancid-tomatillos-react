import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Movies from '../Movies/Movies.js';
import './App.css';
import Selection from '../Selection/Selection.js';

 function App(){
  const [movies, setMovies] = useState([])
  const [chosenMovie, setChosenMovie] = useState(null);
  const [error, setError] = useState('')
  const [moviesLoaded, setMoviesLoaded] = useState(false)
  const navigate = useNavigate();
  console.log(chosenMovie)
  
  function showDetails(movieID) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error code: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setChosenMovie(data.movie);
        navigate(`/${data.movie.id}`);
      })
      // document.body.style.overflow = 'hidden';
      document.documentElement.scrollTop = 0;
    }
    
  
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
      setMoviesLoaded(true)
    })
    .catch(error => {
      console.log('<---catch error', error)
      setError(error.message)
    })
  }
  
  useEffect(() => {
    getMovies()
  }, [])
  
  function backToMain() {
    // setChosenMovie(null); 
    navigate('/')
    document.body.style.overflow = 'visible';
    }


  return (
    <main className='App'>
       <header>
          <h1 className='rancid' style={{ cursor: 'pointer' }} onClick={backToMain}>Rancid Tomatillos</h1>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Limelight&display=swap" rel="stylesheet"></link>
      </header>
      <Routes>
        <Route path='/' 
            element={
            moviesLoaded ? (
            <Movies movies={movies} showDetails={showDetails} />
            ) : error ? (
            <h2 className="error-message">The server is down. Please try again later.</h2>
            ) : (
            <p>Loading movies...</p>)}/>
        {chosenMovie && (
        <Route path={`/${chosenMovie.id}`} element={<Selection chosenMovie={chosenMovie} />} />)}
        <Route path='*' element={<p className="error-message" >404 Page Not Found: This Page Doesn't Exist</p>} />
      </Routes>
      {/* <input className='searchbar'></input> */}
    </main>
  );
}


export default App;
