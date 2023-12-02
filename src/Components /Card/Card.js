import './Card.css'
import { useInView } from 'react-intersection-observer';

export default function Card({ title, image, id, showDetails, rating }) {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  return (
    <main
      ref={ref}
      style={{ cursor: 'pointer' }}
      className={`card ${inView ? 'fade-in' : ''}`}
      onClick={() => showDetails(id)}
    >
      <img className='poster' src={image} alt={title} />
      <div className='movie-info'>
        <h3 className='title'>{title}</h3>
        <h3 className='rating'>Rating: {rating}</h3>
      </div>
    </main>
  );
}
