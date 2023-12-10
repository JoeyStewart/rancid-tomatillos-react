import Card from "../Card/Card.js";
import "./Movies.css";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";

export async function loader() {
  const data = await fetch(
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response);
    }
    return response.json();
  });
  return { data };
}

function Movies() {
  const { data } = useLoaderData();
  const movies = data.movies;

  return (
    <>
      {movies.length ? (
        <div className="movies-container">
          {movies.map((movie) => (
            <Card
              title={movie.title}
              image={movie.poster_path}
              rating={movie.average_rating.toFixed(1)}
              id={movie.id}
              key={movie.id}
            />
          ))}
        </div>
      ) : (
        <p>No Movies</p>
      )}
    </>
  );
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      poster_path: PropTypes.string,
      average_rating: PropTypes.number,
      id: PropTypes.number,
    })
  ).isRequired,
  showDetails: PropTypes.func.isRequired,
};

export default Movies;