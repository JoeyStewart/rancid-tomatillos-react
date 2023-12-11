// import PropTypes from 'prop-types'
import { useLoaderData } from "react-router-dom";
import Movie from "../Components/Movie/Movie";

export async function loader({ params }) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${params.movieId}`
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
}

function Selection() {
  const data = useLoaderData();
  const chosenMovie = data.movie;

  if (!chosenMovie) {
    return <p>No Movie</p>;
  }
  return <Movie chosenMovie={chosenMovie} />;
}

 export default Selection