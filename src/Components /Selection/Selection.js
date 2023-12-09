import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import './Selection.css'
import { useParams } from 'react-router-dom'
// import { useEffect } from 'react'

export default function Selection() {
  //do i need to pass id as a prop?
 const { id } = useParams()
 const [chosenMovie, setChosenMovie] = useState(null);

  useEffect(() => {
  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error code: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("test! in the second then in useEffect for Selection")
      setChosenMovie(data.movie);
    });
  }, [id]);

  return (
  <section className='selectedView'>
     {/* <Link to={`/details/${chosenMovie.id}`} className='back-link'>Back</Link> */}
    <div className="backdrop">
      <img className='selectedBackdrop' src={chosenMovie.backdrop_path} alt={chosenMovie.title}></img>
    <div className="overlay-content">
      <div className='display-poster'>
        <img className='movie-poster'src={chosenMovie.poster_path} alt={chosenMovie.poster_path}></img>
        <h4 className='selectedRelease' title={chosenMovie.release_date}>({chosenMovie.release_date.slice(0,4)})</h4>
        <h3 className='selectedRating' title={chosenMovie.average_rating}>{chosenMovie.average_rating.toFixed(1)}/10 Stars</h3>
      </div>
      <div className="info-blurb">
        <h2 className='selectedTitle' title={chosenMovie.title}>{chosenMovie.title}</h2>
        <h4 className='tagline'>{chosenMovie.tagline}</h4>
        <h3 className='selectedOverview' title={chosenMovie.overview}>{chosenMovie.overview}</h3>
        {/* <h5 className='selectedGenres'>{chosenMovie.genres}</h5> */}
      </div>
    </div>
    </div>
  </section>
  )
}

// Selection.propTypes = {
//   chosenMovie: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     backdrop_path: PropTypes.string.isRequired,
//     poster_path: PropTypes.string.isRequired,
//     release_date: PropTypes.string.isRequired,
//     tagline: PropTypes.string.isRequired,
//     overview: PropTypes.string.isRequired,
//     average_rating: PropTypes.number.isRequired
//   }).isRequired
//  };






