import React from 'react'
//styles
import './sass/similarFilms.scss'
//image
import imageNotFound from '../assets/images/image-not-found-1-scaled.png'
//utils
import truncateString from '../utils/truncateString.js'
//commons
import AddToFavorite from './AddToFavorite'
import PlayButton from './PlayButton'
import DescriptionButton from './DescriptionButton'

const SimilarFilms = ({ genres , films , nameOrTitle }) => {
  const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
  const arrFilms = films?.results;  
  const existArr = arrFilms?.length > 0 ? true : false;

  return (
    <ul className='similarFilms__main'>
      <h2>{existArr ? 'Otros titulos similares' : 'Titulos similares no encontrados..'}</h2>
      {arrFilms?.map(film =>{
        const needLastThreePoints =film.overview.length > 130 ? true : false
        const overview = film.overview !== '' ? truncateString(film.overview,150,needLastThreePoints) : 'Descripción no encontrada...' 
        return(
          <li key={film.id} >
          <img className='similarFilms__image' src={film.backdrop_path ? IMAGE_PATH+film.backdrop_path : imageNotFound} alt={film.title} />
          <figcaption>
            <h2>{film[nameOrTitle]}</h2>
            <p className='similarFilms__overview' >{overview}</p>
            <p>Generos: {genres}</p>

            <div className='similarFilms__cont_btns'>

              <AddToFavorite film={film} />
              <PlayButton film={film} />
              <DescriptionButton film={film}/>
            </div>
          </figcaption>
        </li>)
        }
      )}
      
    </ul>
  )
}

export default SimilarFilms
