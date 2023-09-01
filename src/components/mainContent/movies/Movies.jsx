import React, { useEffect } from 'react'
//router
import { Route , Routes } from 'react-router-dom'
//axios
import axios from 'axios'
//styles
import './sass/movies.scss'
//redux
import { useSelector , useDispatch } from 'react-redux'
import {  setFilmGenres} from '../../../store/slice/infoDescription/infoDescriptionSlice'
//components
import MoviesRecomended from './MoviesRecomended'
import FilmsSearched from './FilmsSearched'
import InfoDescription from './InfoDescription'


const Movies = () => {
  const { filmGenres  , filmDescription} = useSelector(store=> store.infoDescriptionSlice)
  const filmDescriptionIsThere = filmDescription ? true : false;
  const dispatch = useDispatch()


  useEffect(()=>{

    axios.get('/api/movie/genre')
      .then( ( { data: { genres } } )=> dispatch(setFilmGenres( genres )) )
      .catch( err => console.error( err ))

  },[])

  return (
    <section className='movies__main'>
      { filmDescriptionIsThere && <InfoDescription film={ filmDescription } /> }

      <Routes>
        <Route path='/browse' element={ <MoviesRecomended /> }/>
        <Route path='/search' element={ <FilmsSearched /> }/>
      </Routes>
    
    </section>
  )
}

export default Movies
