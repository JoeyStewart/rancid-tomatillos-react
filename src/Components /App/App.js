import  { useState } from 'react'
import movieData from '../../Movies-sample.js'
import Movies from '../Movies/Movies.js'

  
function App(){
  const [movies, setMovies] = useState(movieData.movies)

  function chooseMovie(movies, id){
    console.log(id)
    let chosenMovie = movies.find( movie => movie.id === id)
    console.log(chosenMovie)
    setMovies(chosenMovie) 
    return(
      <main className='App'>
      <h1>Rancid-Tomatillos</h1>
      <p>Movie Time!</p>
      <Movies className='movieView' movies = {chosenMovie}/>
    </main>
    )
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
