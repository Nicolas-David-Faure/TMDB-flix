import React, { useState } from 'react'
import './sass/card.scss'

import { motion } from 'framer-motion'
import { useInfoFilmsContext } from '../context/InfoFilmsContext'

const Card = ({ film }) => {
  const [isHover, setIsHover] = useState(false)
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  const { setFilmDescription } = useInfoFilmsContext()

  let timeOut;
  const handleMouseEnter = () => {
    timeOut = setTimeout(() => {
      setIsHover(true);
    }, 400);
  };

  const handleMouseLeave = () => {
    clearTimeout(timeOut);
    setIsHover(false);
  };
  return (
    <motion.div 
      layout
      onHoverStart={handleMouseEnter}
      onHoverEnd={handleMouseLeave}
      animate={isHover ? {scale:1.2, zIndex:20 } : {scale:1} }
      className='card__main' >
      <figure>
        <img src={URL_IMAGE + film.poster_path} alt={film.title} />

        <motion.figcaption
          layout
           initial={{
            y:-10,
            opacity: 0,
            display:'none'
          }}
            animate={isHover ? { 
            display:'flex',
            y: -5 ,
            zIndex:20,
            opacity: 1,}
            :{
            y:-10,
            opacity: 0,
            display:'none'
          }}
            >
            <button onClick={()=>setFilmDescription(film)}>Description</button>
        </motion.figcaption>
      </figure>
    </motion.div>
  )
}



export default Card
