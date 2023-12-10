// import PropTypes from 'prop-types'
import { useLoaderData } from "react-router-dom";
import Movie from "../Components/Movie/Movie";

export async function loader({ params }) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${params.movieId}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(`Error code: ${response.status}`);
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