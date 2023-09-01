import React from 'react'
//context
import { useInfoFilmsContext } from '../context/InfoFilmsContext'
import { useAcualizarDatosContext } from '../context/AcualizarDatosContext'
//styles
import './sass/banner.scss'
//commons
import AddToFavorite from './AddToFavorite'
//img
import IMG_NOT_FOUND from '../assets/images/image-not-found-1-scaled.png'

const Banner = ({ film , activeBtnInfo = true }) => {
  const { userLogged } = useAcualizarDatosContext()
  const { IMAGE_PATH , setFilmDescription } = useInfoFilmsContext()

  let lengthTitle = film?.title.split(' ').length
  

  const canIRenderMoreInfoBtn = (film && activeBtnInfo)

  const POSTER__PATH = IMAGE_PATH+film?.backdrop_path
  const ifThereAreImage = POSTER__PATH !== 'https://image.tmdb.org/t/p/originalundefined' ? POSTER__PATH : IMG_NOT_FOUND;
  
  return (

    <figure style={!activeBtnInfo ? {borderRadius: '5px 5px 0 0'} : {borderRadius: 0}} className='banner__main'>
      <img  style={!activeBtnInfo ? {borderRadius: '5px 5px 0 0'} : {borderRadius: 0}} src={ifThereAreImage} alt={film?.title} />
      <figcaption>

        <div className='banner__description'>

          <h2 style={lengthTitle >= 3 ? {fontSize: '3rem' , lineHeight:'3rem'}: {fontSize: '5rem'} } >{film?.title}</h2>
          <div>
            <button>Reproducir</button>
            {
              canIRenderMoreInfoBtn  ? 

              <button onClick={()=>setFilmDescription(film)}>Mas información</button> 
              
                                      :

              <AddToFavorite user={userLogged} film={film}/>
            }
          </div>

        </div>
        
      </figcaption>
    </figure>
  )
}

export default Banner
