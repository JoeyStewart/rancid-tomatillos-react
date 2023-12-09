import './Card.css'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Card({ title, image, id, showDetails, rating }) {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });
  const navigate = useNavigate()
  const showDetails = (id) => {
    navigate(`/${id}`)
   }

  return (
    <main
      ref={ref}
      style={{ cursor: 'pointer' }}
      className={`card ${inView ? 'fade-in' : ''}`}
      onClick={() => showDetails(movie.id)}
    >
      <img className='poster' src={image} alt={title} />
      <div className='movie-info'>
        <h3 className='title'>{title}</h3>
        <h3 className='rating'>{rating}/10 Stars</h3>
      </div>
    </main>
  );
}
//navigate on line 16 rather than showdetails, change routing for useParams. grab the id from the dynamic routing and define id using useparasms. navigate to the path, put the id as an arg in the fetch call fn useeffect and set the state as null in movie container rather than going to the app level, don't need it at top plevel. w use effect, the id accounts for what it's tracking so only runs the fetch for the one id otherise infiite loop. change the onclick to jjust navaite to the url, se tthe path to dynmamically acath the id and use sueparans at the container level for whwatever 
Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  showDetails: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
 };

