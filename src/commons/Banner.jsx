import React from 'react'
import { useInfoFilmsContext } from '../context/InfoFilmsContext'
import './sass/banner.scss'
import AddToFavorite from './AddToFavorite'
import { useAcualizarDatosContext } from '../context/AcualizarDatosContext'

const Banner = ({film , activeBtnInfo = true}) => {
  const {userLogged} = useAcualizarDatosContext()
  const {IMAGE_PATH , setFilmDescription} = useInfoFilmsContext()

  let lengthTitle = film?.title.split(' ').length
  
  return (

    <figure className='banner__main'>
      <img src={IMAGE_PATH+film?.backdrop_path} alt="" />
      <figcaption>

        <div className='banner__description'>
          <h2 style={lengthTitle >= 3 ? {fontSize: '3rem' , lineHeight:'3rem'}: {fontSize: '5rem'} } >{film?.title}</h2>
          <div>
          <button>Reproducir</button>
          {activeBtnInfo ? <button onClick={()=>setFilmDescription(film)}>Mas información</button> : <AddToFavorite user={userLogged} film={film}/>}
        </div>
        </div>
        
      </figcaption>
    </figure>
  )
}

export default Banner
