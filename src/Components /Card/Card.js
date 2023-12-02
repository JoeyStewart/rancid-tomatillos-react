import './Card.css'

export default function Card({ title, image, id, showDetails }){
    console.log(image)
    return (
      <button style={{ cursor: 'pointer' }} className='card' onClick={() => showDetails(id)}>
        <img className='poster' src={image} alt={title}></img>
        <h3 className='title'>{title}</h3>
      </button>
    )
  } 
