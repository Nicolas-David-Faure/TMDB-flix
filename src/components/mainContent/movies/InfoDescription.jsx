import React, { useEffect , useState } from 'react'
//framer-motion
import { motion } from 'framer-motion'
//router
import { useLocation } from 'react-router-dom'
//style
import './sass/infoDescription.scss'
//redux
import { useSelector , useDispatch } from 'react-redux'
import { setFilmsDescription } from '../../../store/slice/infoDescription/infoDescriptionSlice'
//commons
import Banner from '../../../commons/Banner'
import SimilarFilms from '../../../commons/SimilarFilms'
//icons
import xIcon from '../../../assets/icons/x.svg'
import axios from 'axios'
const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
const InfoDescription = ({ film }) => {
  const [ similarFilms , setSimilarMovies ] = useState(null)
  const { filmGenres } = useSelector(store=> store.infoDescriptionSlice)
  const { personalAside , thereWasChange, change } = useSelector(store => store.favoritesSlice)
  const dispatch = useDispatch()

  const handleCloseInfoDescription = () =>{ 
    dispatch(setFilmsDescription( null ))
    if(!personalAside)
    document.body.style.overflow = 'auto';
  }
  const movieOrTv = Object.keys(film).includes('name') ? 'tv' : 'movie'; 

  const genresMovie = filmGenres.filter( ( genre ) => film.genre_ids.includes(genre.id) );

  let genresString = genresMovie.map( ( { name } )=>( ` ${ name }` ) ).toString()
  
  useEffect(()=>{
    document.body.style.overflow = 'hidden';
    axios.get(`/api/${ movieOrTv }/similar/${ film.id }`)
    .then(({data})=>{
      
      setSimilarMovies(data)
    })
  },[])

  return (
    <span onClick={handleCloseInfoDescription} className='infoDescription__main'>
      <motion.article
      initial={{y:'100vh', opacity:0}}
      animate={{y:0, opacity:1, transition:{
        duration:.3, type:'spring', stiffness: 80
      }}}
      onClick={(e)=>e.stopPropagation()}>

        <img 
          className='infoDescription__btn_close' 
          onClick={ handleCloseInfoDescription } 
          src={ xIcon } alt="close" />

        <Banner activeBtnInfo={ false } film={ film }/>

        <Description film={film} genresString={genresString}/>

        <SimilarFilms genres={genresString} nameOrTitle={movieOrTv === 'tv' ? 'name' : 'title'} films={similarFilms} />
      </motion.article>
    </span>
  )
}

const Description = ( { film , genresString } ) => {
  
  // let nameOrTitle = type === 'tv' ? 'name' : 'title'

  return(
    <div className='infoDescription__description'>

      <div>
        <p>Descripción: { film.overview ? film.overview : 'Descripción no encontrada...' }</p>
      </div>

      <div >
        <p>Generos: { genresString }</p>
      </div>

    </div>
  )
}

export default InfoDescription
