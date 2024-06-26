import React, { useState } from 'react'
//router
import { useLocation } from 'react-router-dom'
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

//img
import IMG_NOT_FOUND from '../assets/images/image-not-found-1-scaled.png'
import PlayButton from './PlayButton'
import DescriptionButton from './DescriptionButton'

const Card = ({ film }) => {
  const {pathname} = useLocation();
  let type = pathname.split('/').at(-1) 
  let nameOrTitle = type === 'tv' ? 'name' : 'title'

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
        <img className='card__image' src={ ifThereAreImage } alt={ film[nameOrTitle] } />

        <InfoCard 
          film={film} 
          isHover={isHover}
           />
      </figure>
    </motion.div>
  )
}


const InfoCard =({ film , isHover })=>{
  const {pathname} = useLocation();
  let type = pathname.split('/').at(-1) 
  let nameOrTitle = type === 'tv' ? 'name' : 'title'
  const dispatch = useDispatch()
  

  const displayFigcaption = {//If isHover then show me the figcaption element 
    on:{display:'flex',y: -10 ,zIndex:20,opacity: 1
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
        <div className='card__btn_cont_first'>
          <PlayButton film={film} />
          
          {film && <AddToFavorite film={film}/>}
        </div>
        <DescriptionButton film={film}/>

      </div>

      <div className='card__desc_cont'> 
        <h5>{film?.[nameOrTitle]}</h5> 
      </div>
  </motion.figcaption>
)
}


export default Card
