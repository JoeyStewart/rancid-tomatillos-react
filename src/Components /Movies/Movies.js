import Card from "../Card/Card.js"
import './Movies.css'

export default function Movies({ movies }) {
  return (
    <div className="movies-container">
      {movies.map((movie) => (
        <Card 
            title={movie.title} 
            image={movie.poster_path} 
            id={movie.id}
            key={movie.id} 
        />
      ))}
    </div>
  );
}

