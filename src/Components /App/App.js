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
      <Movies movies = {movies}/>
    </main>
  )
}

export default App;
