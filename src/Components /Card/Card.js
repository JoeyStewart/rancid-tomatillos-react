import './Card.css'
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types'

export default function Card({ title, image, id, showDetails, rating }) {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  return (
    <main to={`/${id}`} className='card-link'>
      <section
        ref={ref}
        style={{ cursor: 'pointer' }}
        className={`card ${inView ? 'fade-in' : ''}`}
        onClick={() => showDetails(id)}
      >
        <img className='poster' src={image} alt={title} />
        <div className='movie-info'>
          <h3 className='title'>{title}</h3>
          <h3 className='rating'>{rating}/10 Stars</h3>
        </div>
      </section>
    </main>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  showDetails: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,

 };

