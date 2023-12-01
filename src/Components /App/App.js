import movieData from '.src/Movies-sample.js'
import Movies from '../Movies/Movies.js'

  
  function App(){
     
      const [movies, setMovies] = useState(movieData)
      
      return(
          <main className='App'>
          <h1>Rancid-Tomatillos</h1>
          <p>Test</p>
          <Movies movies = {movies}/>
      </main>
    )
  }

export default App;
