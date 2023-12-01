import './Card.css'

export default function Card({ title, image, id }){
    console.log(image)
    return (
      <div className='card'>
        <h3 className='title'>{title}</h3>
        <img className='poster' src={image}></img>
    </div>
    )
  } 
