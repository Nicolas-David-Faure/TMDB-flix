import React, { useEffect } from 'react'
//style
import './sass/infoDescription.scss'
//redux
import { useSelector , useDispatch } from 'react-redux'
import { setFilmsDescription } from '../../../store/slice/infoDescription/infoDescriptionSlice'
//commons
import Banner from '../../../commons/Banner'
//icons
import xIcon from '../../../assets/icons/x.svg'
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
const InfoDescription = ({ film }) => {
  const { filmGenres } = useSelector(store=> store.infoDescriptionSlice)
  const dispatch = useDispatch()

  const handleCloseInfoDescription = () =>{ 
    dispatch(setFilmsDescription( null ))
    document.body.style.overflow = 'auto';
  }

//{{overview,title,genre_ids,video}}

  const genresMovie = filmGenres.filter( ( genre ) => film.genre_ids.includes(genre.id) );

  let genresString = genresMovie.map( ( { name } )=>( ` ${ name }` ) ).toString()

  useEffect(()=>{
    document.body.style.overflow = 'hidden';
    
   
  },[])

  return (
    <span onClick={handleCloseInfoDescription} className='infoDescription__main'>
      <article onClick={(e)=>e.stopPropagation()}>

        <img 
          className='infoDescription__btn_close' 
          onClick={ handleCloseInfoDescription } 
          src={ xIcon } alt="close" />

        <Banner activeBtnInfo={ false } film={ film }/>

        <Description film={film} genresString={genresString}/>

      </article>
    </span>
  )
}

const Description = ( { film , genresString } ) => {

  return(
    <div className='infoDescription__description'>

      <div>
        <p>Descripcón: { film.overview }</p>
      </div>

      <div >
        <p>Generos: { genresString }</p>
      </div>

    </div>
  )
}

export default InfoDescription
