import React, { useState } from 'react'
//styles
import './sass/card.scss'
//framer motion
import { motion } from 'framer-motion'
//context
import { useInfoFilmsContext } from '../context/InfoFilmsContext'
//commons
import AddToFavorite from './AddToFavorite'
//icons
import arrowDonwIcon from '../assets/icons/arrowDown.svg'

const Card = ({ user ,film }) => {
  const [isHover, setIsHover] = useState(false)
  const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

  const { setFilmDescription } = useInfoFilmsContext()  //global setState 

  let timeOut;
  const handleMouseEnter = () => { //active a setTimeOut whith some delay before define setIsHover to true 
    timeOut = setTimeout(() => {
      setIsHover(true);
    }, 400);
  };

  const handleMouseLeave = () => { //when the mouse leave then clear the timeOut and define setIsHover to false
    clearTimeout(timeOut);
    setIsHover(false);
  };



  return (
    <motion.div                            
      layout
      onHoverStart={handleMouseEnter} //if is on hover the state is hover pass to true
      onHoverEnd={handleMouseLeave} //if is not on hover the state is hover pass to false
      animate={isHover ? {scale:1.2, zIndex:20 } : {scale:1} } //some scale when isHover
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
            display:'flex',//If isHover then show me the figcaption element 
            y: -5 ,
            zIndex:20,
            opacity: 1,}
            :{
            y:-10,
            opacity: 0,
            display:'none' //else not 
          }}
            >
            <div className='card__btn_cont'>
              {(user && film) && <AddToFavorite user={user} film={film}/>}
              <div className='card__show_description' onClick={()=>setFilmDescription(film)}>
                <img src={arrowDonwIcon} alt="description" />
              </div> {/*set film to a global state context to use on infoDescription.jsx*/}
            </div>
            <div className='card__desc_cont'>
              <h5>{film.title}</h5>
            </div>
        </motion.figcaption>
      </figure>
    </motion.div>
  )
}



export default Card
