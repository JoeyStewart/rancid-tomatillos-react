import './Card.css'
import { useInView } from 'react-intersection-observer';

// export default function Card({ title, image, id, showDetails}){
//     console.log(image)
//     return (
//     <main style={{ cursor: 'pointer' }} className='card' onClick={() => showDetails(id)}>
//       <img className='poster' src={image}/>
//       <h3 className='title'>{title}</h3>
//     </main>
//     )
//   } 

export default function Card({ title, image, id, showDetails }) {
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
      <h3 className='title'>{title}</h3>
    </main>
  );
}
