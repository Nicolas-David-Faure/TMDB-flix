import React, { useState } from 'react'
//styles
import './sass/card.scss'
//framer motion
import { motion } from 'framer-motion'
//redux
import { useSelector , useDispatch } from 'react-redux'
import { setFilmsDescription } from '../store/slice/infoDescription/infoDescriptionSlice'
//commons
import AddToFavorite from './AddToFavorite'
//icons
import arrowDonwIcon from '../assets/icons/arrowDown.svg'
import playIcon from '../assets/icons/play.svg'
//img
import IMG_NOT_FOUND from '../assets/images/image-not-found-1-scaled.png'

const Card = ({ film }) => {
  const [ isHover, setIsHover ] = useState(false)
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  let timeOut;
  const handleMouseEnter = () => { //active a setTimeOut whith some delay before define setIsHover to true 
    timeOut = setTimeout(() => {
      setIsHover(true);
    }, 300);
  };

  const handleMouseLeave = () => { //when the mouse leave then clear the timeOut and define setIsHover to false
    clearTimeout(timeOut);
    setIsHover(false);
  };
  const POSTER__PATH =  URL_IMAGE + film.poster_path
  
  const ifThereAreImage = POSTER__PATH !== 'https://image.tmdb.org/t/p/originalnull' ? POSTER__PATH : IMG_NOT_FOUND;

  return (
    <motion.div                            
      layout
      animate={ isHover ? {scale:1.2, zIndex:20 } : {scale:1} } //some scale when isHover
      className='card__main' 
      onHoverStart={handleMouseEnter} //if is on hover the state is hover pass to true
      onHoverEnd={handleMouseLeave} //if is not on hover the state is hover pass to false
      >
      <figure>
        <img src={ ifThereAreImage } alt={ film.title } />

        <InfoCard 
          film={film} 
          isHover={isHover}
           />
      </figure>
    </motion.div>
  )
}


const InfoCard =({ film , isHover })=>{
  const dispatch = useDispatch()
  

  const displayFigcaption = {//If isHover then show me the figcaption element 
    on:{display:'flex',y: -5 ,zIndex:20,opacity: 1
    },
    off:{y:-10,opacity: 0,display:'none'}
  }

return (
  <motion.figcaption  
    layout 
    initial={'off'} 
    animate={isHover ? 'on': 'off'} 
    variants={displayFigcaption}>

      <div className='card__btn_cont'>
        {film && <AddToFavorite film={film}/>}

        <div className='card__show_description' onClick={()=>dispatch(setFilmsDescription(film))}>{/*set film to a global state context to use on infoDescription.jsx*/}
          <img src={arrowDonwIcon} alt="description" />
        </div> 
      </div>

      <div className='card__desc_cont'> 
        <h5>{film?.title}</h5> 
      </div>
  </motion.figcaption>
)
}


export default Card
