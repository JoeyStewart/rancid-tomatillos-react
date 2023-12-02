import Card from "../Card/Card.js"
import './Movies.css'

export default function Movies({ movies, showDetails }) {
  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <Card 
            title={movie.title} 
            image={movie.poster_path} 
            rating={movie.average_rating.toFixed(1)}
            id={movie.id}
            key={movie.id} 
            showDetails={() => showDetails(movie.id)}
        />
      ))}
    </div>
  );
}

