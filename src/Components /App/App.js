import  { useState } from 'react'
import movieData from '../../Movies-sample.js'
import Movies from '../Movies/Movies.js'

  
  function App(){
     
      const [movies, setMovies] = useState(movieData.movies)
      
      return(
          <main className='App'>
          <h1>Rancid-Tomatillos</h1>
          <p>Movie Time!</p>
          <Movies movies = {movies}/>
      </main>
    )
  }

export default App;
