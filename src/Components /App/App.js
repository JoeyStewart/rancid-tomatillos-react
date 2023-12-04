import  { useState, useEffect } from 'react'
import Movies from '../Movies/Movies.js'
import './App.css'
import Selection from '../Selection/Selection.js'

 function App(){
  const [movies, setMovies] = useState([])
  const [chosenMovie, setChosenMovie] = useState(null);
  const [error, setError] = useState('')

  function showDetails(movieID) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error code: ${response.status}`);
        }
          return response.json();
        })
        .then(data => setChosenMovie(data.movie))
        document.body.style.overflow = 'hidden';
        document.documentElement.scrollTop = 0;
  }
  console.log(chosenMovie)
    
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
    setChosenMovie(null); 
    document.body.style.overflow = 'visible';
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
        <Selection chosenMovie={chosenMovie}/>
      ) : (
        <Movies movies={movies} showDetails={showDetails} />
      )}
    </main>
  );
  }

export default App;
