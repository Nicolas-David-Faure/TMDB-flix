import React from 'react'
//context
import { useInfoFilmsContext } from '../context/InfoFilmsContext'
import { useAcualizarDatosContext } from '../context/AcualizarDatosContext'
//styles
import './sass/banner.scss'
//commons
import AddToFavorite from './AddToFavorite'

const Banner = ({ film , activeBtnInfo = true }) => {
  const { userLogged } = useAcualizarDatosContext()
  const { IMAGE_PATH , setFilmDescription } = useInfoFilmsContext()

  let lengthTitle = film?.title.split(' ').length
  

  const canIRenderMoreInfoBtn = (film && activeBtnInfo)

  return (

    <figure style={!activeBtnInfo ? {borderRadius: '5px 5px 0 0'} : {borderRadius: 0}} className='banner__main'>
      <img  style={!activeBtnInfo ? {borderRadius: '5px 5px 0 0'} : {borderRadius: 0}} src={IMAGE_PATH+film?.backdrop_path} alt={film?.title} />
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
