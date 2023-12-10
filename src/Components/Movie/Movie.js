import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

export default function Movie({ chosenMovie }) {
  return (
    <section className="selectedView">
      <div className="backdrop">
        <img
          className="selectedBackdrop"
          src={chosenMovie.backdrop_path}
          alt={chosenMovie.title}
        />
        <div className="overlay-content">
          <div className="display-poster">
            <img
              className="movie-poster"
              src={chosenMovie.poster_path}
              alt={chosenMovie.poster_path}
            />
            <h4 className="selectedRelease" title={chosenMovie.release_date}>
              ({chosenMovie.release_date.slice(0, 4)})
            </h4>
          </div>
          <div className="info-blurb">
            <h2 className="selectedTitle" title={chosenMovie.title}>
              {chosenMovie.title}
            </h2>
            <h4 className="tagline">{chosenMovie.tagline}</h4>
            <h3 className="selectedOverview" title={chosenMovie.overview}>
              {chosenMovie.overview}
            </h3>
            <h3 className="selectedRating" title={chosenMovie.average_rating}>
              {chosenMovie.average_rating.toFixed(1)}/10 Stars
            </h3>
          </div>
        </div>
      </div>
      <div className="res-overlay-mid">
        <div className="display-poster-mid">
          <div className="first-info-mid">
            <h2 className="selectedTitle-mid" title={chosenMovie.title}>
              {chosenMovie.title}
            </h2>
            <h4 className="tagline-mid">{chosenMovie.tagline}</h4>
          </div>
          <div className="mid-poster-container">
            <img
              className="movie-poster-mid"
              src={chosenMovie.poster_path}
              alt={chosenMovie.poster_path}
            />
            <h4
              className="selectedRelease-mid"
              title={chosenMovie.release_date}
            >
              ({chosenMovie.release_date.slice(0, 4)})
            </h4>
          </div>
          <div className="second-info-mid">
            <h3 className="selectedOverview-mid" title={chosenMovie.overview}>
              {chosenMovie.overview}
            </h3>
            <h3
              className="selectedRating-mid"
              title={chosenMovie.average_rating}
            >
              {chosenMovie.average_rating.toFixed(1)}/10 Stars
            </h3>
            {/* <h5 className="selectedGenres-mid">{chosenMovie.genres.split}</h5> */}
          </div>
        </div>
      </div>
      <div className="res-overlay-small">
        <div className="display-poster-small">
          <div className="first-info-small">
            <h2 className="selectedTitle-small" title={chosenMovie.title}>
              {chosenMovie.title}
            </h2>
            <h4 className="tagline-small">{chosenMovie.tagline}</h4>
          </div>
          <img
            className="movie-poster-small"
            src={chosenMovie.poster_path}
            alt={chosenMovie.poster_path}
          />
          <h4
            className="selectedRelease-small"
            title={chosenMovie.release_date}
          >
            ({chosenMovie.release_date.slice(0, 4)})
          </h4>
          <div className="second-info-small">
            <h3 className="selectedOverview-small" title={chosenMovie.overview}>
              {chosenMovie.overview}
            </h3>
            <h3
              className="selectedRating-small"
              title={chosenMovie.average_rating}
            >
              {chosenMovie.average_rating.toFixed(1)}/10 Stars
            </h3>
            {/* <h5 className="selectedGenres-small">{chosenMovie.genres}</h5> */}
          </div>
        </div>
      </div>
    </section>
  );
}

Movie.propTypes = {
  chosenMovie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    backdrop_path: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    average_rating: PropTypes.number.isRequired,
  }).isRequired,
};