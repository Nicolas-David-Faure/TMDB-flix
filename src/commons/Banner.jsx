import React from 'react'
import { useInfoFilmsContext } from '../context/InfoFilmsContext'
import './sass/banner.scss'

const Banner = ({film , activeBtnInfo = true}) => {
  const {IMAGE_PATH , setFilmDescription} = useInfoFilmsContext()

  return (

    <figure className='banner__main'>
      <img src={IMAGE_PATH+film?.backdrop_path} alt="" />
      <figcaption>

        <h2>{film?.title}</h2>
        <div>
          <button>Reproducir</button>
          {activeBtnInfo && <button onClick={()=>setFilmDescription(film)}>Mas información</button>}
        </div>
      </figcaption>
    </figure>
  )
}

export default Banner
