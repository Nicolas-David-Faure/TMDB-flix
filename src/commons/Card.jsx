import React from 'react'
import './sass/card.scss'


const Card = ({ film }) => {
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
  
  return (
    <div className='card__main'>
      <figcaption>
        <img src={URL_IMAGE + film.poster_path} alt={film.title} />
      </figcaption>
    </div>
  )
}

export default Card
