import "./Card.css";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Card({ title, image, id, rating }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Link to={`movie/${id}`}>
      <section
        ref={ref}
        style={{ cursor: "pointer" }}
        className={`card ${inView ? "fade-in" : ""}`}
      >
        <img className="poster" src={image} alt={title} />
        <div className="movie-info">
          <h3 className="title">{title}</h3>
          <h3 className="rating">{rating}/10 Stars</h3>
        </div>
      </section>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
};