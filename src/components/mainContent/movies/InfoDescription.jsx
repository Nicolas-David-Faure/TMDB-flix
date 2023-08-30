import React, { useEffect } from 'react'
//style
import './sass/infoDescription.scss'
//context
import { useInfoFilmsContext } from '../../../context/InfoFilmsContext'
//commons
import Banner from '../../../commons/Banner'
//icons
import xIcon from '../../../assets/icons/x.svg'
import axios from 'axios'
const InfoDescription = ({ film }) => {
  const {filmDescription, setFilmDescription , genres} = useInfoFilmsContext()


  const handleCloseInfoDescription =()=>{
    setFilmDescription(null)
    document.body.style.overflow = 'auto';
  }

//{{overview,title,genre_ids,video}}

  const genresMovie = genres.filter((genre) => film.genre_ids.includes(genre.id));

  let genresString = genresMovie.map(({name})=>(`${name}`)).toString()


  useEffect(()=>{
    document.body.style.overflow = 'hidden';

  },[])
  



  return (
    <span 
      className='infoDescription__main'>
      
      <article>

        <img 
          className='infoDescription__btn_close' 
          onClick={handleCloseInfoDescription} 
          src={xIcon} alt="close" />
        <Banner activeBtnInfo={false} film={film}/>

        <div className='infoDescription__description'>
          <div>
            <p>Descripcón: {film.overview}</p>
          </div>
          <div >
            <p>Generos: {genresString}</p>

          </div>
          
          
        </div>
      </article>


    </span>
  )
}

export default InfoDescription
