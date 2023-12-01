import Card from "../Card/Card.js"
import movieData from "../../Movies-sample.js"
import './Movies.css'
//Do not need {movies} currently, but Lex advised to keep it
export default function Movies({movies}){

return (
    <div className="movie-display">
      {movieData.movies.map((movie) => {
        return (
        <Card 
        title={movie.title} 
        image={movie.poster_path} 
        id={movie.id}
        key={movie.id} 
        />
            )}
        )}
        </div>
    );
}

