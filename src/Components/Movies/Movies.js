import Card from "../Card/Card.js";
import "./Movies.css";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";

export async function loader() {
  const data = await fetch(
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
  ).then((response) => {
    if (!response.ok) {
      if (response.status >= 400 && response.status < 500) {
        throw new Error("Error: There was a problem with the request");
      } else if (response.status >= 500) {
        throw new Error("Error: Please try again later");
      } else {
        throw new Error("Error: Unable to fulfill request");
      }
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

export default Movies;